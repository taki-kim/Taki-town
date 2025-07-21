import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "배지(Badge) 컴포넌트는 간단한 라벨이나 상태 표시 등에 사용됩니다. `text` prop으로 표시할 텍스트를 전달하세요.",
      },
    },
  },
  argTypes: {
    text: {
      description: "배지에 표시할 텍스트 (기술 스택, 프로젝트 이름 등)",
      control: { type: "text" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    text: "Next.js",
  },
};

export const LongText: Story = {
  args: {
    text: "Maximum text length",
  },
};
