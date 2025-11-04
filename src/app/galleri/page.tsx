import { allProjectsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

const Galleri = async () => {
  const images = await client.fetch(allProjectsQuery);

  return (
    <>
      <div>Galleri</div>
      {images.map((image: any) => (
        <div key={image._id}>
          <h2>{image.title}</h2>
          <p>{image.description}</p>
          <div className="grid grid-cols-3 gap-4">
            {image.images.map((img: any) => (
              <div key={img.asset._id}>
                <img src={img.asset.url} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Galleri;
