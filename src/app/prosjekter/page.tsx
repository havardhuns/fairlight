import { allProjectsQuery, projectsOverviewQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Galleri = async () => {
  const projects = await client.fetch(allProjectsQuery);
  const projectsOverview = await client.fetch(projectsOverviewQuery);

  return (
    <div>
      <div className="flex flex-col gap-4 mt-8 mb-4">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
          {projectsOverview.title}
        </h1>
        <p className="max-w-lg text-muted-foreground">
          {projectsOverview.description}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: any) => {
          const image = project.images?.[0];
          return (
            <Card key={project._id} className="overflow-hidden">
              <div className="relative h-56 sm:h-44 md:h-56">
                <Image
                  src={image?.asset?.url}
                  alt={image?.alt || project.title || "Project image"}
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
          );
        })}
      </div>
    </div>
  );
};

export default Galleri;
