import { client } from "@/sanity/lib/client";
import { projectBySlugQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { ProjectBySlugQueryResult } from "../../../../sanity.types";
import { Body, Description, SubTitle, Title } from "@/components/ui/typography";
import Image from "next/image";
import { imageUrlFor } from "@/utils/imageUrlFor";
import { Separator } from "@/components/ui/separator";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

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
      <div>
        <p className="text-muted-foreground font-light">PROSJEKT</p>
        <Title className="my-4">{project.title}</Title>
      </div>
      <div className="my-8 relative w-full h-96 md:h-204">
        <Image
          src={imageUrlFor(project.images?.[0]).url()}
          alt={project.title || ""}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <Separator />
      <div className="flex flex-col md:flex-row my-8">
        <div className="md:w-1/2">
          <SubTitle className="my-4">Detaljer</SubTitle>
          <Body>
            <span className="font-semibold text-white">Kunde:</span>{" "}
            {project.client}
          </Body>
          <Body>
            <span className="font-semibold text-white">Sted:</span>{" "}
            {project.location}
          </Body>
          <Body>
            <span className="font-semibold text-white">Dato:</span>{" "}
            {project.date}
          </Body>
          <Body>
            <span className="font-semibold text-white">Type event:</span>{" "}
            {project.eventType}
          </Body>
        </div>
        <div className="md:w-1/2">
          <SubTitle className="my-4">Om prosjektet</SubTitle>
          <Description>{project.description}</Description>
        </div>
      </div>
      <Separator />
      <div className="my-8">
        <SubTitle>Galleri</SubTitle>
        <Body>Et utvalg bilder fra eventet.</Body>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {project.images?.map((image) => (
            <div key={image._key} className="relative w-full h-48">
              <Image
                src={imageUrlFor(image).url()}
                alt={project.title || ""}
                fill
                className="object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
