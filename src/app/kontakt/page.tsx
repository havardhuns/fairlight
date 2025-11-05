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

const Kontakt = async () => {
  const contactInfo = await client.fetch<ContactInfoQueryResult>(
    contactInfoQuery
  );

  return (
    <div className="my-8">
      <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl mb-6">
        Kontakt oss
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-5 gap-4 w-full">
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
            <div className="flex-1 rounded-lg overflow-hidden border">
              <iframe
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                src={`https://www.google.com/maps?q=${contactInfo?.location}&hl=nb&z=12&output=embed&maptype=satellite`}
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Kontakt;
