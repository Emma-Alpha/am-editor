# @4399ywkf/plugin-italic

斜体样式插件

## 安装

```bash
$ yarn add @4399ywkf/plugin-italic
```

添加到引擎

```ts
import Engine, { EngineInterface } from '@4399ywkf/engine';
import Italic from '@4399ywkf/plugin-italic';

new Engine(...,{ plugins:[Italic] })
```

## 可选项

### 快捷键

默认快捷键为 `mod+i`，以数组形式传入多个快捷键

```ts
//快捷键，
hotkey?: string | Array<string>;

//使用配置
new Engine(...,{
    config:{
        "italic":{
            //修改快捷键
            hotkey:"快捷键"
        }
    }
 })
```

## 命令

```ts
engine.command.execute('italic');
//使用 command 执行查询当前状态，返回 boolean | undefined
engine.command.queryState('italic');
```
