import { type SchemaTypeDefinition } from "sanity";
import { shortInfoType } from "./shortInfoType";
import { projectsOverviewType } from "./projectsOverviewType";
import { projectsType } from "./projectsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [shortInfoType, projectsType, projectsOverviewType],
};
