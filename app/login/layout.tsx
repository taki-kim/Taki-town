import { Metadata } from "next";
import { generateAdminMetadata } from "@/utils/metadata";

export const metadata: Metadata = generateAdminMetadata({ page: "login" });

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
