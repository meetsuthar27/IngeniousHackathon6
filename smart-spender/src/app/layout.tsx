import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          {/* <p>Welcome to NextJS</p> */}
          <Navbar />
        </header>
        {children}
        <footer>{/* <p>Bye goodbye!</p> */}</footer>
      </body>
    </html>
  );
}
