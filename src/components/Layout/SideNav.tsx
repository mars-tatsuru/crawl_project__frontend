import Link from "next/link";
import NavLinks from "@/components/Layout/NavLinks";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    <div className="h-screen p-5 bg-white dark:bg-gray-800">
      <Link className="w-full flex flex-row items-center gap-2 mb-5" href="/">
        <GlobeAsiaAustraliaIcon className="w-7 h-7" />
        <p className="font-bold text-2xl">CRAWL MAP</p>
      </Link>
      <div className="">
        <NavLinks />
      </div>
    </div>
  );
}
