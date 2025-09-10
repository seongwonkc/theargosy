module.exports = function(eleventyConfig) {
  // Passthrough your existing site as-is
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  // Copy all standalone HTML files 1:1
  eleventyConfig.addPassthroughCopy({ "src/*.html": "/" });

  // Generate a JSON feed for posts (so you don't have to rewrite homepage now)
  eleventyConfig.addCollection("posts", (collection) =>
    collection.getFilteredByGlob("src/posts/**/*.md").sort((a,b) => b.date - a.date)
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md","njk","html","json"]
  };
};
