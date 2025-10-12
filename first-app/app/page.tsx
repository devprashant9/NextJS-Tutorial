import Link from "next/link";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "This is the home page",
};

export default function Home() {

  return (
    <>
      <h1>Welcome!</h1>
      <h2>Technical Agency</h2>
      <Link href="/about">About</Link>
      <br />
      <Link href="/services">Services</Link>
    </>
  );
}
