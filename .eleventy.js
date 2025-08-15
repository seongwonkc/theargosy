/** @type {import("@11ty/eleventy").UserConfig} */
module.exports = function(eleventyConfig) {
  // Passthrough static assets
eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });

  // --- Filters ---
  eleventyConfig.addFilter("dateIso", (d) => new Date(d).toISOString());

  eleventyConfig.addFilter("dateReadable", (d) => {
    const dateObj =
      d === "now" || d === undefined || d === null || d === ""
        ? new Date()
        : new Date(d);
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("slugify", (str = "") =>
    String(str)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")
  );

  eleventyConfig.addFilter("plus", (a, b) => (Number(a) || 0) + (Number(b) || 0));

  // --- Collections ---
  eleventyConfig.addCollection("articles", (api) => {
  const now = new Date();
  return api
    .getFilteredByGlob("src/articles/**/*.md")
    // ignore drafts like: draft: true
    .filter((p) => p.data.draft !== true)
    // ignore future-dated posts (Seoul time issues etc.)
    .filter((p) => p.date && p.date <= now)
    .sort((a, b) => b.date - a.date);
});

  // Eleventy core config
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};
