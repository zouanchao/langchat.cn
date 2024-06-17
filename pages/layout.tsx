// app/layout.tsx
"use client";
import "@/styles/globals.css";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";

export default function DocsLayout() {
  return <Providers>{<Navbar />}</Providers>;
}
