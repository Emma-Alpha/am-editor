# @4399ywkf/plugin-underline

Underline style plugin

## Installation

```bash
$ yarn add @4399ywkf/plugin-underline
```

Add to engine

```ts
import Engine, {EngineInterface} from'@4399ywkf/engine';
import Underline from'@4399ywkf/plugin-underline';

new Engine(...,{ plugins:[Underline] })
```

## Optional

### Hotkey

The default shortcut key is `mod+u`, and multiple shortcut keys are passed in as an array

```ts
//hotkey,
hotkey?: string | Array<string>;

//Use configuration
new Engine(...,{
     config:{
         "underline":{
             //Modify shortcut keys
             hotkey: "shortcut key"
         }
     }
  })
```

## Command

```ts
engine.command.execute('underline');
//Use command to execute query current status, return boolean | undefined
engine.command.queryState('underline');
```
