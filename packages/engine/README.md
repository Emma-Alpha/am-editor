> 在这里，我们有一个新的富文本编辑器 [Editable](https://github.com/editablejs/editable)，它没有使用原生的可编辑属性[~~contenteditable~~](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable)，而是采用自定义的渲染器。这样做可以更好地控制编辑器的行为。

# am-editor

<p align="center">
	一个支持协同编辑的富文本编辑器，可以自由的使用React、Vue 等前端常用库扩展定义插件。
</p>

<p align="center">
  <a href="https://github.com/big-camel/am-editor/blob/master/README.md"><strong>English</strong></a> ·
  <a href="https://editor.aomao.com"><strong>Demo</strong></a> ·
  <a href="https://editor.aomao.com/docs"><strong>文档</strong></a> ·
  <a href="#plugins"><strong>插件</strong></a> ·
  <a href="https://qm.qq.com/cgi-bin/qm/qr?k=Gva5NtZ2USlHSLbFOeMroysk8Uwo7fCS&jump_from=webapi"><strong>QQ群 907664876</strong></a> ·
</p>

![aomao-preview](https://user-images.githubusercontent.com/55792257/125074830-62d79300-e0f0-11eb-8d0f-bb96a7775568.png)

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

`广告`：[科学上网，方便、快捷的上网冲浪](https://xiyou4you.us/r/?s=18517120) 稳定、可靠，访问 Github 或者其它外网资源很方便。

**`Vue2`** DEMO [https://github.com/zb201307/am-editor-vue2](https://github.com/zb201307/am-editor-vue2)

**`Vue3`** DEMO [https://github.com/red-axe/am-editor-vue3-demo](https://github.com/red-axe/am-editor-vue3-demo)

**`React`** DEMO [https://github.com/big-camel/am-editor/tree/master/examples/react](https://github.com/big-camel/am-editor/tree/master/examples/react)

**`Vue2 DEMO`** [https://github.com/big-camel/am-editor-demo-vue2](https://github.com/big-camel/am-editor-demo-vue2)

**`Vue2 Nuxt DEMO`** [https://github.com/big-camel/am-editor-nuxt](https://github.com/big-camel/am-editor-nuxt)

## 特性

-   🎁 开箱即用，提供几十种丰富的插件来满足大部分需求
-   🚀 高扩展性，除了 `mark` `inline` `block` 类型基础插件外，我们还提供 `card` 组件结合 `React` `Vue` 等前端库渲染插件 UI
-   🎨 丰富的多媒体支持，不仅支持图片和音视频，更支持插入嵌入式多媒体内容
-   📝 支持 `Markdown` 语法
-   🌍 支持国际化
-   💻 引擎纯 `JavaScript` 编写，不依赖任何前端库，插件可以使用 `React` `Vue` 等前端库渲染。复杂架构轻松应对
-   👥 内置协同编辑方案，轻量配置即可使用
-   📱 兼容大部分最新移动端浏览器

## 插件

| **包**                                                                                                |                                                                                                                                                                                **版本** |                                                                                                                                                                                 **大小** | **描述**               |
| :---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------- |
| [`@4399ywkf/toolbar`](./packages/toolbar)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/toolbar.svg?maxAge=3600&label=&colorB=007ec6)](./packages/toolbar/package.json) |                           [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/toolbar/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/toolbar/dist/index.js) | 工具栏, 适用于 `React` |
| [`@4399ywkf/toolbar-vue`](./packages/toolbar-vue)                                                     |                                                     [![](https://img.shields.io/npm/v/@4399ywkf/toolbar-vue.svg?maxAge=3600&label=&colorB=007ec6)](./packages/toolbar-vue/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/toolbar-vue/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/toolbar-vue/dist/index.js) | 工具栏, 适用于 `Vue3`  |
| [`am-editor-toolbar-vue2`](https://github.com/zb201307/am-editor-vue2/tree/main/packages/toolbar)     |     [![](https://img.shields.io/npm/v/am-editor-toolbar-vue2.svg?maxAge=3600&label=&colorB=007ec6)](https://github.com/zb201307/am-editor-vue2/blob/main/packages/toolbar/package.json) |                 [![](http://img.badgesize.io/https://unpkg.com/am-editor-toolbar-vue2/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/am-editor-toolbar-vue2/dist/index.js) | 工具栏, 适用于 `Vue2`  |
| [`@4399ywkf/plugin-alignment`](./plugins/alignment)                                                   |                                                   [![](https://img.shields.io/npm/v/@4399ywkf/plugin-alignment.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/alignment/package.json) |         [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-alignment/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-alignment/dist/index.js) | 对齐方式               |
| [`@4399ywkf/plugin-embed`](./plugins/embed)                                                           |                                                           [![](https://img.shields.io/npm/v/@4399ywkf/plugin-embed.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/embed/package.json) |                 [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-embed/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-embed/dist/index.js) | 嵌入网址               |
| [`@4399ywkf/plugin-backcolor`](./plugins/backcolor)                                                   |                                                   [![](https://img.shields.io/npm/v/@4399ywkf/plugin-backcolor.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/backcolor/package.json) |         [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-backcolor/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-backcolor/dist/index.js) | 背景色                 |
| [`@4399ywkf/plugin-bold`](./plugins/bold)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-bold.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/bold/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-bold/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-bold/dist/index.js) | 加粗                   |
| [`@4399ywkf/plugin-code`](./plugins/code)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-code.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/code/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-code/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-code/dist/index.js) | 行内代码               |
| [`@4399ywkf/plugin-codeblock`](./plugins/codeblock)                                                   |                                                   [![](https://img.shields.io/npm/v/@4399ywkf/plugin-codeblock.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/codeblock/package.json) |         [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-codeblock/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-codeblock/dist/index.js) | 代码块, 适用于 `React` |
| [`@4399ywkf/plugin-codeblock-vue`](./plugins/codeblock-vue)                                           |                                           [![](https://img.shields.io/npm/v/@4399ywkf/plugin-codeblock-vue.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/codeblock-vue/package.json) | [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-codeblock-vue/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-codeblock-vue/dist/index.js) | 代码块, 适用于 `Vue3`  |
| [`am-editor-codeblock-vue2`](https://github.com/zb201307/am-editor-vue2/tree/main/packages/codeblock) | [![](https://img.shields.io/npm/v/am-editor-codeblock-vue2.svg?maxAge=3600&label=&colorB=007ec6)](https://github.com/zb201307/am-editor-vue2/tree/main/packages/codeblock/package.json) |             [![](http://img.badgesize.io/https://unpkg.com/am-editor-codeblock-vue2/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/am-editor-codeblock-vue2/dist/index.js) | 代码块, 适用于 `Vue2`  |
| [`@4399ywkf/plugin-fontcolor`](./plugins/fontcolor)                                                   |                                                   [![](https://img.shields.io/npm/v/@4399ywkf/plugin-fontcolor.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/fontcolor/package.json) |         [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-fontcolor/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-fontcolor/dist/index.js) | 前景色                 |
| [`@4399ywkf/plugin-fontfamily`](./plugins/fontfamily)                                                 |                                                 [![](https://img.shields.io/npm/v/@4399ywkf/plugin-fontfamily.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/fontfamily/package.json) |       [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-fontfamily/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-fontfamily/dist/index.js) | 字体                   |
| [`@4399ywkf/plugin-fontsize`](./plugins/fontsize)                                                     |                                                     [![](https://img.shields.io/npm/v/@4399ywkf/plugin-fontsize.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/fontsize/package.json) |           [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-fontsize/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-fontsize/dist/index.js) | 字体大小               |
| [`@4399ywkf/plugin-heading`](./plugins/heading)                                                       |                                                       [![](https://img.shields.io/npm/v/@4399ywkf/plugin-heading.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/heading/package.json) |             [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-heading/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-heading/dist/index.js) | 标题                   |
| [`@4399ywkf/plugin-hr`](./plugins/hr)                                                                 |                                                                 [![](https://img.shields.io/npm/v/@4399ywkf/plugin-hr.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/hr/package.json) |                       [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-hr/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-hr/dist/index.js) | 分割线                 |
| [`@4399ywkf/plugin-indent`](./plugins/indent)                                                         |                                                         [![](https://img.shields.io/npm/v/@4399ywkf/plugin-indent.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/indent/package.json) |               [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-indent/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-indent/dist/index.js) | 缩进                   |
| [`@4399ywkf/plugin-italic`](./plugins/italic)                                                         |                                                         [![](https://img.shields.io/npm/v/@4399ywkf/plugin-italic.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/italic/package.json) |               [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-italic/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-italic/dist/index.js) | 斜体                   |
| [`@4399ywkf/plugin-link`](./plugins/link)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-link.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/link/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-link/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-link/dist/index.js) | 链接, 适用于 `React`   |
| [`@4399ywkf/plugin-link-vue`](./plugins/link-vue)                                                     |                                                     [![](https://img.shields.io/npm/v/@4399ywkf/plugin-link-vue.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/link-vue/package.json) |           [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-link-vue/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-link-vue/dist/index.js) | 链接, 适用于 `Vue3`    |
| [`am-editor-link-vue2`](https://github.com/zb201307/am-editor-vue2/tree/main/packages/link)           |           [![](https://img.shields.io/npm/v/am-editor-link-vue2.svg?maxAge=3600&label=&colorB=007ec6)](https://github.com/zb201307/am-editor-vue2/tree/main/packages/link/package.json) |                       [![](http://img.badgesize.io/https://unpkg.com/am-editor-link-vue2/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/am-editor-link-vue2/dist/index.js) | 链接, 适用于 `Vue2`    |
| [`@4399ywkf/plugin-line-height`](./plugins/line-height)                                               |                                               [![](https://img.shields.io/npm/v/@4399ywkf/plugin-line-height.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/line-height/package.json) |     [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-line-height/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-line-height/dist/index.js) | 行高                   |
| [`@4399ywkf/plugin-mark`](./plugins/mark)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-mark.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/mark/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-mark/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-mark/dist/index.js) | 标记                   |
| [`@4399ywkf/plugin-mention`](./plugins/mention)                                                       |                                                       [![](https://img.shields.io/npm/v/@4399ywkf/plugin-mention.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/mention/package.json) |             [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-mention/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-mention/dist/index.js) | 提及                   |
| [`@4399ywkf/plugin-orderedlist`](./plugins/orderedlist)                                               |                                               [![](https://img.shields.io/npm/v/@4399ywkf/plugin-orderedlist.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/orderedlist/package.json) |     [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-orderedlist/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-orderedlist/dist/index.js) | 有序列表               |
| [`@4399ywkf/plugin-paintformat`](./plugins/paintformat)                                               |                                               [![](https://img.shields.io/npm/v/@4399ywkf/plugin-paintformat.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/paintformat/package.json) |     [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-paintformat/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-paintformat/dist/index.js) | 格式刷                 |
| [`@4399ywkf/plugin-quote`](./plugins/quote)                                                           |                                                           [![](https://img.shields.io/npm/v/@4399ywkf/plugin-quote.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/quote/package.json) |                 [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-quote/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-quote/dist/index.js) | 引用块                 |
| [`@4399ywkf/plugin-redo`](./plugins/redo)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-redo.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/redo/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-redo/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-redo/dist/index.js) | 重做                   |
| [`@4399ywkf/plugin-removeformat`](./plugins/removeformat)                                             |                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-removeformat.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/removeformat/package.json) |   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-removeformat/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-removeformat/dist/index.js) | 移除样式               |
| [`@4399ywkf/plugin-selectall`](./plugins/selectall)                                                   |                                                   [![](https://img.shields.io/npm/v/@4399ywkf/plugin-selectall.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/selectall/package.json) |         [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-selectall/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-selectall/dist/index.js) | 全选                   |
| [`@4399ywkf/plugin-status`](./plugins/status)                                                         |                                                         [![](https://img.shields.io/npm/v/@4399ywkf/plugin-status.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/status/package.json) |               [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-status/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-status/dist/index.js) | 状态                   |
| [`@4399ywkf/plugin-strikethrough`](./plugins/strikethrough)                                           |                                           [![](https://img.shields.io/npm/v/@4399ywkf/plugin-strikethrough.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/strikethrough/package.json) | [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-strikethrough/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-strikethrough/dist/index.js) | 删除线                 |
| [`@4399ywkf/plugin-sub`](./plugins/sub)                                                               |                                                               [![](https://img.shields.io/npm/v/@4399ywkf/plugin-sub.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/sub/package.json) |                     [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-sub/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-sub/dist/index.js) | 下标                   |
| [`@4399ywkf/plugin-sup`](./plugins/sup)                                                               |                                                               [![](https://img.shields.io/npm/v/@4399ywkf/plugin-sup.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/sup/package.json) |                     [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-sup/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-sup/dist/index.js) | 上标                   |
| [`@4399ywkf/plugin-tasklist`](./plugins/tasklist)                                                     |                                                     [![](https://img.shields.io/npm/v/@4399ywkf/plugin-tasklist.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/tasklist/package.json) |           [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-tasklist/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-tasklist/dist/index.js) | 任务列表               |
| [`@4399ywkf/plugin-underline`](./plugins/underline)                                                   |                                                   [![](https://img.shields.io/npm/v/@4399ywkf/plugin-underline.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/underline/package.json) |         [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-underline/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-underline/dist/index.js) | 下划线                 |
| [`@4399ywkf/plugin-undo`](./plugins/undo)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-undo.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/undo/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-undo/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-undo/dist/index.js) | 撤销                   |
| [`@4399ywkf/plugin-unorderedlist`](./plugins/unorderedlist)                                           |                                           [![](https://img.shields.io/npm/v/@4399ywkf/plugin-unorderedlist.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/unorderedlist/package.json) | [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-unorderedlist/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-unorderedlist/dist/index.js) | 无序列表               |
| [`@4399ywkf/plugin-image`](./plugins/image)                                                           |                                                           [![](https://img.shields.io/npm/v/@4399ywkf/plugin-image.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/image/package.json) |                 [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-image/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-image/dist/index.js) | 图片                   |
| [`@4399ywkf/plugin-table`](./plugins/table)                                                           |                                                           [![](https://img.shields.io/npm/v/@4399ywkf/plugin-table.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/table/package.json) |                 [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-table/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-table/dist/index.js) | 表格                   |
| [`@4399ywkf/plugin-file`](./plugins/file)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-file.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/file/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-file/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-file/dist/index.js) | 文件                   |
| [`@4399ywkf/plugin-mark-range`](./plugins/mark-range)                                                 |                                                 [![](https://img.shields.io/npm/v/@4399ywkf/plugin-mark-range.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/mark-range/package.json) |       [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-mark-range/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-mark-range/dist/index.js) | 标记光标, 例如: 批注.  |
| [`@4399ywkf/plugin-math`](./plugins/math)                                                             |                                                             [![](https://img.shields.io/npm/v/@4399ywkf/plugin-math.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/math/package.json) |                   [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-math/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-math/dist/index.js) | 数学公式               |
| [`@4399ywkf/plugin-video`](./plugins/video)                                                           |                                                           [![](https://img.shields.io/npm/v/@4399ywkf/plugin-video.svg?maxAge=3600&label=&colorB=007ec6)](./plugins/video/package.json) |                 [![](http://img.badgesize.io/https://unpkg.com/@4399ywkf/plugin-video/dist/index.js?compression=gzip&label=%20)](https://unpkg.com/@4399ywkf/plugin-video/dist/index.js) | 视频                   |

## 快速上手

### 安装

编辑器由 `引擎`、`工具栏`、`插件` 组成。`引擎` 为我们提供了核心的编辑能力。

使用 `npm` 或者 `yarn` 安装引擎包

```bash
$ npm install @4399ywkf/engine
# or
$ yarn add @4399ywkf/engine
```

### 使用

我们按照惯例先输出一个`Hello world!`

```tsx
import React, { useEffect, useRef, useState } from 'react';
import Engine, { EngineInterface } from '@4399ywkf/engine';

const EngineDemo = () => {
	//编辑器容器
	const ref = useRef<HTMLDivElement | null>(null);
	//引擎实例
	const [engine, setEngine] = useState<EngineInterface>();
	//编辑器内容
	const [content, setContent] = useState<string>('<p>Hello world!</p>');

	useEffect(() => {
		if (!ref.current) return;
		//实例化引擎
		const engine = new Engine(ref.current);
		//设置编辑器值
		engine.setValue(content);
		//监听编辑器值改变事件
		engine.on('change', () => {
			const value = engine.getValue();
			setContent(value);
			console.log(`value:${value}`);
		});
		//设置引擎实例
		setEngine(engine);
	}, []);

	return <div ref={ref} />;
};
export default EngineDemo;
```

### 插件

引入 `@4399ywkf/plugin-bold` 加粗插件

```tsx
import Bold from '@4399ywkf/plugin-bold';
```

把 `Bold` 插件加入引擎

```tsx
//实例化引擎
const engine = new Engine(ref.current, {
	plugins: [Bold],
});
```

### 卡片

卡片是编辑器中的一个独立区域，其 UI 和逻辑在卡片内部可以使用 `React`、`Vue` 或其他前端库自定义渲染内容，最后再挂载到编辑器上。

我们引入了 `@4399ywkf/plugin-codeblock` 代码块插件，该插件的语言下拉框使用 `React` 渲染，因此有所区别。Vue3 则使用 `@4399ywkf/plugin-codeblock-vue`。

```tsx
import CodeBlock, { CodeBlockComponent } from '@4399ywkf/plugin-codeblock';
```

把 `CodeBlock` 插件和 `CodeBlockComponent` 卡片组件加入引擎

```tsx
//实例化引擎
const engine = new Engine(ref.current, {
	plugins: [CodeBlock],
	cards: [CodeBlockComponent],
});
```

`CodeBlock` 插件默认支持 `markdown`，在编辑器一行开头位置输入代码块语法` ```javascript ` 空格后即可触发。

## 节点约束

为了更方便的管理节点，降低复杂性。编辑器抽象化了节点属性和功能，制定了 `mark` `inline` `block` `card` 4 种类型节点，他们由不同的属性、样式或 `html` 结构组成，并统一使用 `schema` 对它们进行约束。

一个简单的 `schema` 看起来像是这样：

```ts
{
  name: 'p', // 节点名称
  type: 'block' // 节点类型
}
```

除此之外，还可以描述属性、样式等，比如：

```ts
{
  name: 'span', // 节点名称
  type: 'mark', // 节点类型
  attributes: {
    // 节点有一个 style 属性
    style: {
      // 必须包含一个color的样式
      color: {
        required: true, // 必须包含
        value: '@color' // 值是一个符合css规范的颜色值，@color 是编辑器内部定义的颜色效验，此处也可以使用方法、正则表达式去判断是否符合需要的规则
      }
    },
    // 可选的包含一个 test 属性，他的值可以是任意的，但不是必须的
    test: '*'
  }
}
```

下面这几种节点都符合上面的规则：

```html
<span style="color:#fff"></span>
<span style="color:#fff" test="test123" test1="test1"></span>
<span style="color:#fff;background-color:#000;"></span>
<span style="color:#fff;background-color:#000;" test="test123"></span>
```

但是除了在 color 和 test 已经在 `schema` 中定义外，其它的属性(background-color、test1)在处理时都会被编辑器过滤掉。

可编辑器区域内的节点通过 `schema` 规则，制定了 `mark` `inline` `block` `card` 4 种组合节点，他们由不同的属性、样式或 `html` 结构组成，并对它们的嵌套进行了一定的约束。

### 工具栏

引入 `@4399ywkf/toolbar` 工具栏，工具栏由于交互复杂，基本上都是使用 `React` + `Antd` UI 组件渲染，`Vue3` 使用 `@4399ywkf/toolbar-vue`

工具栏除了 UI 交互外，大部分工作只是对不同的按钮事件触发后调用了引擎执行对应的插件命令，在需求比较复杂或需要重新定制 UI 的情况下，Fork 后修改起来也比较容易。

```tsx
import Toolbar, { ToolbarPlugin, ToolbarComponent } from '@4399ywkf/toolbar';
```

把 `ToolbarPlugin` 插件和 `ToolbarComponent` 卡片组件加入引擎，它可以让我们在编辑器中可以使用快捷键 `/` 唤醒出卡片工具栏

```tsx
//实例化引擎
const engine = new Engine(ref.current, {
	plugins: [ToolbarPlugin],
	cards: [ToolbarComponent],
});
```

渲染工具栏，工具栏已配置好所有插件，这里我们只需要传入插件名称即可

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

更复杂的工具栏配置请查看文档 [https://editor.aomao.com/zh-CN/config/toolbar](https://editor.aomao.com/zh-CN/config/toolbar)

### 协同编辑

该开源库通过监听编辑区域(contenteditable 根节点)内的 html 结构的变化，使用 `MutationObserver` 反推数据结构，并通过 `WebSocket` 与 [Yjs](https://github.com/yjs/yjs) 连接交互，实现多用户协同编辑的功能。

#### 交互模式

每位编辑者作为 [客户端](https://github.com/red-axe/am-editor/blob/master/examples/react/components/editor/index.tsx#L250) 通过 `@4399ywkf/plugin-yjs-websocket` 插件中的 `Websocket` 与 [服务端](https://github.com/big-camel/am-editor/tree/master/yjs-server) 进行通信交互。

-   `@4399ywkf/yjs` 实现编辑器与 `Yjs` 数据的转换
-   `@4399ywkf/plugin-yjs-websocket` 提供编辑器与 `Yjs` 的 `WebSocket` 客户端功能
-   `@4399ywkf/plugin-yjs-websocket/server` 提供 `Yjs` 的 `WebSocket` 服务端，使用 Node.js 编写，并支持使用 `MongoDB` 和 `LevelDB` 存储数据。

### 项目图标

[Iconfont](https://at.alicdn.com/t/project/1456030/0cbd04d3-3ca1-4898-b345-e0a9150fcc80.html?spm=a313x.7781069.1998910419.35)

## 开发

### React

在使用该开源库之前，需要先在项目根目录中安装依赖。

```base
yarn install

leran bootstrap
```

依赖安装好后，只需要在根目录执行以下命令即可启动项目：

```base
yarn start
```

该开源库的开发目录结构如下：

-   `packages` 存放引擎和工具栏相关代码
-   `plugins` 存放所有的插件
-   `api` 提供一些插件所需要的 API 访问，默认使用 https://editor.aomao.com 作为 API 服务
-   `yjs-server` 存放协同服务端代码，可通过 `yarn dev` 启动服务。

### Vue

[am-editor vue example](https://github.com/red-axe/am-editor-vue3-demo)

## 贡献

感谢 [pleasedmi](https://github.com/pleasedmi)、[Elena211314](https://github.com/Elena211314)、[zb201307](https://github.com/zb201307)、[cheon](https://github.com/number317) 的捐赠

如果您愿意，可以在这里留下你的名字。

### 支付宝

![alipay](https://cdn-object.aomao.com/contribution/alipay.png?x-oss-process=image/resize,w_200)

### 微信支付

![wechat](https://cdn-object.aomao.com/contribution/weichat.png?x-oss-process=image/resize,w_200)

### PayPal

[https://paypal.me/aomaocom](https://paypal.me/aomaocom)
