import { type SchemaTypeDefinition } from "sanity";
import { shortInfoType } from "./shortInfoType";
import { projectsOverviewType } from "./projectsOverviewType";
import { projectsType } from "./projectsType";
import { fairlightInfoType } from "./contactInfo";
import { aboutInfoType } from "./aboutInfoType";
import { employeeType } from "./employeeType";
import { servicesOverviewType } from "./servicesOverviewType";
import { serviceType } from "./serviceType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    shortInfoType,
    projectsType,
    projectsOverviewType,
    fairlightInfoType,
    aboutInfoType,
    employeeType,
    servicesOverviewType,
    serviceType,
  ],
};
