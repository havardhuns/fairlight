"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MouseEventHandler, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "./ui/separator";

const NavbarMobile = ({ className, ...props }: React.ComponentProps<"nav">) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <nav className={className} {...props}>
      <div className="flex items-center justify-between h-20 px-8 md:px-16">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-36 cursor-pointer"
          />
        </Link>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
        >
          {isOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </Button>
      </div>
      <Separator />
      {isOpen && (
        <Menu
          items={[
            { label: "Om oss", href: "/om-oss" },
            { label: "Tjenester", href: "/tjenester" },
            { label: "Prosjekter", href: "/prosjekter" },
            { label: "Kontakt oss", href: "/kontakt" },
          ]}
          closeMenu={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export interface MenuProps {
  items?: {
    label: string;
    href: string;
  }[];
  closeMenu?: MouseEventHandler<HTMLAnchorElement>;
}

const Menu = ({ items = [], closeMenu }: MenuProps) => {
  return (
    <div className="min-h-[calc(100vh-5rem)] absolute w-screen z-40 top-[5rem] left-0 bg-background">
      <div className="flex flex-col gap-2 p-8 pt-12 items-start">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className="font-display font-normal text-3xl md:text-4xl text-muted-foreground hover:text-rose-400 transition-colors duration-200 py-2"
          >
            {item.label}
          </Link>
        ))}
        <div className="mt-8">
          <Button asChild size="lg" className="rounded-full px-6">
            <Link href="/kontakt" onClick={closeMenu}>Kontakt oss</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
