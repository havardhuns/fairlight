import { allProjectsQuery, projectsOverviewQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import {
  AllProjectsQueryResult,
  ProjectsOverviewQueryResult,
} from "../../sanity.types";

const Projects = async () => {
  const projectOverview = await client.fetch<ProjectsOverviewQueryResult>(
    projectsOverviewQuery
  );
  const projects = await client.fetch<AllProjectsQueryResult>(allProjectsQuery);

  if (!projectOverview) {
    return null;
  }

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
      <ProjectCarousel projects={projects} />
    </>
  );
};

export default Projects;
