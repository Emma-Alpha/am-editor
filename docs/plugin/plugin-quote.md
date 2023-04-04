# @4399ywkf/plugin-quote

Quote style plugin

## Installation

```bash
$ yarn add @4399ywkf/plugin-quote
```

Add to engine

```ts
import Engine, {EngineInterface} from'@4399ywkf/engine';
import Quote from'@4399ywkf/plugin-quote';

new Engine(...,{ plugins:[Quote] })
```

## Optional

### Hotkey

The default shortcut key is `mod+shift+u`

```ts
//hotkey
hotkey?: string | Array<string>;
//Use configuration
new Engine(...,{
    config:{
        "quote":{
            //Modify shortcut keys
            hotkey: "shortcut key"
        }
    }
 })
```

## Command

```ts
//Use command to execute the plugin and pass in the required parameters
engine.command.execute('quote');
//Use command to execute query current status, return boolean | undefined
engine.command.queryState('quote');
```
