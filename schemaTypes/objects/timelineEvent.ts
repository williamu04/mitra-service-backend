import { defineType } from "sanity";

export const timelineEvent = defineType({
  name: "timelineEvent",
  title: "Timeline Event",
  type: "object",
  fields: [
    { name: "date", type: "datetime", title: "Date" },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {list: ['received', 'diagnosed', 'in-progress', 'completed']},
    },
    { name: "title", type: "string", title: "Title" },
    { name: "description", type: "text", title: "Description" },
    { name: "by", type: "string", title: "By" },
  ],
})