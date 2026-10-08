import rss from "@astrojs/rss";
import { site, notes } from "../content.js";

export const GET = (context) =>
  rss({
    title: site.name,
    description: "Notes on the data and AI systems I work on.",
    site: context.site,
    items: notes.map((note) => ({
      title: note.title.en,
      description: note.thesis.en,
      pubDate: new Date(note.date),
      link: `/notes/${note.slug}/`,
    })),
  });
