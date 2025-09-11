module.exports = function(eleventyConfig) {
  // Passthrough your existing site exactly as-is
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/*.html": "/" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });


export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  eleventyConfig.addCollection("posts", (collection) =>
    collection.getFilteredByGlob("src/posts/*.{md,html}").sort((a, b) => b.date - a.date)
  );
  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}

  
  // Posts collection (Markdown) sorted by date desc
eleventyConfig.addCollection("posts", (collection) =>
  collection.getFilteredByGlob("src/posts/**/*.md").sort((a,b) => b.date - a.date)
);

eleventyConfig.addFilter("sectionPath", (section, slug) => `/${section}/${slug}/`);

eleventyConfig.addTransform("permalink", (content, outputPath) => content);

  // Nice date like "18 Sep, 2023"
  eleventyConfig.addFilter("dateNews", (d) => {
    const x = new Date(d);
    return `${String(x.getDate()).padStart(2,"0")} ${x.toLocaleString("en-US",{month:"short"})}, ${x.getFullYear()}`;
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md","njk","html","json"]
  };
};
