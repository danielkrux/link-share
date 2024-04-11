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
        "bg-purple border border-purple rounded-lg p-3 text-white hover:bg-lilac hover:border-lilac hover:shadow-purple-blur  outline-none transition-colors",
        {
          "bg-white text-purple *:text-purple hover:bg-lightpurple hover:shadow-none":
            variant === "secondary",
          "border-opacity-0 bg-opacity-0 text-gray p-0 hover:bg-opacity-0 hover:shadow-none hover:border-opacity-0":
            variant === "ghost",
        }
      )}
    >
      {children}
    </button>
  );
}
