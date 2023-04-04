# @4399ywkf/plugin-sub

Subscript style plugin

## Installation

```bash
$ yarn add @4399ywkf/plugin-sub
```

Add to engine

```ts
import Engine, {EngineInterface} from'@4399ywkf/engine';
import Sub from'@4399ywkf/plugin-sub';

new Engine(...,{ plugins:[Sub] })
```

## Optional

### Hotkey

The default shortcut key is `mod+,`, multiple shortcut keys are passed in as an array

```ts
//hotkey,
hotkey?: string | Array<string>;

//Use configuration
new Engine(...,{
     config:{
         "sub":{
             //Modify shortcut keys
             hotkey: "shortcut key"
         }
     }
  })
```

## Command

```ts
engine.command.execute('sub');
//Use command to execute query current status, return boolean | undefined
engine.command.queryState('sub');
```
