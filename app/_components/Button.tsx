import React from "react";
import { cn } from "../_utils/utils";

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
} & React.ComponentProps<"button">;

export default function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        props.className,
        "border rounded-lg p-3 outline-none transition-colors",
        {
          "bg-purple border-purple text-white hover:border-lilac hover:bg-lilac hover:shadow-purple-blur":
            variant === "primary",
          "bg-white text-purple *:text-purple hover:bg-lightpurple hover:shadow-none":
            variant === "secondary",
          "border-transparant bg-transparant text-gray p-0 hover:bg-transparant hover:shadow-none hover:border-transparant hover:underline":
            variant === "ghost",
        }
      )}
    >
      {children}
    </button>
  );
}
