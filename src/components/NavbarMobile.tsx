"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MouseEventHandler, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <div className="flex items-center justify-between h-24 px-8">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-48 cursor-pointer mb-2"
          />
        </Link>

        {!isOpen ? (
          <Button variant="outline" onClick={() => setIsOpen(true)}>
            <MenuIcon />
          </Button>
        ) : (
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            <XIcon />
          </Button>
        )}
      </div>
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
    <div
      className={`md:invisible min-h-[calc(100vh-5rem)] absolute w-screen z-40 top-20 left-0  overflow-hidden bg-zinc-950`}
    >
      <div className="flex flex-col gap-4 p-4 pt-8 items-start pl-8">
        {items.map((item) => (
          <Button
            variant="link"
            asChild
            key={item.href}
            className="p-0 text-2xl"
            size="lg"
          >
            <Link href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default NavbarMobile;
