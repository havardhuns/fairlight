import { type SchemaTypeDefinition } from "sanity";
import { projectsType } from "./projectsType";
import { shortInfoType } from "./shortInfoType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectsType, shortInfoType],
};
