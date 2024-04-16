import clsx from "clsx";
import React from "react";

type InputProps = {
  label?: string;
  error?: string;
} & React.ComponentProps<"input">;

export default function Input({ label, name, error, ...props }: InputProps) {
  const cls = clsx(
    "w-full border border-borders text-base rounded-lg outline-none transition-all duration-200 ease-in-out",
    "has-[:active]:border-purple has-[:focus]:border-purple has-[:hover]:border-purple has-[:hover]:shadow-purple-blur has-[:active]:shadow-purple-blur has-[:focus]:shadow-purple-blur",
    { "border-red": error }
  );
  return (
    <label className="text-body-s text-darkgray block">
      {label && <span className="mb-1 block">{label}</span>}
      <div className={cls}>
        <input
          className="p-2 rounded-lg outline-none w-full"
          name={name}
          {...props}
        />
      </div>
      {error && <span className="text-red text-body-s">{error}</span>}
    </label>
  );
}
