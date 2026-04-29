import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Navbar = ({ className, ...props }: React.ComponentProps<"nav">) => {
  return (
    <nav className={className} {...props}>
      <div className="flex items-center justify-between h-20 px-32">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-40 cursor-pointer"
          />
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/om-oss"
                  className="text-sm font-medium text-muted-foreground hover:text-rose-400 transition-colors duration-200"
                >
                  Om oss
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/tjenester"
                  className="text-sm font-medium text-muted-foreground hover:text-rose-400 transition-colors duration-200"
                >
                  Tjenester
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/prosjekter"
                  className="text-sm font-medium text-muted-foreground hover:text-rose-400 transition-colors duration-200"
                >
                  Prosjekter
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button asChild size="lg" className="rounded-full px-6">
          <Link href="/kontakt">Kontakt oss</Link>
        </Button>
      </div>
      <Separator />
    </nav>
  );
};

export default Navbar;
