export default {
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "works",
      title: "Works",
      type: "array",
      of: [{ type: "workExperience" }],
    },
  ],
  orderings: [
    {
      title: "year, New",
      name: "YearDesc",
      by: [{ field: "Year", direction: "desc" }],
    },
  ],
};
