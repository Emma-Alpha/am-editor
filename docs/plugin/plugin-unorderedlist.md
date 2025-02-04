# @4399ywkf/plugin-unorderedlist

Unordered list plugin

## Installation

```bash
$ yarn add @4399ywkf/plugin-unorderedlist
```

Add to engine

```ts
import Engine, {EngineInterface} from'@4399ywkf/engine';
import Unorderedlist from'@4399ywkf/plugin-unorderedlist';

new Engine(...,{ plugins:[Unorderedlist] })
```

## Optional

### Hotkey

Default shortcut key `mod+shift+8`

```ts
//hotkey
hotkey?: string | Array<string>;//default mod+shift+8
//Use configuration
new Engine(...,{
    config:{
        "unorderedlist":{
            //Modify shortcut keys
            hotkey: "shortcut key"
        }
    }
 })
```

## Command

```ts
//Use command to execute the plugin and pass in the required parameters
engine.command.execute('unorderedlist');
//Use command to execute query current status, return false or current list plugin name unorderedlist tasklist unorderedlist
engine.command.queryState('unorderedlist');
```
