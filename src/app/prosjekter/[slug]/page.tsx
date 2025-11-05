import { client } from "@/sanity/lib/client";
import { projectBySlugQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { ProjectBySlugQueryResult } from "../../../../sanity.types";
import { Title } from "@/components/ui/typography";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;

  const project = await client.fetch<ProjectBySlugQueryResult>(
    projectBySlugQuery,
    { slug }
  );

  console.log(project);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <Title>{project.title}</Title>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectPage;
