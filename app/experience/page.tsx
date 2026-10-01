import type { Metadata } from "next";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "Expérience",
};

export default function ExperiencePage() {
  return <Experience />;
}