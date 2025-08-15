/** @type {import("@11ty/eleventy").UserConfig} */
module.exports = function(eleventyConfig) {
  // Passthrough static assets
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

  // Filters
  eleventyConfig.addFilter("dateIso", (dateObj) => {
    return new Date(dateObj).toISOString();
  });
  eleventyConfig.addFilter("dateReadable", (dateObj) => {
    const d = new Date(dateObj);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  });
  eleventyConfig.addFilter("slugify", (str = "") => {
    return str.toString().toLowerCase().trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  });
  eleventyConfig.addFilter("plus", (a, b) => (Number(a) || 0) + (Number(b) || 0));

  // Collections
  eleventyConfig.addCollection("articles", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/articles/**/*.md")
      .sort((a, b) => (b.date - a.date)); // newest first
  });

  eleventyConfig.addCollection("sections", (collectionApi) => {
    const articles = collectionApi.getFilteredByGlob("src/articles/**/*.md");
    const sectionMap = new Map();
    for (const item of articles) {
      const sec = (item.data.section || "General").trim();
      if (!sectionMap.has(sec)) sectionMap.set(sec, []);
      sectionMap.get(sec).push(item);
    }
    for (const [k, arr] of sectionMap) {
      arr.sort((a, b) => (b.date - a.date));
    }
    return Array.from(sectionMap, ([name, items]) => ({ name, items }));
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
