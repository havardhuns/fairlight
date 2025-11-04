import { allProjectsQuery, projectsOverviewQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { Gallery4 } from "@/components/blocks/gallery4";

const Projects = async () => {
  const projectOverview = await client.fetch(projectsOverviewQuery);
  const projects = await client.fetch(allProjectsQuery);

  console.log(projects.map(({ slug }: any) => slug));

  return (
    <>
      <div className="flex flex-col gap-4 mt-8 mb-4">
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
          {projectOverview.title}
        </h2>
        <p className="max-w-lg text-muted-foreground">
          {projectOverview.description}
        </p>
      </div>
      <Gallery4
        items={projects
          .filter(({ showOnFrontpage: any }) => !!showOnFrontpage)
          .map((project: any) => ({
            ...project,
            href: `/prosjekter/${project.slug.current}`,
            image: project.images[0]?.asset?.url,
          }))}
      />
    </>
  );
};

export default Projects;
