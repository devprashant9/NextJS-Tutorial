import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1>Technical Agency</h1>
      <Link href="/about">About</Link>
      <br />
      <br />
      <Link href="/services">Services</Link>
    </>
  );
}
