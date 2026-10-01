import type { Metadata } from "next";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "Compétences",
};

export default function SkillsPage() {
  return <Skills />;
}