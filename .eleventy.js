
module.exports = function(eleventyConfig) {
  // Passthrough everything in src/assets and top-level html
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/*.html": "/" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });

  // Date display: "18 Sep, 2023"
  eleventyConfig.addFilter("dateNews", (dateObj) => {
    const d = new Date(dateObj);
    const day = d.getDate().toString().padStart(2, "0");
    const month = d.toLocaleString("en-US", {month:"short"});
    const year = d.getFullYear();
    return `${day} ${month}, ${year}`;
  });

  // Posts collection sorted by date desc
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
