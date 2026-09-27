import { LogOut, Moon, Settings, SquareMenu, User } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ThemeToggler } from "../theme-provider/theme-toggler.component";

export default function Navbar() {
  return (
    <nav className="navbar p-4 flex items-center justify-between">
      collapseButton
      <div className="flex items-center gap-4">
        <Link href="/">Home</Link>
        <ThemeToggler />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>
                <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                Log Out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" />}>
            <SquareMenu />
            <span className="sr-only">Open Menu</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
            <DropdownMenuItem>Menu Item 2</DropdownMenuItem>
            <DropdownMenuItem>Menu Item 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
