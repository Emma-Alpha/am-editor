# @4399ywkf/plugin-lightblock

高亮块、提示框插件(React)

## 安装

```bash
$ yarn add @4399ywkf/plugin-lightblock
```

添加到引擎

```ts
import Engine, { EngineInterface } from '@4399ywkf/engine';
import lightblock from '@4399ywkf/plugin-lightblock';

new Engine(...,{ plugins:[lightblock] })
```

## 命令

```ts
//使用 command 执行插件
engine.command.execute('lightblock');
```
