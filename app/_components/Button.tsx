import clsx from "clsx";
import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
} & React.ComponentProps<"button">;

export default function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "bg-purple border border-purple rounded-lg p-3 text-white text-button hover:bg-lilac hover:border-lilac hover:shadow-purple-blur  outline-none transition-colors duration-200 ease-in-out",
        {
          "bg-white *:text-purple hover:bg-lightpurple hover:shadow-none":
            variant === "secondary",
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
}
