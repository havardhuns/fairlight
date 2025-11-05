import { client } from "@/sanity/lib/client";
import { projectBySlugQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { ProjectBySlugQueryResult } from "../../../../sanity.types";

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
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectPage;
