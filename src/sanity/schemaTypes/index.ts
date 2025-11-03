import { type SchemaTypeDefinition } from "sanity";
import { projectsType } from "./projectsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectsType],
};
