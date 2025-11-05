"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

export interface HamburgerMenuProps {
  items?: { label: string; href: string }[];
}

const HamburgerMenu = ({ items = [] }: HamburgerMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open ? (
        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          className="md:hidden"
        >
          <MenuIcon />
        </Button>
      ) : (
        <Button
          variant="outline"
          onClick={() => setOpen(false)}
          className="md:hidden"
        >
          <XIcon />
        </Button>
      )}

      {open && (
        <div
          className={`xl:invisible min-h-[calc(100vh-5rem)] absolute w-screen z-40 top-20 left-0  overflow-hidden bg-zinc-950`}
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
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
