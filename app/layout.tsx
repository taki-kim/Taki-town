import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "./globals.scss";
import NextAuthProvider from "@/providers/next-auth-provider";
import ReactQueryProvider from "@/providers/react-query-provider";
import Header from "../components/header/Header";
import Footer from "@/components/footer/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ThemeProvider from "@/providers/context/theme-provider";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taki-Town",
  description:
    "블로그 Taki Town입니다. 웹개발, 디자인, 철학, 취미 등 다양한 주제들을 다루고 있습니다.",
  icons: {
    icon: "/takitown_logo.svg",
  },
};

const checkTheme = () => {
  const nextCookies = cookies();
  const themeCookie = nextCookies.get("theme")?.value || "";

  return themeCookie;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = checkTheme();
  return (
    <ThemeProvider>
      <html lang="en" className="background" data-theme={theme}>
        <body className={inter.className}>
          <GoogleAnalytics />
          <ReactQueryProvider>
            <NextAuthProvider>
              <Header />
              {children}
              <Footer />
            </NextAuthProvider>
          </ReactQueryProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
