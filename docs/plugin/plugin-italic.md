# @4399ywkf/plugin-italic

Italic style plugin

## Installation

```bash
$ yarn add @4399ywkf/plugin-italic
```

Add to engine

```ts
import Engine, {EngineInterface} from'@4399ywkf/engine';
import Italic from'@4399ywkf/plugin-italic';

new Engine(...,{ plugins:[Italic] })
```

## Optional

### Hotkey

The default shortcut key is `mod+i`, and multiple shortcut keys are passed in as an array

```ts
//hotkey,
hotkey?: string | Array<string>;

//Use configuration
new Engine(...,{
    config:{
        "italic":{
            //Modify shortcut keys
            hotkey: "shortcut key"
        }
    }
 })
```

## Command

```ts
engine.command.execute('italic');
//Use command to execute query current status, return boolean | undefined
engine.command.queryState('italic');
```
