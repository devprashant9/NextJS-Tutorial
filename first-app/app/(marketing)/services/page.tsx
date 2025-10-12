import Link from 'next/link';
import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "This is the services page",
};

const Services = () => {
  return (
    <div>
      <h2>All Available Services</h2>
      <Link href="/services/app-development">App Development</Link>
      <br /><br />
      <Link href="/services/web-development">Web Development</Link>
      <br /><br />
      <Link href="/services/graphic-design">Graphic Design</Link>
    </div>
  )
}

export default Services;
