# @4399ywkf/plugin-tasklist

Task list plugin

## Installation

```bash
$ yarn add @4399ywkf/plugin-tasklist
```

Add to engine

```ts
import Engine, {EngineInterface} from'@4399ywkf/engine';
import Tasklist, {CheckboxComponent} from'@4399ywkf/plugin-tasklist';

new Engine(...,{ plugins:[Tasklist], cards:[CheckboxComponent] })
```

## Optional

### Hotkey

Default shortcut key `mod+shift+9`

```ts
//hotkey
hotkey?: string | Array<string>;//default mod+shift+9
//Use configuration
new Engine(...,{
    config:{
        "tasklist":{
            //Modify shortcut keys
            hotkey: "shortcut key"
        }
    }
 })
```

## Command

You can pass in {checked:true} to indicate checked, optional parameters

```ts
//Use command to execute the plugin and pass in the required parameters
engine.command.execute('tasklist', { checked: boolean });
//Use command to execute query current status, return false or current list plugin name tasklist tasklist unorderedlist
engine.command.queryState('tasklist');
```
