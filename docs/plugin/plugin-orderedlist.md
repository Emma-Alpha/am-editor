# @4399ywkf/plugin-orderedlist

Ordered list plugin

## Installation

```bash
$ yarn add @4399ywkf/plugin-orderedlist
```

Add to engine

```ts
import Engine, {EngineInterface} from'@4399ywkf/engine';
import Orderedlist from'@4399ywkf/plugin-orderedlist';

new Engine(...,{ plugins:[Orderedlist] })
```

## Optional

### Hotkey

Default shortcut key `mod+shift+7`

```ts
//hotkey
hotkey?: string | Array<string>;//default mod+shift+7
//Use configuration
new Engine(...,{
    config:{
        "orderedlist":{
            //Modify shortcut keys
            hotkey: "shortcut key"
        }
    }
 })
```

## Command

There is a parameter `start:number` which defaults to 1, which indicates the starting number of the list

```ts
//Use command to execute the plugin and pass in the required parameters
engine.command.execute('orderedlist', 1);
//Use command to execute query current status, return false or current list plugin name orderedlist tasklist unorderedlist
engine.command.queryState('orderedlist');
```
