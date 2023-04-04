# @4399ywkf/plugin-paintformat

格式刷插件

支持所有 mark 标签插件

block 支持以下插件：`@4399ywkf/plugin-heading` `@4399ywkf/plugin-orderlist` `@4399ywkf/plugin-unorderedlist`

## 安装

```bash
$ yarn add @4399ywkf/plugin-paintformat
```

添加到引擎

```ts
import Engine, { EngineInterface } from '@4399ywkf/engine';
import Paintformat from '@4399ywkf/plugin-paintformat';

new Engine(...,{ plugins:[Paintformat] })
```

## 可选项

### 移除

移除样式命令，或提供方法。默认为 removeformat ，需要添加 `@4399ywkf/plugin-removeformat` 插件

```ts
removeCommand?:string | ((range:RangeInterface) => void);
```

### 绘制

如何绘制 block 节点，返回 false，不执行内置绘制，包括不复制 block 节点的 css 样式

```ts
/**
 * @param currentBlock 当前需要绘制的节点
 * @param block 需要被复制格式的节点
 * */
paintBlock?:(currentBlock:NodeInterface,block:NodeInterface) => boolean | void
```

## 命令

```ts
//使用 command 执行插件
engine.command.execute('paintformat');
//使用 command 执行查询当前状态，返回 boolean
engine.command.queryState('paintformat');
```
