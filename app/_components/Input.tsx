import React from "react";

type InputProps = {
  label: string;
} & React.ComponentProps<"input">;

export default function Input({ label, name, ...props }: InputProps) {
  return (
    <label className="text-body-s text-darkgray block">
      <span>{label}</span>
      <div className="w-full border border-borders text-base rounded-lg has-[:active]:border-purple has-[:focus]:border-purple has-[:hover]:border-purple has-[:hover]:shadow-purple-blur has-[:active]:shadow-purple-blur has-[:focus]:shadow-purple-blur outline-none transition-all duration-200 ease-in-out">
        <input className="p-2 rounded-lg outline-none" name={name} {...props} />
      </div>
    </label>
  );
}
