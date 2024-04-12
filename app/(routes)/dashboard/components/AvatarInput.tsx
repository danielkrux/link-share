"use client";

import React from "react";
import Image from "next/image";
import PlaceholderImage from "@/public/icons/icon-upload-image.svg";
import { useFormStatus } from "react-dom";

export default function Avatar({ defaultValue }: { defaultValue: string }) {
  const { pending } = useFormStatus();
  const [preview, setPreview] = React.useState<string>(defaultValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event?.target.files) return;
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <label
        className="bg-lightpurple flex flex-col gap-2 justify-center items-center rounded-lg text-center cursor-pointer aspect-square max-w-[200px] overflow-hidden"
        htmlFor="image"
      >
        {preview ? (
          <div className="relative w-full overflow-hidden aspect-square after:absolute after:left-0 after:right-0 after:h-full after:bg-black/70">
            <Image
              fill
              src={preview}
              objectFit="cover"
              alt="Avatar"
              className=""
            />
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white self-center z-10 flex flex-col items-center">
              <PlaceholderImage className="size-10" />
              <span className="text-heading-s [font-weight:600]">
                {pending ? "Uploading ..." : "Change Image"}
              </span>
            </div>
          </div>
        ) : (
          <div className="text-purple px-10 py-14 flex flex-col items-center">
            <PlaceholderImage className="size-10" />
            <span className="text-heading-s [font-weight:600]">
              {pending ? "Uploading ..." : "Upload"}
            </span>
          </div>
        )}
      </label>
      <input
        style={{
          visibility: "hidden",
          position: "absolute",
        }}
        name="avatar"
        type="file"
        id="image"
        accept="image/*"
        onChange={handleInputChange}
        disabled={pending}
      />
    </div>
  );
}
