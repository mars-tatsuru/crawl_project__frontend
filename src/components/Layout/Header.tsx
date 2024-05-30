"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BreadCrumb from "@/components/Layout/BreadCrumb";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex h-16 w-full items-center justify-between bg-gray-800  px-4 shadow-md">
      <BreadCrumb path={pathname} />
      {/* <Flowbite>
        <DarkThemeToggle className="mr-2" />
      </Flowbite> */}
      <Link href="/" className=" inline-block h-auto text-sm">
        logout
      </Link>
    </header>
  );
}
