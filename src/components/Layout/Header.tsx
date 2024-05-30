"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex h-16 w-full items-center justify-between px-4 bg-white shadow-md dark:bg-gray-800">
      <div className="">headerがきます</div>
    </header>
  );
}
