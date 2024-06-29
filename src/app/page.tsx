"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Navbar } from "flowbite-react";
import Header from "@/components/Top/Header";
import Hero from "@/components/Top/Hero";
import Footer from "@/components/Top/Footer";

export default function Page() {
  return (
    <div className="bg-gradient-to-bl from-blue-300  via-green-200 to-blue-300 dark:bg-gradient-to-bl dark:from-gray-900 dark:via-gray-700 dark:to-gray-900">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
