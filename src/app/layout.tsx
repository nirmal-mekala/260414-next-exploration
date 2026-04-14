import type { Metadata } from "next";
import "./globals.css";
import { PreloadResources } from "./preload-resources";

/*
 * TODO metadata
 */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="hidden">
        <div id="page">
          <main>
            <PreloadResources />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
