import Image from "next/image";
import { AllProjectsQueryResult } from "../../sanity.types";
import Link from "next/link";
import { imageUrlFor } from "@/utils/image";
import { ArrowRight } from "lucide-react";

export interface ProjectListProps {
  projects: AllProjectsQueryResult;
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project) => {
        const image = project.images?.[0];
        return (
          <Link
            href={`/prosjekter/${project.slug?.current}`}
            key={project._id}
            className="group block rounded-xl overflow-hidden border border-border bg-card transition-all duration-300 hover:ring-1 hover:ring-white/15 hover:shadow-xl"
          >
            <div className="relative h-52 sm:h-44 md:h-52 overflow-hidden">
              <Image
                src={imageUrlFor(image).url()}
                alt={project.title || "Project image"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-card/60 via-transparent to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="font-display font-normal text-xl leading-tight mb-1">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">
                {project.location}
              </p>
              <span className="flex items-center text-xs font-semibold uppercase tracking-wider text-rose-400 group-hover:text-rose-300 transition-colors">
                Se mer
                <ArrowRight className="ml-1.5 size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectList;
