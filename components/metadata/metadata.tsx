import { Metadata } from "next";
import metadataString from "@/lib/metadata-string";

type MetadataProps = {
  page: string;
  isArticle?: boolean;
  articleSummary?: string;
};

export function MetadataComponent({
  page,
  isArticle,
  articleSummary,
}: MetadataProps): Metadata {
  return {
    title: page === "Main" ? `Taki-Town` : `${page} | Taki-Town`,
    description: isArticle ? articleSummary : metadataString(page),
    robots: {
      index: true,
      follow: false,
    },
  };
}
