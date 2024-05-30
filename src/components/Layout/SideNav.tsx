import Link from "next/link";
import NavLinks from "@/components/Layout/NavLinks";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    <div className="h-screen bg-gray-800  p-5">
      <Link className="mb-5 flex w-full flex-row items-center gap-2" href="/">
        <GlobeAsiaAustraliaIcon className="h-7 w-7" />
        <p className="text-2xl font-bold">CRAWL MAP</p>
      </Link>
      <div className="">
        <NavLinks />
      </div>
    </div>
  );
}
