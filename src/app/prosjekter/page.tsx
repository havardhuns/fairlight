import { allProjectsQuery, projectsOverviewQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import {
  AllProjectsQueryResult,
  ProjectsOverviewQueryResult,
} from "../../../sanity.types";
import ProjectList from "@/components/ProjectList";
import { Title } from "@/components/ui/typography";

const Projects = async () => {
  const projects = await client.fetch<AllProjectsQueryResult>(allProjectsQuery);
  const projectsOverview = await client.fetch<ProjectsOverviewQueryResult>(
    projectsOverviewQuery
  );

  if (!projectsOverview) {
    return null;
  }

  return (
    <div>
      <div className="mb-4">
        <Title>{projectsOverview.title}</Title>
        <p className="max-w-lg text-muted-foreground">
          {projectsOverview.description}
        </p>
      </div>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
