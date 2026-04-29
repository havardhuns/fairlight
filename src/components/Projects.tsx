import { allProjectsQuery, projectsOverviewQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import {
  AllProjectsQueryResult,
  ProjectsOverviewQueryResult,
} from "../../sanity.types";
import { Description, Title } from "./ui/typography";
import Link from "next/link";
import { Button } from "./ui/button";

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
      <div className="mt-16 md:mt-12 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-rose-400" />
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-400">
            Utvalgte prosjekter
          </p>
        </div>
        <Title className="mb-2">{projectOverview.title}</Title>
        <Description>{projectOverview.description}</Description>
      </div>
      <ProjectCarousel projects={projects} />
      <div className="flex justify-center mt-8">
        <Button asChild variant="secondary" size="lg" className="rounded-full px-8">
          <Link href="/prosjekter">Se alle prosjekter</Link>
        </Button>
      </div>
    </>
  );
};

export default Projects;
