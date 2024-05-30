"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BreadCrumb from "@/components/Layout/BreadCrumb";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex h-16 w-full items-center justify-between px-4 bg-white shadow-md dark:bg-gray-800">
      <BreadCrumb path={pathname} />
      <Link href="/" className="text-sm h-auto inline-block">
        logout
      </Link>
    </header>
  );
}
