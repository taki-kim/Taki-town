import styles from "./page.module.css";
import { generatePageMetadata } from "@/utils/metadata";
import HeaderSection from "@/components/about/header-section/HeaderSection";
import IntroduceSection from "@/components/about/introduce-section/IntroduceSection";
import StrengthSection from "@/components/about/strength-section/StrengthSection";
import FeaturedProjects from "@/components/main-page/highlight-list/FeaturedProjects";

export const generateMetadata = () =>
  generatePageMetadata({ pageCategory: "About" });

export default function About() {
  return (
    <div className={styles["wrapper"]}>
      <HeaderSection />
      <StrengthSection />
      <IntroduceSection />
    </div>
  );
}
