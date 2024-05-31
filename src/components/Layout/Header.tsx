"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BreadCrumb from "@/components/Layout/BreadCrumb";
import { DarkThemeToggle, Flowbite, Dropdown } from "flowbite-react";
import {
  HomeIcon,
  UserIcon,
  QuestionMarkCircleIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex h-16 w-full items-center justify-between bg-white px-4  shadow-sm dark:bg-gray-800">
      <BreadCrumb path={pathname} />
      <Flowbite>
        <DarkThemeToggle className="mr-2" />
      </Flowbite>
      <Dropdown label="Menu" dismissOnClick={false}>
        <Dropdown.Header>
          <span className="block text-sm">User name</span>
          <span className="block truncate text-sm font-medium">
            example@flowbite.com
          </span>
        </Dropdown.Header>
        <Dropdown.Item icon={HomeIcon}>Home</Dropdown.Item>
        <Dropdown.Item icon={UserIcon}>
          <Link href="/setting">Setting</Link>
        </Dropdown.Item>
        <Dropdown.Item icon={QuestionMarkCircleIcon}>
          <Link href="/">FAQ</Link>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item icon={ArrowLeftStartOnRectangleIcon}>
          <Link href="/">Log out</Link>
        </Dropdown.Item>
      </Dropdown>
    </header>
  );
}
