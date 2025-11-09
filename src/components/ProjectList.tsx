import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { AllProjectsQueryResult } from "../../sanity.types";
import Link from "next/link";
import { imageUrlFor } from "@/utils/image";

export interface ProjectListProps {
  projects: AllProjectsQueryResult;
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => {
        const image = project.images?.[0];
        return (
          <Link href={`/prosjekter/${project.slug?.current}`} key={project._id}>
            <Card className="overflow-hidden hover:scale-[1.01] transition-transform duration-200">
              <div className="relative h-56 sm:h-44 md:h-56">
                <Image
                  src={imageUrlFor(image).url()}
                  alt={project.title || "Project image"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.location}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectList;
