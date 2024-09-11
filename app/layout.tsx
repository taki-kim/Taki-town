import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/reset.css";
import "../styles/theme.css";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { cookies } from "next/headers";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
    <html lang="en" className="background" data-theme={theme}>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
