import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Header from "./Header";
import { SessionProvider } from "next-auth/react";
import ThemeProvider from "../../providers/context/theme-provider";

const mockSession = {
  user: {
    name: "Admin User",
    email: "admin@example.com",
    image: "...",
  },
  expires: "2099-12-31T23:59:59.999Z",
};

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <SessionProvider session={null}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </SessionProvider>
    ),
  ],

  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
**Header**는 사이트의 최상단에 고정되는 네비게이션 바입니다.

- 스크롤 시 자동 숨김/노출 (디폴트)
- 모바일/태블릿 반응형 제공
- 네비게이션 메뉴 클릭을 통한 페이지 전환 ( 전환 시 현재 메뉴에 스타일 적용 )
- 다크모드 버튼 클릭을 통한 테마 전환
- disableScrollHide prop을 통해 스크롤 이벤트를 사용하지 않을 수 있습니다.
- 관리자 로그인 시 추가 메뉴 표시
        `.trim(),
      },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalUser: Story = {
  render: () => (
    <div style={{ height: "10vh", width: "100vw" }}>
      <Header disableScrollHide />
    </div>
  ),
};

export const AdminUser: Story = {
  render: () => (
    <SessionProvider session={mockSession}>
      <ThemeProvider>
        <div style={{ height: "10vh", width: "100vw" }}>
          <Header disableScrollHide />
        </div>
      </ThemeProvider>
    </SessionProvider>
  ),
  parameters: {
    layout: "fullscreen",
  },
};

export const Default: Story = {
  render: () => (
    <>
      <Header />
      <p style={{ marginTop: 80, textAlign: "center" }}>본문 입니다.</p>
    </>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
