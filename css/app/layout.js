import Header from "@/components/Header";
import "./globals.css";
import ThemeProvider from "@/context/ThemeContext";

import Image from "next/image";

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Image src="/mountains.jpeg" alt="mountains" width={300} height={400} />
        </ThemeProvider>
      </body>
    </html>
  );
}
