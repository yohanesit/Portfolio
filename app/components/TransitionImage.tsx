"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type SyntheticEvent,
} from "react";
import { createPortal } from "react-dom";
import { ViewTransition } from "react";
import Image, { type ImageProps } from "next/image";

const LIGHTBOX_NAME = "card";

function toViewTransitionName(src: ImageProps["src"]): string {
  const path = typeof src === "string" ? src : "image";
  return `img-${path.replace(/^\/+/, "").replace(/[^a-zA-Z0-9]+/g, "-")}`;
}

function resolveSrc(src: ImageProps["src"]): string {
  if (typeof src === "string") return src;
  if (typeof src === "object" && src && "src" in src) return src.src;
  return "";
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function startViewTransition(update: () => void): { finished: Promise<void> } {
  if (typeof document.startViewTransition === "function") {
    return document.startViewTransition(update);
  }
  update();
  return { finished: Promise.resolve() };
}

function sourceImage(from: HTMLElement | null): HTMLImageElement | null {
  return from?.querySelector("img") ?? null;
}

/** next/image wrapped for shared-element View Transitions on navigation and lightbox. */
export function TransitionImage(props: ImageProps) {
  const name = toViewTransitionName(props.src);
  const resolvedSrc = resolveSrc(props.src);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const cloneRef = useRef<HTMLImageElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openRef = useRef(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      document.documentElement.classList.remove("vt-lightbox-active");
      dialogRef.current?.close();
      openRef.current = false;
    };
  }, []);

  const closeLightbox = useCallback(async () => {
    if (!openRef.current) return;

    const source = sourceImage(triggerRef.current);
    const clone = cloneRef.current;
    const dialog = dialogRef.current;
    if (!source || !clone || !dialog) return;

    const finish = () => {
      source.style.visibility = "";
      source.style.viewTransitionName = "";
      clone.style.viewTransitionName = "";
      document.documentElement.classList.remove("vt-lightbox-active");
      openRef.current = false;
    };

    if (prefersReducedMotion()) {
      dialog.close();
      finish();
      return;
    }

    document.documentElement.classList.add("vt-lightbox-active");
    clone.style.viewTransitionName = LIGHTBOX_NAME;

    try {
      const transition = startViewTransition(() => {
        clone.style.viewTransitionName = "";
        source.style.viewTransitionName = LIGHTBOX_NAME;
        source.style.visibility = "";
        dialog.close();
      });
      await transition.finished;
    } finally {
      finish();
    }
  }, []);

  const openLightbox = useCallback(async () => {
    if (openRef.current) return;

    const source = sourceImage(triggerRef.current);
    const clone = cloneRef.current;
    const dialog = dialogRef.current;
    if (!source || !clone || !dialog) return;

    clone.src = source.currentSrc || source.src || resolvedSrc;
    openRef.current = true;

    if (prefersReducedMotion()) {
      source.style.visibility = "hidden";
      dialog.showModal();
      return;
    }

    document.documentElement.classList.add("vt-lightbox-active");
    source.style.viewTransitionName = LIGHTBOX_NAME;

    try {
      const transition = startViewTransition(() => {
        source.style.viewTransitionName = "";
        source.style.visibility = "hidden";
        clone.style.viewTransitionName = LIGHTBOX_NAME;
        dialog.showModal();
      });
      await transition.finished;
    } catch {
      source.style.visibility = "hidden";
      dialog.showModal();
    }
  }, [resolvedSrc]);

  const onDialogCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();
    void closeLightbox();
  };

  const onDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget || event.target === cloneRef.current) {
      void closeLightbox();
    }
  };

  const dialog =
    mounted &&
    createPortal(
      <dialog
        ref={dialogRef}
        className="vt-lightbox"
        aria-label={props.alt || "Expanded image"}
        onCancel={onDialogCancel}
        onClick={onDialogClick}
      >
        <img
          ref={cloneRef}
          className="vt-lightbox-image"
          src={resolvedSrc}
          alt={props.alt ?? ""}
          width={typeof props.width === "number" ? props.width : undefined}
          height={typeof props.height === "number" ? props.height : undefined}
        />
      </dialog>,
      document.body
    );

  return (
    <>
      <ViewTransition name={name} share="morph" default="none">
        <button
          ref={triggerRef}
          type="button"
          className="vt-image-button"
          aria-haspopup="dialog"
          aria-label={props.alt ? `View ${props.alt}` : "View image"}
          onClick={() => void openLightbox()}
        >
          <Image {...props} />
        </button>
      </ViewTransition>
      {dialog}
    </>
  );
}
