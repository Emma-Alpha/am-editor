> Here, we have a new rich text editor called [Editable](https://github.com/editablejs/editable), which does not use the native editable property [~~contenteditable~~](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable), but instead uses a custom renderer. This approach allows us to better control the behavior of the editor.

# am-editor

<p align="center">
	A rich text editor that supports collaborative editing, you can freely use React, Vue and other front-end common libraries to extend and define plugins.
</p>

<p align="center">
	<a href="https://editor.aomao.com"><strong>Preview</strong></a> ·
  	<a href="https://editor.aomao.com/docs"><strong>Document</strong></a> ·
 	<a href="plugins.md"><strong>Plugins</strong></a>
</p>

<div align="center">
  <p>
    <a href="README.zh-CN.md">
      <img src="https://img.shields.io/badge/lang-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-red.svg?longCache=true&style=flat-square">
    </a>
  </p>
</div>

<p align="center">
  <a href="./packages/engine/package.json">
    <img src="https://img.shields.io/npm/l/@4399ywkf/engine">
  </a>
  <a href="https://unpkg.com/@4399ywkf/engine/dist/index.js">
    <img src="http://img.badgesize.io/https://unpkg.com/@4399ywkf/engine/dist/index.js?compression=gzip&amp;label=size">
  </a>
  <a href="./packages/engine/package.json">
    <img src="https://img.shields.io/npm/v/@4399ywkf/engine.svg?maxAge=3600&label=version&colorB=007ec6">
  </a>
  <a href="https://www.npmjs.com/package/@4399ywkf/engine">
    <img src="https://img.shields.io/npm/dw/@4399ywkf/engine">
  </a>
  <a href="https://github.com/umijs/dumi">
    <img src="https://img.shields.io/badge/docs%20by-dumi-blue">
  </a>
</p>

[**`Vue2`**](https://github.com/zb201307/am-editor-vue2)

[**`Vue3`**](https://github.com/red-axe/am-editor-vue3-demo)

[**`React`** ](https://github.com/big-camel/am-editor/tree/master/examples/react)

[**`Vue2 Demo`**](https://github.com/big-camel/am-editor-demo-vue2)

[**`Vue2 Nuxt Demo`**](https://github.com/big-camel/am-editor-nuxt)

## Features

-   🎁 Out-of-the-box solution with dozens of rich plugins to meet most needs
-   🚀 Highly extensible, in addition to basic plugins for mark, inline, and block types, we also provide card components combined with front-end libraries like React and Vue to render plugin UI
-   🎨 Rich multimedia support, not only supports images and audio/video, but also supports embedding multimedia content
-   📝 Supports Markdown syntax
-   🌍 Supports internationalization
-   💻 Engine written purely in JavaScript, without relying on any front-end libraries, plugins can be rendered using front-end libraries like React and Vue. Can easily handle complex architecture
-   👥 Built-in collaborative editing solution, lightweight configuration to use
-   📱 Compatible with most latest mobile browsers

## Plugins

| **Package**                                                                                           |                                                                                                                                                                             **Version** |                                                                                                                                                                                 **Size** | **description**                 |
| :---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------ |
| [`@4399ywkf/toolbar`](./packages/toolbar)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/toolbar.svg?maxAge=3600&label=&colorB=007ec6)](./packages/toolbar/package.json) |                           [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/toolbar/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/toolbar/dist/index.js) | Toolbar, suitable for `React`   |
| [`@4399ywkf/toolbar-vue`](./packages/toolbar-vue)                                                     |                                                     [![](https://img.shields.io/npm/v/@4399ywkf/toolbar-vue.svg?maxAge=3600&label=&colorB=007ec6)](./packages/toolbar-vue/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/toolbar-vue/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/toolbar-vue/dist/index.js) | Toolbar, suitable for `Vue3`    |
| [`am-editor-toolbar-vue2`](https://github.com/zb201307/am-editor-vue2/tree/main/packages/toolbar)     |     [![](https://img.shields.io/npm/v/am-editor-toolbar-vue2.svg?maxAge=3600&label=&colorB=007ec6)](https://github.com/zb201307/am-editor-vue2/blob/main/packages/toolbar/package.json) |                 [![](http://img.badgesize.io/https://unpkg.com/am-editor-toolbar-vue2/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/am-editor-toolbar-vue2/dist/index.js) | Toolbar, suitable for `Vue2`    |
| [`@4399ywkf/plugin-alignment`](./plugins/alignment)                                                   |                                                   [![](https://img.shields.io/npm/v/@4399ywkf/plugin-alignment.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/alignment/package.json) |         [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-alignment/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-alignment/dist/index.js) | Alignment                       |
| [`@4399ywkf/plugin-embed`](./plugins/embed)                                                           |                                                           [![](https://img.shields.io/npm/v/@4399ywkf/plugin-embed.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/embed/package.json) |                 [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-embed/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-embed/dist/index.js) | Embed URL                       |
| [`@4399ywkf/plugin-backcolor`](./plugins/backcolor)                                                   |                                                   [![](https://img.shields.io/npm/v/@4399ywkf/plugin-backcolor.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/backcolor/package.json) |         [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-backcolor/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-backcolor/dist/index.js) | Background color                |
| [`@4399ywkf/plugin-bold`](./plugins/bold)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-bold.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/bold/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-bold/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-bold/dist/index.js) | Bold                            |
| [`@4399ywkf/plugin-code`](./plugins/code)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-code.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/code/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-code/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-code/dist/index.js) | Inline code                     |
| [`@4399ywkf/plugin-codeblock`](./plugins/codeblock)                                                   |                                                   [![](https://img.shields.io/npm/v/@4399ywkf/plugin-codeblock.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/codeblock/package.json) |         [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-codeblock/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-codeblock/dist/index.js) | CodeBlock, suitable for `React` |
| [`@4399ywkf/plugin-codeblock-vue`](./plugins/codeblock-vue)                                           |                                           [![](https://img.shields.io/npm/v/@4399ywkf/plugin-codeblock-vue.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/codeblock-vue/package.json) | [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-codeblock-vue/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-codeblock-vue/dist/index.js) | CodeBlock, suitable for `Vue3`  |
| [`am-editor-codeblock-vue2`](https://github.com/zb201307/am-editor-vue2/tree/main/packages/codeblock) | [![](https://img.shields.io/npm/v/am-editor-codeblock-vue2.svg?maxAge=3600&label=&colorB=007ec6)](https://github.com/zb201307/am-editor-vue2/tree/main/packages/codeblock/package.json) |             [![](http://img.badgesize.io/https://unpkg.com/am-editor-codeblock-vue2/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/am-editor-codeblock-vue2/dist/index.js) | CodeBlock, suitable for `Vue2`  |
| [`@4399ywkf/plugin-fontcolor`](./plugins/fontcolor)                                                   |                                                   [![](https://img.shields.io/npm/v/@4399ywkf/plugin-fontcolor.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/fontcolor/package.json) |         [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-fontcolor/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-fontcolor/dist/index.js) | Font color                      |
| [`@4399ywkf/plugin-fontfamily`](./plugins/fontfamily)                                                 |                                                 [![](https://img.shields.io/npm/v/@4399ywkf/plugin-fontfamily.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/fontfamily/package.json) |       [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-fontfamily/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-fontfamily/dist/index.js) | Font Family                     |
| [`@4399ywkf/plugin-fontsize`](./plugins/fontsize)                                                     |                                                     [![](https://img.shields.io/npm/v/@4399ywkf/plugin-fontsize.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/fontsize/package.json) |           [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-fontsize/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-fontsize/dist/index.js) | Font Size                       |
| [`@4399ywkf/plugin-heading`](./plugins/heading)                                                       |                                                       [![](https://img.shields.io/npm/v/@4399ywkf/plugin-heading.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/heading/package.json) |             [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-heading/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-heading/dist/index.js) | Heading                         |
| [`@4399ywkf/plugin-hr`](./plugins/hr)                                                                 |                                                                 [![](https://img.shields.io/npm/v/@4399ywkf/plugin-hr.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/hr/package.json) |                       [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-hr/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-hr/dist/index.js) | Horizontal rule                 |
| [`@4399ywkf/plugin-indent`](./plugins/indent)                                                         |                                                         [![](https://img.shields.io/npm/v/@4399ywkf/plugin-indent.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/indent/package.json) |               [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-indent/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-indent/dist/index.js) | Indentation                     |
| [`@4399ywkf/plugin-italic`](./plugins/italic)                                                         |                                                         [![](https://img.shields.io/npm/v/@4399ywkf/plugin-italic.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/italic/package.json) |               [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-italic/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-italic/dist/index.js) | Italic                          |
| [`@4399ywkf/plugin-link`](./plugins/link)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-link.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/link/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-link/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-link/dist/index.js) | Link, suitable for `React`      |
| [`@4399ywkf/plugin-link-vue`](./plugins/link-vue)                                                     |                                                     [![](https://img.shields.io/npm/v/@4399ywkf/plugin-link-vue.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/link-vue/package.json) |           [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-link-vue/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-link-vue/dist/index.js) | Link, suitable for `Vue3`       |
| [`am-editor-link-vue2`](https://github.com/zb201307/am-editor-vue2/tree/main/packages/link)           |           [![](https://img.shields.io/npm/v/am-editor-link-vue2.svg?maxAge=3600&label=&colorB=007ec6)](https://github.com/zb201307/am-editor-vue2/tree/main/packages/link/package.json) |                       [![](http://img.badgesize.io/https://unpkg.com/am-editor-link-vue2/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/am-editor-link-vue2/dist/index.js) | Link, suitable for `Vue2`       |
| [`@4399ywkf/plugin-line-height`](./plugins/line-height)                                               |                                               [![](https://img.shields.io/npm/v/@4399ywkf/plugin-line-height.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/line-height/package.json) |     [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-line-height/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-line-height/dist/index.js) | Line height                     |
| [`@4399ywkf/plugin-mark`](./plugins/mark)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-mark.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/mark/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-mark/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-mark/dist/index.js) | Mark                            |
| [`@4399ywkf/plugin-mention`](./plugins/mention)                                                       |                                                       [![](https://img.shields.io/npm/v/@4399ywkf/plugin-mention.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/mention/package.json) |             [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-mention/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-mention/dist/index.js) | Mention                         |
| [`@4399ywkf/plugin-orderedlist`](./plugins/orderedlist)                                               |                                               [![](https://img.shields.io/npm/v/@4399ywkf/plugin-orderedlist.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/orderedlist/package.json) |     [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-orderedlist/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-orderedlist/dist/index.js) | Ordered list                    |
| [`@4399ywkf/plugin-paintformat`](./plugins/paintformat)                                               |                                               [![](https://img.shields.io/npm/v/@4399ywkf/plugin-paintformat.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/paintformat/package.json) |     [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-paintformat/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-paintformat/dist/index.js) | Format painter                  |
| [`@4399ywkf/plugin-quote`](./plugins/quote)                                                           |                                                           [![](https://img.shields.io/npm/v/@4399ywkf/plugin-quote.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/quote/package.json) |                 [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-quote/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-quote/dist/index.js) | Blockquote                      |
| [`@4399ywkf/plugin-redo`](./plugins/redo)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-redo.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/redo/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-redo/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-redo/dist/index.js) | Redo                            |
| [`@4399ywkf/plugin-removeformat`](./plugins/removeformat)                                             |                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-removeformat.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/removeformat/package.json) |   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-removeformat/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-removeformat/dist/index.js) | Remove format                   |
| [`@4399ywkf/plugin-selectall`](./plugins/selectall)                                                   |                                                   [![](https://img.shields.io/npm/v/@4399ywkf/plugin-selectall.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/selectall/package.json) |         [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-selectall/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-selectall/dist/index.js) | Select all                      |
| [`@4399ywkf/plugin-status`](./plugins/status)                                                         |                                                         [![](https://img.shields.io/npm/v/@4399ywkf/plugin-status.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/status/package.json) |               [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-status/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-status/dist/index.js) | Status                          |
| [`@4399ywkf/plugin-strikethrough`](./plugins/strikethrough)                                           |                                           [![](https://img.shields.io/npm/v/@4399ywkf/plugin-strikethrough.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/strikethrough/package.json) | [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-strikethrough/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-strikethrough/dist/index.js) | Strikethrough                   |
| [`@4399ywkf/plugin-sub`](./plugins/sub)                                                               |                                                               [![](https://img.shields.io/npm/v/@4399ywkf/plugin-sub.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/sub/package.json) |                     [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-sub/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-sub/dist/index.js) | Sub                             |
| [`@4399ywkf/plugin-sup`](./plugins/sup)                                                               |                                                               [![](https://img.shields.io/npm/v/@4399ywkf/plugin-sup.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/sup/package.json) |                     [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-sup/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-sup/dist/index.js) | Sup                             |
| [`@4399ywkf/plugin-tasklist`](./plugins/tasklist)                                                     |                                                     [![](https://img.shields.io/npm/v/@4399ywkf/plugin-tasklist.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/tasklist/package.json) |           [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-tasklist/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-tasklist/dist/index.js) | Task list                       |
| [`@4399ywkf/plugin-underline`](./plugins/underline)                                                   |                                                   [![](https://img.shields.io/npm/v/@4399ywkf/plugin-underline.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/underline/package.json) |         [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-underline/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-underline/dist/index.js) | Underline                       |
| [`@4399ywkf/plugin-undo`](./plugins/undo)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-undo.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/undo/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-undo/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-undo/dist/index.js) | Undo                            |
| [`@4399ywkf/plugin-unorderedlist`](./plugins/unorderedlist)                                           |                                           [![](https://img.shields.io/npm/v/@4399ywkf/plugin-unorderedlist.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/unorderedlist/package.json) | [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-unorderedlist/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-unorderedlist/dist/index.js) | Unordered list                  |
| [`@4399ywkf/plugin-image`](./plugins/image)                                                           |                                                           [![](https://img.shields.io/npm/v/@4399ywkf/plugin-image.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/image/package.json) |                 [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-image/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-image/dist/index.js) | Image                           |
| [`@4399ywkf/plugin-table`](./plugins/table)                                                           |                                                           [![](https://img.shields.io/npm/v/@4399ywkf/plugin-table.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/table/package.json) |                 [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-table/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-table/dist/index.js) | Table                           |
| [`@4399ywkf/plugin-file`](./plugins/file)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-file.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/file/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-file/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-file/dist/index.js) | File                            |
| [`@4399ywkf/plugin-mark-range`](./plugins/mark-range)                                                 |                                                 [![](https://img.shields.io/npm/v/@4399ywkf/plugin-mark-range.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/mark-range/package.json) |       [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-mark-range/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-mark-range/dist/index.js) | Mark range                      |
| [`@4399ywkf/plugin-math`](./plugins/math)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-math.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/math/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-math/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-math/dist/index.js) | Mathematical formula            |
| [`@4399ywkf/plugin-video`](./plugins/video)                                                           |                                                           [![](https://img.shields.io/npm/v/@4399ywkf/plugin-video.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/video/package.json) |                 [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-video/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-video/dist/index.js) | Video                           |

## Getting Started

### Installation

The editor consists of the `engine`, `toolbar`, and `plugins`. The `engine` provides us with the core editing capability.

Use `npm` or `yarn` to install the engine package.

```bash
$ npm install @4399ywkf/engine
# or
$ yarn add @4399ywkf/engine
```

### Usage

We'll start by outputting a "Hello world!" message as usual.

```tsx
import React, { useEffect, useRef, useState } from 'react';
import Engine, { EngineInterface } from '@4399ywkf/engine';

const EngineDemo = () => {
	//Editor container
	const ref = useRef<HTMLDivElement | null>(null);
	//Engine instance
	const [engine, setEngine] = useState<EngineInterface>();
	//Editor content
	const [content, setContent] = useState<string>('<p>Hello world!</p>');

	useEffect(() => {
		if (!ref.current) return;
		//Instantiate the engine
		const engine = new Engine(ref.current);
		//Set the editor value
		engine.setValue(content);
		//Listen to the editor value change event
		engine.on('change', () => {
			const value = engine.getValue();
			setContent(value);
			console.log(`value:${value}`);
		});
		//Set the engine instance
		setEngine(engine);
	}, []);

	return <div ref={ref} />;
};
export default EngineDemo;
```

### Plugins

Import the `@4399ywkf/plugin-bold` bold plugin.

```tsx
import Bold from '@4399ywkf/plugin-bold';
```

Add the `Bold` plugin to the engine.

```tsx
//Instantiate the engine
const engine = new Engine(ref.current, {
	plugins: [Bold],
});
```

### Card

A card is a separately defined area in the editor, with its UI and logic for rendering custom content inside the card using `React`, `Vue`, or other front-end libraries before being mounted onto the editor.

Introduce `@4399ywkf/plugin-codeblock`, a code block plugin with a language drop-down that is rendered using React, which distinguishes it from Vue3 using `@4399ywkf/plugin-codeblock-vue`.

```tsx
import CodeBlock, { CodeBlockComponent } from '@4399ywkf/plugin-codeblock';
```

Add the `CodeBlock` plugin and the `CodeBlockComponent` card component to the engine.

```tsx
//Instantiate the engine
const engine = new Engine(ref.current, {
	plugins: [CodeBlock],
	cards: [CodeBlockComponent],
});
```

The `CodeBlock` plugin supports `markdown` by default. You can trigger it by typing the code block syntax at the beginning of a line in the editor, followed by a space and the language name, such as ```javascript.

## Node Constraints

To manage nodes more conveniently and reduce complexity, the editor abstracts node properties and functionality and defines four types of nodes: `mark`, `inline`, `block`, and `card`. They are composed of different attributes, styles, or `HTML` structures, and are uniformly constrained using a schema.

A simple `schema` looks like this:

```ts
{
  name:'p', // node name
  type:'block' // node type
}
```

In addition, properties, styles, etc. can also be described, for example:

```ts
{
  name:'span', // node name
  type:'mark', // node type
  attributes: {
    // The node has a style attribute
    style: {
      // Must contain a color style
      color: {
        required: true, // must contain
        value:'@color' // The value is a color value that conforms to the css specification. @color is the color validation defined in the editor. Here, methods and regular expressions can also be used to determine whether the required rules are met
      }
    },
    // Optional include a test attribute, its value can be arbitrary, but it is not required
    test:'*'
  }
}
```

The following types of nodes conform to the above rules:

```html
<span style="color:#fff"></span>
<span style="color:#fff" test="test123" test1="test1"></span>
<span style="color:#fff;background-color:#000;"></span>
<span style="color:#fff;background-color:#000;" test="test123"></span>
```

But except that color and test have been defined in `schema`, other attributes (background-color, test1) will be filtered out by the editor during processing.

The nodes in the editable area have four types of combined nodes of `mark`, `inline`, block`, and `card`through the`schema`rule. They are composed of different attributes, styles or`html` structures. Certain constraints are imposed on nesting.

### Toolbar

Import the `@4399ywkf/toolbar` toolbar. Due to the complex interaction, the toolbar is basically rendered using `React` + `Antd` UI components, while `Vue3` uses `@4399ywkf/toolbar-vue`

Except for UI interaction, most of the work of the toolbar is just to call the engine to execute the corresponding plugin commands after different button events are triggered. In the case of complicated requirements or the need to re-customize the UI, it is easier to modify after the fork.

```tsx
import Toolbar, { ToolbarPlugin, ToolbarComponent } from '@4399ywkf/toolbar';
```

Add the `ToolbarPlugin` plugin and `ToolbarComponent` card component to the engine, which allows us to use the shortcut key `/` in the editor to wake up the card toolbar

```tsx
//Instantiate the engine
const engine = new Engine(ref.current, {
	plugins: [ToolbarPlugin],
	cards: [ToolbarComponent],
});
```

Rendering toolbar, the toolbar has been configured with all plugins, here we only need to pass in the plugin name

```tsx
return (
    ...
    {
        engine && (
            <Toolbar
                engine={engine}
                items={[
                    ['collapse'],
                    [
                        'bold',
                    ],
                ]}
            />
        )
    }
    ...
)
```

For more complex toolbar configuration, please check the document [https://editor.aomao.com/config/toolbar](https://editor.aomao.com/config/toolbar)

### Collaborative Editing

This open-source library listens to changes in the `HTML` structure of the editing area (contenteditable root node), uses `MutationObserver` to reverse-engineer the data structure, and connects and interacts with [Yjs](https://github.com/yjs/yjs) through `WebSocket` to achieve multi-user collaborative editing.

#### Interactive mode

Each editor, as a [client](https://github.com/red-axe/am-editor/blob/master/examples/react/components/editor/index.tsx#L250), communicates and interacts with the [server](https://github.com/big-camel/am-editor/tree/master/yjs-server) through the `WebSocket` function in the `@4399ywkf/plugin-yjs-websocket` plugin.

-   `@4399ywkf/yjs` implements the conversion of editor and `Yjs` data
-   `@4399ywkf/plugin-yjs-websocket` provides the `WebSocket` client function of the editor and `Yjs`
-   `@4399ywkf/plugin-yjs-websocket/server` provides the `WebSocket` server of `Yjs`, written in Node.js, and supports data storage using `MongoDB` and `LevelDB`.

### Project icon

[Iconfont](https://at.alicdn.com/t/project/1456030/0cbd04d3-3ca1-4898-b345-e0a9150fcc80.html?spm=a313x.7781069.1998910419.35)

## Development

### React

Before using this open-source library, you need to install dependencies in the project root directory.

```base
yarn install

leran bootstrap
```

After installing the dependencies, you only need to execute the following command in the root directory to start the project:

```base
yarn start
```

The development directory structure of this open-source library is as follows:

-   `packages` contains the engine and toolbar-related code
-   `plugins` contains all plugins
-   `api` provides API access required by some plugins, and uses https://editor.aomao.com as the default API service
-   `yjs-server` contains collaborative server code, which can be started by `yarn dev`.

### Vue

[am-editor vue example](https://github.com/red-axe/am-editor-vue3-demo)

## Contribution

Thanks [pleasedmi](https://github.com/pleasedmi)、[Elena211314](https://github.com/Elena211314)、[zb201307](https://github.com/zb201307)、[cheon](https://github.com/number317) for donation

### Alipay

![alipay](https://cdn-object.aomao.com/contribution/alipay.png?x-oss-process=image/resize,w_200)

### WeChat Pay

![wechat](https://cdn-object.aomao.com/contribution/weichat.png?x-oss-process=image/resize,w_200)

### PayPal

[https://paypal.me/aomaocom](https://paypal.me/aomaocom)
