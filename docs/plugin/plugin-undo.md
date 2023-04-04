# @4399ywkf/plugin-undo

Undo history plugin

## Installation

```bash
$ yarn add @4399ywkf/plugin-undo
```

Add to engine

```ts
import Engine, {EngineInterface} from'@4399ywkf/engine';
import Undo from'@4399ywkf/plugin-undo';

new Engine(...,{ plugins:[Undo] })
```

## Optional

### Hotkey

The default shortcut key is `mod+z` `shift+mod+z`

```ts
//hotkey
hotkey?: string | Array<string>;
//Use configuration
new Engine(...,{
     config:{
         "undo":{
             //Modify shortcut keys
             hotkey: "shortcut key"
         }
     }
  })
```

## Command

```ts
//Use command to execute the plugin and pass in the required parameters
engine.command.execute('undo');
//Use command to execute query current status, return boolean | undefined
engine.command.queryState('undo');
```
