import { allProjectsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { Gallery4 } from "@/components/blocks/gallery4";

const Galleri = async () => {
  const projects = await client.fetch(allProjectsQuery);

  return (
    <>
      <Gallery4
        items={projects.map((project: any) => ({
          ...project,
          image: project.images[0]?.asset?.url,
        }))}
      />
    </>
  );
};

export default Galleri;
