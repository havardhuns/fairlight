import { client } from "@/sanity/lib/client";
import { projectBySlugQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { ProjectBySlugQueryResult } from "../../../../sanity.types";
import { Body, Description, SubTitle, Title } from "@/components/ui/typography";
import Image from "next/image";
import { imageUrlFor } from "@/utils/image";
import { Separator } from "@/components/ui/separator";
import ImageGallery from "@/components/ImageGallery";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { formatToMonthYear } from "@/utils/date";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const project = await client.fetch<ProjectBySlugQueryResult>(
    projectBySlugQuery,
    { slug }
  );
  return {
    title: `${project?.title || "Prosjekt"} | Fairlight`,
  };
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const project = await client.fetch<ProjectBySlugQueryResult>(
    projectBySlugQuery,
    { slug }
  );

  if (!project) {
    notFound();
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-rose-400" />
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-400">
            Prosjekt
          </p>
        </div>
        <Title className="mb-1">{project.title}</Title>
        <p className="text-sm text-muted-foreground">{project.location}</p>
      </div>

      <div className="relative w-full h-64 sm:h-80 md:h-[480px] lg:h-[560px] rounded-xl overflow-hidden mb-10">
        <Image
          src={imageUrlFor(project.images?.[0]).url()}
          alt={project.title || ""}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
      </div>

      <Separator />

      <div className="flex flex-col md:flex-row my-10 gap-10">
        <div className="md:w-1/2">
          <SubTitle>Detaljer</SubTitle>
          <dl className="space-y-4">
            {[
              { label: "Sted", value: project.location },
              {
                label: "Når",
                value: project.date ? formatToMonthYear(project.date) : "—",
              },
              { label: "Type event", value: project.eventType },
            ].map(({ label, value }) => (
              <div key={label}>
                <dt className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-0.5">
                  {label}
                </dt>
                <dd className="text-sm text-muted-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="md:w-1/2">
          <SubTitle>Om prosjektet</SubTitle>
          <Description>{project.description}</Description>
        </div>
      </div>

      {project.images && project.images.length > 1 && (
        <>
          <Separator />
          <div className="my-10">
            <SubTitle>Galleri</SubTitle>
            <Body>Et utvalg bilder fra eventet.</Body>
            <ImageGallery images={project.images as SanityImageObject[]} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectPage;
