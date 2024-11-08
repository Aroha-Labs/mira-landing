"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const route = (pathname.split("/")[1] || "main") as
    | "main"
    | "writing"
    | "docs"
    | "showcase"
    | "about"
    | "social";

  return <Navbar pageName={route} />;
}
