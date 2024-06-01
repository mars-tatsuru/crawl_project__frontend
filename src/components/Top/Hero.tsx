"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "flowbite-react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Kv from "@/assets/kv.png";

export default function Hero() {
  return (
    <div className="flex h-[calc(100vh-8rem)] items-center justify-center gap-20 dark:bg-gray-900">
      <div className="w-2/5">
        <h1 className="mb-2 inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-7xl font-bold text-transparent ">
          CRAWL MAP
        </h1>
        <h2 className="mb-5 text-4xl font-bold leading-tight dark:text-white">
          Instantly Generate Detailed Sitemaps by Crawling Your Website
        </h2>
        <p className="mb-5 text-xl leading-relaxed dark:text-white">
          Easily gain a comprehensive understanding of your website and optimize
          your SEO strategy. Crawl Map automatically crawls web pages and
          visualizes the hierarchical structure, supporting content management
          and search engine indexing.
        </p>
        <Button gradientDuoTone="greenToBlue" size="xl" label="4">
          <Link href="/home">Get started</Link>
          <ArrowUpRightIcon className="ml-3 w-4" />
        </Button>
      </div>
      <div className="">
        <Image src={Kv} alt="hero" width={500} height={500} />
      </div>
    </div>
  );
}
