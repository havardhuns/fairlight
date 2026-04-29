import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { ContactInfoQueryResult } from "../../../sanity.types";
import { contactInfoQuery } from "@/sanity/lib/queries";
import MapsPreview from "@/components/MapsPreview";
import { Title } from "@/components/ui/typography";

export const metadata = {
  title: "Kontakt | Fairlight",
};

const Kontakt = async () => {
  const contactInfo = await client.fetch<ContactInfoQueryResult>(
    contactInfoQuery
  );

  const address = contactInfo?.location ?? "";
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
  );
  const data = await res.json();
  const coords = data.results?.[0]?.geometry?.location || {
    lat: 59.22053689999999,
    lng: 10.9347012,
  };

  return (
    <div>
      <div className="max-w-lg mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-rose-400" />
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-400">
            Ta kontakt
          </p>
        </div>
        <Title>Kontakt oss</Title>
      </div>

      <div className="py-4 grid grid-cols-1 md:grid-cols-2 grid-rows-4 gap-4 w-full">
        <Card className="col-span-1 row-span-1">
          <CardHeader>
            <CardTitle>Kontaktinformasjon</CardTitle>
          </CardHeader>
          <CardContent>
            <a
              href={`mailto:${contactInfo?.email}`}
              className="text-base text-muted-foreground hover:text-rose-400 transition-colors block"
            >
              {contactInfo?.email}
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              {contactInfo?.phone}
            </p>
          </CardContent>
        </Card>

        <ContactForm className="col-span-1 row-span-4" />

        <Card className="col-span-1 row-span-3 flex flex-col">
          <CardHeader>
            <CardTitle>Hvor vi er</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col flex-1 gap-4">
            <CardDescription className="text-base">
              Vi jobber over hele Norge – der vi trengs.
            </CardDescription>
            <MapsPreview address={address} coords={coords} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Kontakt;
