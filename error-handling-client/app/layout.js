import Header from "@/components/Header";
import "./globals.css";
import ThemeProvider from "@/context/ThemeContext";

export default function RootLayout({ children }) {
  throw new Error("Error in Home From Layout")
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
