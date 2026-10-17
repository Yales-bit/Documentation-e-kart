// Configuration MathJax pour les formules LaTeX
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// Déclenchement après navigation SPA (instant loading)
document$.subscribe(() => {
  if (typeof MathJax !== "undefined" && typeof MathJax.typesetPromise === "function") {
    if (MathJax.startup && MathJax.startup.output && MathJax.startup.output.clearCache) {
      MathJax.startup.output.clearCache();
    }
    if (typeof MathJax.typesetClear === "function") {
      MathJax.typesetClear();
    }
    MathJax.typesetPromise().catch((err) => console.debug("MathJax notice:", err));
  }
});
