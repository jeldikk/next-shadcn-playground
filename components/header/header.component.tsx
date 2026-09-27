import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b text-primary-foreground p-4">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2 font-bold">
            <span className="inline-block">Acme Corp</span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link className={navigationMenuTriggerStyle()} href="/features">
                  Features
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link className={navigationMenuTriggerStyle()} href="/pricing">
                  Pricing
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
