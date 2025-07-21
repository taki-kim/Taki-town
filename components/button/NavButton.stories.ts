import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NavButton from "./NavButton";

const meta: Meta<typeof NavButton> = {
  title: "Components/NavButton",
  component: NavButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "NavButton 컴포넌트는 네비게이션 버튼으로, 전역에서 사용되도록 설계했습니다. `text` prop으로 버튼에 표시할 텍스트를 전달합니다. `size` prop으로 버튼 크기, `link` prop으로 버튼이 연결될 URL, 그리고 `newTab` prop으로 새 탭에서 링크를 열지 설정할 수 있습니다.  ",
      },
    },
  },

  argTypes: {
    text: {
      description: "버튼에 표시할 텍스트",
      control: { type: "text" },
    },
    size: {
      description: "버튼 크기 (small, medium, large)",
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    link: {
      description: "버튼이 연결될 링크 URL",
      control: { type: "text" },
    },
    newTab: {
      description: "새 탭에서 열림 여부",
      control: { type: "boolean" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof NavButton>;

export const Small: Story = {
  args: {
    text: "Taki-Town",
    size: "small",
    link: "https://takitown.com",
    newTab: false,
  },
};

export const Medium: Story = {
  args: {
    text: "Taki-Town",
    size: "medium",
    link: "https://takitown.com",
    newTab: false,
  },
};

export const Large: Story = {
  args: {
    text: "Taki-Town",
    size: "large",
    link: "https://takitown.com",
    newTab: false,
  },
};

export const NewTab: Story = {
  args: {
    text: "New Tab",
    size: "small",
    link: "https://takitown.com",
    newTab: true,
  },
};
