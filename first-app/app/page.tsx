import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1>Welcome to Next JS</h1>
      <Link href="/about">About</Link>
      <br />
      <br />
      <Link href="/services">Services</Link>
    </>
  );
}
