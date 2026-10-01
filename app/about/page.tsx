import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "Profil",
};

export default function AboutPage() {
  return <About />;
}