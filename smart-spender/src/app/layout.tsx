import type { Metadata } from "next";
import "./globals.css";
// import { Navigation } from "./components/navigation";

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
          {/* <Navigation /> */}
        </header>
        {children}
        <footer>
          <p>Bye goodbye!</p>
        </footer>
      </body>
    </html>
  );
}
