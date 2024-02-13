(() => {
  // src/templates/hello_world.ts
  var helloWorld = `
<p>Hello world from template</p>
`;

  // src/templates/body.ts
  var body = `
<body>

${helloWorld}

<div>
<p>Hello world</p>
</div>
      
</body>
`;

  // src/ts/rendersite.ts
  function renderSite() {
    document.body.outerHTML = body;
  }
  renderSite();
})();
//# sourceMappingURL=main.js.map
