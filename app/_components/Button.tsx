import React from "react";

export default function Button(props: React.ComponentProps<"button">) {
  return (
    <button
      className="bg-purple rounded-lg p-3 text-white text-button hover:bg-lilac hover:shadow-purple-blur active:bg-lilac active:shadow-purple-blur focus:bg-lilac focus:shadow-purple-blur outline-none transition-colors duration-200 ease-in-out"
      {...props}
    >
      {props.children}
    </button>
  );
}
