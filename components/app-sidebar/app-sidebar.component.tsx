"use client";

import {
  Calendar,
  ChevronUp,
  HomeIcon,
  Inbox,
  Plus,
  Search,
  Settings,
  User2,
} from "lucide-react";
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
  Sidebar,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarRail,
  SidebarGroupAction,
} from "../ui/sidebar";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const sidebarItems = [
  {
    title: "Home",
    url: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: <Inbox />,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: <Calendar />,
  },
  {
    title: "Search",
    url: "/search",
    icon: <Search />,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: <Settings />,
  },
];

export default function AppSidebar() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();
  return (
    <div className="app-sidebar">
      <Sidebar collapsible="icon" side="left">
        <SidebarHeader className="py-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Link
                  href="/"
                  className="flex items-center justify-items-start gap-2"
                >
                  <Image src="/logo.png" alt="Logo" width={24} height={24} />
                  <span>Brand Name Goes Here</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Applications</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                      <Link
                        href={item.url}
                        className="flex items-center justify-items-start gap-2"
                      >
                        {item.icon}
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupAction>
              <Plus /> <span className="sr-only">Add Project</span>
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                      <Link
                        href={item.url}
                        className="flex items-center justify-items-start gap-2"
                      >
                        {item.icon}
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <SidebarMenuButton>
                      <User2 /> Jeldikk <ChevronUp className="ml-auto" />
                    </SidebarMenuButton>
                  }
                ></DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Account</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </div>
  );
}
