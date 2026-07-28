import { ViewTransition } from "react";
import Image, { type ImageProps } from "next/image";

function toViewTransitionName(src: ImageProps["src"]): string {
  const path = typeof src === "string" ? src : "image";
  return `img-${path.replace(/^\/+/, "").replace(/[^a-zA-Z0-9]+/g, "-")}`;
}

/** next/image wrapped for shared-element View Transitions on navigation. */
export function TransitionImage(props: ImageProps) {
  const name = toViewTransitionName(props.src);

  return (
    <ViewTransition name={name} share="morph">
      <Image {...props} />
    </ViewTransition>
  );
}
