import { allProjectsQuery, projectsOverviewQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import {
  AllProjectsQueryResult,
  ProjectsOverviewQueryResult,
} from "../../../sanity.types";
import ProjectList from "@/components/ProjectList";
import { Description, Title } from "@/components/ui/typography";

export const metadata = {
  title: "Prosjekter | Fairlight",
};

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
      <div className="max-w-2xl mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-rose-400" />
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-400">
            Våre prosjekter
          </p>
        </div>
        <Title>{projectsOverview.title}</Title>
        <Description>{projectsOverview.description}</Description>
      </div>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
