import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Providers } from "../../provider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header>
            {/* <p>Welcome to NextJS</p> */}
            <Navbar />
          </header>
          {children}
          <footer>{/* <p>Bye goodbye!</p> */}</footer>
        </Providers>
      </body>
    </html>
  );
}
