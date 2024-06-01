"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Navbar } from "flowbite-react";
import Header from "@/components/Top/Header";
import Hero from "@/components/Top/Hero";

export default function Page() {
  return (
    <div className="top">
      <Header />
      <Hero />
    </div>
  );
}
