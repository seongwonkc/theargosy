module.exports = function(collectionApi) {
  const all = collectionApi.getFilteredByGlob("src/posts/**/*.md")
    .filter(p => !p.data.draft && p.date <= new Date())
    .sort((a,b) => b.date - a.date);

  const bySection = (s) => all.filter(p => p.data.section === s);
  return {
    all,
    hero: all.find(p => p.data.featured && p.data.section === "news") || all[0],
    latest: {
      news: bySection("news").slice(0,6),
      opinion: bySection("opinion").slice(0,4),
      sports: bySection("sports").slice(0,4),
      features: bySection("features").slice(0,4),
    }
  };
};
