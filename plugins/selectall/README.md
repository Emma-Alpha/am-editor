# @4399ywkf/plugin-selectall

全选插件

## 安装

```bash
$ yarn add @4399ywkf/plugin-selectall
```

添加到引擎

```ts
import Engine, { EngineInterface } from '@4399ywkf/engine';
import Selectall from '@4399ywkf/plugin-selectall';

new Engine(...,{ plugins:[Selectall] })
```

## 快捷键

快捷键为 `mod+a`，不可修改

## 命令

```ts
//使用 command 执行插件
engine.command.execute('selectall');
```
