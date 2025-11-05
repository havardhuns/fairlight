import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import HamburgerMenu from "./HambugerMenu";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between h-24 px-8 md:px-32">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-48 cursor-pointer mb-2"
          />
        </Link>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/om-oss">Om oss</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/tjenester">Tjenester</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/prosjekter">Prosjekter</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link href="/kontakt" className="hidden md:block">
          <Button size="lg" variant="secondary" className="rounded-full">
            Kontakt oss
          </Button>
        </Link>
        <HamburgerMenu
          items={[
            { label: "Om oss", href: "/om-oss" },
            { label: "Tjenester", href: "/tjenester" },
            { label: "Prosjekter", href: "/prosjekter" },
            { label: "Kontakt oss", href: "/kontakt" },
          ]}
        />
      </div>
      <Separator className="hidden md:block" />
    </nav>
  );
};

export default Navbar;
