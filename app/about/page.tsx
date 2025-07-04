import styles from "./page.module.css";
import { generatePageMetadata } from "@/utils/metadata";
import HeaderSection from "@/components/about/header-section/HeaderSection";
import IntroduceSection from "@/components/about/introduce-section/IntroduceSection";
import StrengthSection from "@/components/about/strength-section/StrengthSection";

import SkillsSection from "@/components/about/skills-section/SkillsSection";

export const generateMetadata = () =>
  generatePageMetadata({ pageCategory: "About" });

export default function About() {
  return (
    <div className={styles["wrapper"]}>
      <HeaderSection />
      <StrengthSection />
      <IntroduceSection />
      <SkillsSection />
    </div>
  );
}
