# @4399ywkf/plugin-hr

Split line plugin

## Installation

```bash
$ yarn add @4399ywkf/plugin-hr
```

Add to engine

```ts
import Engine, {EngineInterface} from'@4399ywkf/engine';
import Hr, {HrComponent} from'@4399ywkf/plugin-hr';

new Engine(...,{ plugins:[Hr], cards:[HrComponent]})
```

## Optional

### Hotkey

Default shortcut key `mod+shift+e`

```ts
hotkey?:string;//default mod+shift+e

//Use configuration
new Engine(...,{
     config:{
         "hr":{
             //Modify shortcut keys
             hotkey: "shortcut key"
         }
     }
  })
```

## Command

```ts
//Can carry two parameters, language type, default text, all are optional
engine.command.execute('hr');
```
