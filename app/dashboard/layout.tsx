import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
// import "./globals.css";
import { cn } from "@/lib/utils";
import AppSidebar from "@/components/app-sidebar/app-sidebar.component";
import Navbar from "@/components/navbar/navbar.component";
// import Header from "@/components/header/header.component";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard with ShadCN Practice",
  description: "Dashboard using Shadcn and Next.js",
};

export default function DashboardLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="dashboard-layout min-h-full flex w-full">
      <AppSidebar />
      <main className="flex-1">
        <Navbar />
        <div className="px-4">{children}</div>
      </main>
    </div>
  );
}
