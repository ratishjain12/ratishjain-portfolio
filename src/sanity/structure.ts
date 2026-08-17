import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      S.documentTypeListItem("workExperience").title("Work Experience"),
      S.documentTypeListItem("certification").title("Certifications"),
      S.documentTypeListItem("project").title("Projects"),
    ]);
