import { allProjectsQuery, projectsOverviewQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { Gallery4 } from "@/components/blocks/gallery4";

const Projects = async () => {
  const projectOverview = await client.fetch(projectsOverviewQuery);
  const projects = await client.fetch(allProjectsQuery);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-medium md:text-3xl lg:text-xl2">
          {projectOverview.title}
        </h2>
        <p className="max-w-lg text-muted-foreground">
          {projectOverview.description}
        </p>
      </div>
      <Gallery4
        items={projects.map((project: any) => ({
          ...project,
          image: project.images[0]?.asset?.url,
        }))}
      />
    </>
  );
};

export default Projects;
