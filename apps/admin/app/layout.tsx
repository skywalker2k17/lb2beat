import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "LB2BEAT Admin", description: "Back Office" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ht"><body>{children}</body></html>;
}
