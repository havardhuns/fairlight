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
  const coords = data.results?.[0]?.geometry?.location || null;

  return (
    <div>
      <Title>Kontakt oss</Title>
      <div className="py-4 grid grid-cols-1 md:grid-cols-2 grid-rows-4 gap-4 w-full">
        <Card className="col-span-1 row-span-1">
          <CardHeader>
            <CardTitle>Kontaktinformasjon</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild variant="link" className="text-lg p-0">
              <a href={`mailto:${contactInfo?.email}`}>{contactInfo?.email}</a>
            </Button>
            <p className="text-lg">{contactInfo?.phone}</p>
          </CardContent>
        </Card>

        <ContactForm className="col-span-1 row-span-4" />

        <Card className="col-span-1 row-span-3 flex flex-col">
          <CardHeader>
            <CardTitle>Hvor vi er</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col flex-1 gap-4">
            <CardDescription className="text-xl">
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
