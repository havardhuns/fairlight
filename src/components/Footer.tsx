import Link from "next/link";
import Image from "next/image";
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
      <div className="flex items-start gap-12 md:gap-24 lg:gap-48 px-8 md:px-16 lg:px-32 py-10">
        <div className="flex flex-col gap-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-24"
          />
          <p className="text-sm text-muted-foreground max-w-[14rem] leading-relaxed">
            {contactInfo?.slogan}
          </p>
        </div>

        <div className="flex flex-col items-start invisible lg:visible">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Meny
          </p>
          {[
            { label: "Hjem", href: "/" },
            { label: "Om oss", href: "/om-oss" },
            { label: "Tjenester", href: "/tjenester" },
            { label: "Prosjekter", href: "/prosjekter" },
            { label: "Kontakt oss", href: "/kontakt" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-0.5"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-start">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Kontakt
          </p>
          <a
            href={`mailto:${contactInfo?.email}`}
            className="text-sm text-muted-foreground hover:text-rose-400 transition-colors duration-200 py-0.5"
          >
            {contactInfo?.email}
          </a>
          <p className="text-sm text-muted-foreground py-0.5">
            {contactInfo?.phone}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
