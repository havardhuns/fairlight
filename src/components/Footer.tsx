import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer>
      <Separator />
      <div className="flex items-start gap-64 px-64 py-8">
        <div className="flex flex-col">
          <Image
            src="/logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-24 cursor-pointer mb-4"
          />
          <p className="text-sm text-zinc-400">
            Profesjonelt lysdesign for scene, show og event. <br />
            Vi jobber over hele Norge – der vi trengs.
          </p>
        </div>

        <div className="flex flex-col items-start">
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
            <Link href="/galleri">Galleri</Link>
          </Button>
          <Button variant="link" className="p-0 h-6 font-light" asChild>
            <Link href="/kontakt">Kontakt oss</Link>
          </Button>
        </div>

        <div className="flex flex-col items-start">
          <p className="text-sm font-bold mb-2">Kontakt</p>
          <p className="text-sm text-zinc-400">kontakt@fairlight.no</p>
          <p className="text-sm text-zinc-400">+47 123 45 678</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
