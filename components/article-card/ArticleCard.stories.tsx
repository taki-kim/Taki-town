import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ArticleCard from "./ArticleCard";

const meta = {
  title: "Components/ArticleCard",
  component: ArticleCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
  **ArticleCard**는 게시글을 나타내는 카드 컴포넌트입니다.
  
  - 스크롤을 통해 카드의 영역이 화면에 감지되면, Floating 애니메이션이 적용됩니다.
  - 카드를 클릭 시 해당 게시글로 이동합니다.
  - 게시글 리스팅 영역 크기에 맞춰 자동으로 너비와 높이 조정이 이루어집니다.
  - 마우스 호버 시, 게시글 이미지가 서서히 확대됩니다.
          `.trim(),
      },
    },
  },

  argTypes: {
    imageLink: {
      description: "게시글 이미지 링크",
      control: { type: "text" },
    },
    title: {
      description: "게시글 제목",
      control: { type: "text" },
    },
    summary: {
      description: "게시글에 대한 요약",
      control: { type: "text" },
    },
    postLink: {
      description: "게시글 링크",
      control: { type: "text" },
    },
    articleSort: {
      description: "게시글 종류",
      control: { type: "radio" },
      options: ["post", "project"],
    },
  },
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageLink: "/image/wallpaper.webp",
    title: "프론트엔드의 보안 실천 방안",
    summary: "간단하게 실천할 수 있는 5 가지 보안 방안",
    postLink: `/post/${"게시글 제목"}`,
    articleSort: "post",
  },
};
