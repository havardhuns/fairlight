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
      <div className="flex items-center justify-between h-24 px-32">
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

        <NavigationMenu>
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

        <Link href="/kontakt">
          <Button size="lg" variant="secondary" className="rounded-full">
            Kontakt oss
          </Button>
        </Link>
      </div>
      <Separator />
    </nav>
  );
};

export default Navbar;
