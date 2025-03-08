import { Metadata } from "next";
import { PageCategory, PostCategory } from "@/type";

type ArticleCategory = "post" | "project";

type AdminMetadataProps = {
  page: string;
};

type ArticleMetadataProps = {
  articleTitle: string;
  articleCategory: ArticleCategory;
  articleSummary: string;
  articleImageUrl: string;
};

type PageMetadataProps = {
  pageCategory: PageCategory | PostCategory;
};

export function generateAdminMetadata({ page }: AdminMetadataProps): Metadata {
  return {
    title: page === "login" ? `Login | Taki-Town` : `Admin | Taki-Town`,
    description: "no description",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export function generateArticleMetadata({
  articleTitle,
  articleCategory,
  articleSummary,
  articleImageUrl,
}: ArticleMetadataProps): Metadata {
  return {
    title: `${articleTitle} | Taki-Town`,
    description: articleSummary,
    alternates: {
      canonical: `${process.env.PUBLIC_URL}/${articleCategory}/${articleTitle}`,
    },
    openGraph: {
      title: articleTitle,
      description: articleSummary,
      url: `${process.env.PUBLIC_URL}/${articleCategory}/${articleTitle}`,
      images: [
        {
          url: articleImageUrl,
          width: 1200,
          height: 630,
          alt: `아티클 '${articleTitle}'의 대표이미지`,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generatePageMetadata({
  pageCategory,
}: PageMetadataProps): Metadata {
  return {
    title: `${pageCategory} | Taki-Town`,
    description: getPageMetaDescription(pageCategory),
    openGraph: {
      title: `${pageCategory} | Taki-Town`,
      description: getPageMetaDescription(pageCategory),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function getPageMetaDescription(
  title: PageCategory | PostCategory
) {
  switch (title) {
    case "Home":
      return "블로그 Taki Town입니다. 웹개발, 디자인, 철학, 취미 등 다양한 주제들을 다루고 있습니다.";
    case "Posts":
      return "블로그 Taki Town입니다. 웹개발, 디자인, 철학, 취미 등 다양한 주제들을 다루고 있습니다.";
    case "Projects":
      return "블로그 Taki Town입니다. 참여한 프로젝트에 대해 소개합니다.";
    case "About":
      return "블로그 Taki Town입니다. 블로그 운영자에 대한 소개글입니다.";
    case "Development":
      return "블로그 Taki Town입니다. 웹과 개발에 대한 주제를 다루고 있습니다.";
    case "Design":
      return "블로그 Taki Town입니다. 웹 디자인에 대한 주제를 다루고 있습니다.";
    case "Work-Log":
      return "블로그 Taki Town입니다. 작업들에 대한 내용을 기록하고 있습니다.";
    case "Philosophy":
      return "블로그 Taki Town입니다. 인문학과 철학에 관련한 주제를 다루고 있습니다.";
    case "Etc":
      return "블로그 Taki Town입니다. 일상, 취미, 관심사와 잡담을 나눕니다";
    default:
      return "블로그 Taki Town입니다. 웹개발, 디자인, 철학, 취미 등 다양한 주제들을 다루고 있습니다.";
  }
}
