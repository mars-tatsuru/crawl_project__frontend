"use client";
import { Sidebar, CustomFlowbiteTheme } from "flowbite-react";
import { HomeIcon, UserIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import SidebarItem from "@/components/Layout/SidebarItem";

export default function SideBar() {
  const customTheme: CustomFlowbiteTheme["sidebar"] = {
    // change the sidebar background color etc...
    root: {
      base: "bg-white dark:bg-gray-800 shadow-md",
      inner: "bg-white dark:bg-gray-800 px-3 py-4",
    },
  };

  return (
    <Sidebar aria-label="Sidebar" className="relative" theme={customTheme}>
      <Sidebar.Logo href="/" img="/favicon.ico" imgAlt="CRAWL MAP">
        CRAWL MAP
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <SidebarItem href="/home" icon={HomeIcon}>
            HOME
          </SidebarItem>
          <SidebarItem href="/crawl" icon={GlobeAltIcon}>
            CRAWL
          </SidebarItem>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className="absolute bottom-4 w-[calc(100%-1.5rem)]">
          <SidebarItem href="/setting" icon={UserIcon}>
            SETTING
          </SidebarItem>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
