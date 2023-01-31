const markdownItAnchor = require('markdown-it-anchor')

const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginNavigation = require('@11ty/eleventy-navigation')
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy')
const tocExtract = require('toc-extract/plugins/eleventy')
const readingTime = require('eleventy-plugin-reading-time')
const tinyCSS = require('@sardine/eleventy-plugin-tinycss')

module.exports = function (eleventyConfig) {
  // Copy the contents of the `public` folder to the output folder
  // For example, `./public/css/` ends up in `_site/css/`
  eleventyConfig.addPassthroughCopy({
    './public/': '/',
    './node_modules/prismjs/themes/prism-okaidia.css': '/css/prism-okaidia.css'
  })

  // Run Eleventy when these files change:
  // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

  // Watch content images for the image pipeline.
  eleventyConfig.addWatchTarget('content/**/*.{svg,webp,png,jpeg}')

  // watch files in public for copy pipeline
  eleventyConfig.addWatchTarget('public/**/*')

  // App plugins
  eleventyConfig.addPlugin(require('./eleventy-config/drafts.js'))
  eleventyConfig.addPlugin(require('./eleventy-config/images.js'))
  eleventyConfig.addPlugin(require('./eleventy-config/gpt.js'))
  eleventyConfig.addPlugin(require('./eleventy-config/helper-filters.js'))

  // Official plugins
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(pluginSyntaxHighlight)
  eleventyConfig.addPlugin(pluginNavigation)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
  eleventyConfig.addPlugin(tocExtract)
  eleventyConfig.addPlugin(readingTime)
  eleventyConfig.addPlugin(tinyCSS)

  // Customize Markdown library settings:
  eleventyConfig.amendLibrary('md', mdLib => {
    mdLib.use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.linkAfterHeader({
        style: 'aria-label',
        placement: 'after',
        class: 'header-anchor',
        assistiveText: title => title,
        wrapper: ['<div class="header-wrapper">', '</div>']
      }),
      level: [1, 2, 3, 4],
      slugify: eleventyConfig.getFilter('slugify')
    })
  })

  // Features to make your build faster (when you need them)
  eleventyConfig.setServerPassthroughCopyBehavior('passthrough')

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [
      'md',
      'njk',
      'html',
      'liquid'
    ],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: 'njk',

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: 'njk',

    // These are all optional:
    dir: {
      input: 'content', // default: "."
      includes: '../_includes', // default: "_includes"
      data: '../_data', // default: "_data"
      output: '_site'
    },

    // -----------------------------------------------------------------
    // Optional items:
    // -----------------------------------------------------------------

    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

    // When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
    // it will transform any absolute URLs in your HTML to include this
    // folder name and does **not** affect where things go in the output folder.
    pathPrefix: '/'
  }
}
