import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem().title("Kort info (fremside)").child(
        S.document().schemaType("shortInfo").documentId("shortInfoSingleton") // alltid samme ID
      ),
      S.listItem()
        .title("Prosjekter (overordnet)")
        .child(
          S.document()
            .schemaType("projectsOverview")
            .documentId("projectsOverviewSingleton")
        ),
      S.documentTypeListItem("projects").title("Prosjekter (individuelle)"),
    ]);
