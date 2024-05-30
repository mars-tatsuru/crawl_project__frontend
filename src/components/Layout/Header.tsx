"use client";
import { usePathname } from "next/navigation";
import BreadCrumb from "@/components/Layout/BreadCrumb";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex h-16 w-full items-center justify-between px-4 bg-white shadow-md dark:bg-gray-800">
      <div className="">
        <BreadCrumb path={pathname} />
      </div>
    </header>
  );
}
