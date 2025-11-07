"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

import { vercelDeployTool } from "sanity-plugin-vercel-deploy";

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    vercelDeployTool({
      // Optional preconfigured projects
      projects: [
        {
          name: process.env.NEXT_PUBLIC_VERCEL_ENV!,
          projectId: process.env.NEXT_PUBLIC_VERCEL_PROJECT_ID,
          teamId: process.env.NEXT_PUBLIC_VERCEL_TEAM_ID,
          url: "https://api.vercel.com/v1/integrations/deploy/prj_UivqS5XXAbsZtNkpVuxnPhGaHbA2/j2LQ6TWpzn",
        },
      ],
    }),
  ],
});
