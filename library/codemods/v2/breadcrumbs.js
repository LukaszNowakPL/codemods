export default (file, api) => {
  const j = api.jscodeshift;

  /*
  // How it works
  return j(file.source)
    // Do some stuff with elements
    .toSource();
  */

  return (
    j(file.source)
      .find(j.JSXElement)
      ///////////////////////
      // Find all components called FlareBreadcrumbs.Label
      .filter(
        ({value: {openingElement: {name: { object, property }}}}) =>
            object?.name === "FlareBreadcrumbs" && property?.name === "Label",
      )
      ///////////////////////
      .forEach((element) => {
        const {node: {openingElement: { name, attributes, selfClosing }}} = element;
        ///////////////////////
        // Create new component based on filtered ones
        const newComponent = j.jsxElement(
          /*
          ///////////////////////
            j.jsxOpeningElement(
                name,       // <FlareBreadcrumbs.Label
                attributes, //component props
                selfClosing // Closing tag />
            )
        */
          j.jsxOpeningElement(
            ///////////////////////
            // Change FlareBreadcrumbs.Label into FlareBreadcrumbs.Link
            {
              ...name,
              property: {
                ...name.property,
                name: "Link",
              },
            },
            ///////////////////////
            // Add href prop into new component
            [
              j.jsxAttribute(j.jsxIdentifier("href"), j.stringLiteral("#")),
              ...attributes,
            ],
            ///////////////////////
            // Leave not changed
            selfClosing,
          ),
        );

        ///////////////////////
        // Replace our original component with our modified one
        j(element).replaceWith(newComponent);
      })
      .toSource()
  );
};
