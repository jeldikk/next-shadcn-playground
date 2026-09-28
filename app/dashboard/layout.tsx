import type { Metadata } from "next";
// import { Geist, Geist_Mono, Inter } from "next/font/google";
// import "./globals.css";
// import { cn } from "@/lib/utils";
import AppSidebar from "@/components/app-sidebar/app-sidebar.component";
import Navbar from "@/components/navbar/navbar.component";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import Header from "@/components/header/header.component";

export const metadata: Metadata = {
  title: "Dashboard with ShadCN Practice",
  description: "Dashboard using Shadcn and Next.js",
};

export default function DashboardLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="dashboard-layout min-h-full flex w-full">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1">
          <Navbar />
          {/* <SidebarTrigger /> */}
          <div className="px-4">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
}
