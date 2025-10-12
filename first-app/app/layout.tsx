

export default function RootLayout({ children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{
          height: "4rem",
          backgroundColor: "tomato",
          color: "white"
        }}>This is Root Header</header>
        {children}
        <footer style={{
          height: "4rem",
          backgroundColor: "tomato",
          color: "white"
        }}>Footer</footer>
      </body>
    </html>
  );
}
