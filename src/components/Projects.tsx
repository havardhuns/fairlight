import { allProjectsQuery, projectsOverviewQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import {
  AllProjectsQueryResult,
  ProjectsOverviewQueryResult,
} from "../../sanity.types";
import { Description, Title } from "./ui/typography";

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
      <div className="flex flex-col gap-4 mt-16 md:mt-8 mb-4">
        <Title>{projectOverview.title}</Title>
        <Description>{projectOverview.description}</Description>
      </div>
      <ProjectCarousel projects={projects} />
    </>
  );
};

export default Projects;
