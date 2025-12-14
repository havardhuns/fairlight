import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { client } from "@/sanity/lib/client";
import { contactInfoQuery } from "@/sanity/lib/queries";
import { ContactInfoQueryResult } from "../../sanity.types";

const Footer = async () => {
  const contactInfo = await client.fetch<ContactInfoQueryResult>(
    contactInfoQuery
  );

  return (
    <footer>
      <Separator />
      <div className="flex items-start md:gap-32 lg:gap-64 px-8 md:px-32 lg:px-64 py-8">
        <div className="flex flex-col">
          <Image
            src="/logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-24 cursor-pointer mb-4"
          />
          <p className="text-sm text-zinc-400 max-w-xs">
            {contactInfo?.slogan}
          </p>
        </div>

        <div className="flex flex-col items-start invisible lg:visible">
          <p className="text-sm font-bold mb-2">Meny</p>
          <Button variant="link" className="p-0 h-6 font-light" asChild>
            <Link href="/">Hjem</Link>
          </Button>
          <Button variant="link" className="p-0 h-6 font-light" asChild>
            <Link href="/om-oss">Om oss</Link>
          </Button>
          <Button variant="link" className="p-0 h-6 font-light" asChild>
            <Link href="/tjenester">Tjenester</Link>
          </Button>
          <Button variant="link" className="p-0 h-6 font-light" asChild>
            <Link href="/prosjekter">Prosjekter</Link>
          </Button>
          <Button variant="link" className="p-0 h-6 font-light" asChild>
            <Link href="/kontakt">Kontakt oss</Link>
          </Button>
        </div>

        <div className="flex flex-col items-start">
          <p className="text-sm font-bold mb-2">Kontakt</p>
          <Button
            asChild
            variant="link"
            className="text-sm text-zinc-400 p-0 h-5 font-normal"
          >
            <a href={`mailto:${contactInfo?.email}`}>{contactInfo?.email}</a>
          </Button>
          <p className="text-sm text-zinc-400">{contactInfo?.phone}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
