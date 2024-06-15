"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "flowbite-react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Kv from "@/assets/kv.png";

export default function Hero() {
  return (
    <div className="flex h-[calc(100vh-8rem)] items-center justify-center gap-20 bg-gradient-to-bl from-blue-300  via-green-200 to-blue-300 text-center text-white dark:bg-gradient-to-bl dark:from-gray-900 dark:via-gray-700 dark:to-gray-900">
      <div className="w-10/12 text-center">
        <h1 className="mb-2 inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-7xl font-bold text-transparent ">
          CRAWL MAP
        </h1>
        <h2 className="mb-5 text-4xl font-bold leading-tight text-gray-500 dark:text-white">
          Instantly Generate Detailed Sitemaps
          <br />
          by Crawling Your Website
        </h2>
        <p className="mb-10 text-xl leading-relaxed text-gray-500 dark:text-white">
          Easily gain a comprehensive understanding of your website and optimize
          your SEO strategy.
          <br />
          Crawl Map automatically crawls web pages and visualizes the
          hierarchical structure,
          <br />
          supporting content management and search engine indexing.
        </p>
        <Button
          className="inline-flex items-center"
          gradientDuoTone="greenToBlue"
          size="xl"
          label="4"
        >
          <Link href="/home">Get started</Link>
          <ArrowUpRightIcon className="ml-3 w-4" />
        </Button>
      </div>
    </div>
  );
}
