# @4399ywkf/plugin-selectall

Select all plugins

## Installation

```bash
$ yarn add @4399ywkf/plugin-selectall
```

Add to engine

```ts
import Engine, {EngineInterface} from'@4399ywkf/engine';
import Selectall from'@4399ywkf/plugin-selectall';

new Engine(...,{ plugins:[Selectall] })
```

## hotkey

The shortcut key is `mod+a`, which cannot be modified

## Command

```ts
//Use command to execute the plugin
engine.command.execute('selectall');
```
