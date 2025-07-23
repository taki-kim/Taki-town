import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CardList from "./CardList";
import { ArticleCardProps } from "@/type";

const mockCardList: ArticleCardProps[] = [
  {
    imageLink: "/image/wallpaper.webp",
    title: "프론트엔드의 보안 실천 방안 01",
    summary: "간단하게 실천할 수 있는 5 가지 보안 방안 01",
    content: "ddd",
    date: "2025-07-23",
  },
  {
    imageLink: "/image/wallpaper.webp",
    title: "프론트엔드의 보안 실천 방안 02",
    summary: "간단하게 실천할 수 있는 5 가지 보안 방안 02",
    content: "ddd",
    date: "2025-07-23",
  },
  {
    imageLink: "/image/wallpaper.webp",
    title: "프론트엔드의 보안 실천 방안 03",
    summary: "간단하게 실천할 수 있는 5 가지 보안 방안 03",
    content: "ddd",
    date: "2025-07-23",
  },
  {
    imageLink: "/image/wallpaper.webp",
    title: "프론트엔드의 보안 실천 방안 04",
    summary: "간단하게 실천할 수 있는 5 가지 보안 방안 04",
    content: "ddd",
    date: "2025-07-23",
  },
  {
    imageLink: "/image/wallpaper.webp",
    title: "프론트엔드의 보안 실천 방안 05",
    summary: "간단하게 실천할 수 있는 5 가지 보안 방안 05",
    content: "ddd",
    date: "2025-07-23",
  },
  {
    imageLink: "/image/wallpaper.webp",
    title: "프론트엔드의 보안 실천 방안 06",
    summary: "간단하게 실천할 수 있는 5 가지 보안 방안 06",
    content: "ddd",
    date: "2025-07-23",
  },
];

const meta = {
  title: "Components/CardList",
  component: CardList,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
**CardList**는 게시글들을 리스팅 하는 영역입니다.

- 한 열 당 3개의 게시글 카드를 정렬합니다.
- 게시글 카드는 게시글의 최신순으로 정렬됩니다.
        `.trim(),
      },
    },
  },
  tags: ["autodocs"],

  decorators: [
    (Story) => (
      <div style={{ padding: "1.6rem" }}>
        <Story />
      </div>
    ),
  ],

  argTypes: {
    cardList: {
      description: "게시글 리스트 데이터 배열",
      control: { type: "object" },
    },
    articleSort: {
      description: "게시글 종류",
      control: { type: "radio" },
      options: ["post", "project"],
    },
  },
} satisfies Meta<typeof CardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardList: mockCardList,
    articleSort: "post",
  },
  parameters: {
    layout: "fullscreen",
  },
};
