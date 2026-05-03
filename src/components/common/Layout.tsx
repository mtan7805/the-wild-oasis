import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
