const html = require('choo/html')

/**
 * Tags
 */
const templateTags = (tags) => tags.map(tag => html`
  <span><a href="/tags/${tag}">${tag}</a></span>
`)

/**
 * Block
 */
exports.blocks = (link, prev, send) => {
  return html`
    <component-link
      data-id="${link.id}"
      class="db c4 design-block-margin">
      <div class="p1 design-background-link">
        <a
          href="${link.url}"
          class="x xjc xac tac"
          style="min-height: 20vh">
          <div>
            <div class="h5">${link.title}</div>
            <div class="list-comma-seperated">
              ${templateTags(link.tags)}
            </div>
          </div>
        </a>
      </div>
    </component-link>
  `
}

/**
 * Inline
 */
exports.inline = (link, prev, send) => {
  return html`
    <component-link data-id="${link.id}">
      <a href="${link.url}">
        ${link.title}
      </a>
    </component-link>
  `
}

/**
 * Grid
 */
exports.grid = (link, prev, send) => {
  return html`
    <component-link data-id="${link.id}">
      <a href="${link.url}">
        ${link.title}
      </a>
    </component-link>
  `
}