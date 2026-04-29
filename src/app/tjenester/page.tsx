import { client } from "@/sanity/lib/client";
import { allServicesQuery, servicesOverviewQuery } from "@/sanity/lib/queries";
import {
  AllServicesQueryResult,
  ServicesOverviewQueryResult,
} from "../../../sanity.types";
import { Description, Title } from "@/components/ui/typography";
import Image from "next/image";
import { imageUrlFor } from "@/utils/image";

export const metadata = {
  title: "Tjenester | Fairlight",
};

const Tjenester = async () => {
  const servicesOverview = await client.fetch<ServicesOverviewQueryResult>(
    servicesOverviewQuery
  );
  const services = await client.fetch<AllServicesQueryResult>(allServicesQuery);

  if (!servicesOverview) {
    return null;
  }

  return (
    <div>
      <div className="max-w-2xl mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-rose-400" />
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-400">
            Hva vi tilbyr
          </p>
        </div>
        <Title>{servicesOverview.title}</Title>
        <Description>{servicesOverview.description}</Description>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[74rem]">
        {services.map((service, i) => (
          <div
            key={i}
            className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:ring-1 hover:ring-white/10"
          >
            {service.image?.asset ? (
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={imageUrlFor(service.image).url()}
                  alt={service.title ?? ""}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card/70 via-transparent to-transparent" />
              </div>
            ) : (
              <div className="w-full aspect-video bg-muted" />
            )}
            <div className="h-px w-full bg-rose-500/40" />
            <div className="p-6">
              <h3 className="font-display font-normal text-2xl leading-tight mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tjenester;
