import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Innhold")
    .items([
      // ▶️ Informasjon-gruppen
      S.listItem()
        .title("Informasjon")
        .child(
          S.list()
            .title("Informasjon")
            .items([
              S.listItem()
                .title("Kontaktinformasjon")
                .child(
                  S.document()
                    .schemaType("contactInfo")
                    .documentId("contactInfoSingleton")
                ),
              S.listItem()
                .title("Kort info (fremside)")
                .child(
                  S.document()
                    .schemaType("shortInfo")
                    .documentId("shortInfoSingleton")
                ),
              S.listItem()
                .title("Mer info (om oss)")
                .child(
                  S.document()
                    .schemaType("aboutInfo")
                    .documentId("aboutInfoSingleton")
                ),
              S.documentTypeListItem("employee").title("Ansatte"),
            ])
        ),

      // ▶️ Prosjekter-gruppen
      S.listItem()
        .title("Prosjekter")
        .child(
          S.list()
            .title("Prosjekter")
            .items([
              S.listItem()
                .title("Prosjekter (overordnet)")
                .child(
                  S.document()
                    .schemaType("projectsOverview")
                    .documentId("projectsOverviewSingleton")
                ),
              S.documentTypeListItem("projects").title(
                "Prosjekter (individuelle)"
              ),
            ])
        ),
      S.listItem()
        .title("Tjenester")
        .child(
          S.list()
            .title("Tjenester")
            .items([
              S.listItem()
                .title("Tjenester (overordnet)")
                .child(
                  S.document()
                    .schemaType("servicesOverview")
                    .documentId("servicesOverviewSingleton")
                ),
              S.documentTypeListItem("service").title(
                "Tjenester (individuelle)"
              ),
            ])
        ),
    ]);
