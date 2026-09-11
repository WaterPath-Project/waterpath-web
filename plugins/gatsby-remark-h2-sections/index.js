const isHeading = (node, depth) =>
  (node.type === "heading" && node.depth === depth) ||
  (node.type === "html" && new RegExp(`^\\s*<h${depth}(?:\\s|>)`, "i").test(node.value))

const wrapSections = (nodes, depth, className) => {
  const children = []
  let section = null

  for (const node of nodes) {
    if (isHeading(node, depth)) {
      section = {
        type: `h${depth}Section`,
        children: [],
        data: {
          hName: "div",
          hProperties: {
            className,
          },
        },
      }
      children.push(section)
    }

    if (section) {
      section.children.push(node)
    } else {
      children.push(node)
    }
  }

  return children
}

module.exports = ({ markdownAST }) => {
  const children = wrapSections(markdownAST.children, 2, ["section", "section-h2"])

  for (const node of children) {
    if (node.type === "h2Section") {
      node.children = wrapSections(node.children, 3, ["section", "section-h3"])
    }
  }

  markdownAST.children = children
}