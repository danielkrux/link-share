"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";

import LinkIcon from "@/public/icons/icon-link.svg";
import ProfileIcon from "@/public/icons/icon-profile-details-header.svg";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const navLinkClass =
    "px-7 py-3 rounded-lg text-gray hover:bg-lightgray transition-colors flex items-center gap-2";
  const activeClass = "bg-lightpurple text-purple hover:bg-lightpurple";

  return (
    <nav className="absolute left-1/2 -translate-x-1/2">
      <ul className="flex gap-3">
        <Link href="/dashboard">
          <li
            className={clsx(navLinkClass, {
              [activeClass]: pathname === "/dashboard",
            })}
          >
            <LinkIcon className="size-[20px]" />
            <span className="hidden md:block">Links</span>
          </li>
        </Link>
        <Link href="/dashboard/profile">
          <li
            className={clsx(navLinkClass, {
              [activeClass]: pathname === "/dashboard/profile",
            })}
          >
            <ProfileIcon className="size-[20px]" />
            <span className="hidden md:block">Profile</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
