"use client";

import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { DarkThemeToggle, Flowbite, Dropdown } from "flowbite-react";
import { CircleStackIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <Navbar fluid>
      <Navbar.Brand href="/">
        <CircleStackIcon className="mr-2 h-8 w-8 dark:text-white" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          CRAWL MAP
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Flowbite>
          <DarkThemeToggle className="mr-2" />
        </Flowbite>
        <Button gradientDuoTone="greenToBlue" label="4">
          <Link href="/home">Get started</Link>
          <ArrowUpRightIcon className="ml-3 w-4" />
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
