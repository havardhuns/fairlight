import { allProjectsQuery, projectsOverviewQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import {
  AllProjectsQueryResult,
  ProjectsOverviewQueryResult,
} from "../../../sanity.types";
import ProjectList from "@/components/ProjectList";

const Projects = async () => {
  const projects = await client.fetch<AllProjectsQueryResult>(allProjectsQuery);
  const projectsOverview = await client.fetch<ProjectsOverviewQueryResult>(
    projectsOverviewQuery
  );

  if (!projectsOverview) {
    return null;
  }

  return (
    <div className="my-8">
      <div className="flex flex-col gap-4 mb-4">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
          {projectsOverview.title}
        </h1>
        <p className="max-w-lg text-muted-foreground">
          {projectsOverview.description}
        </p>
      </div>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
