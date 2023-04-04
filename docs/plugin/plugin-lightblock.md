# @4399ywkf/plugin-lightblock

Highlight block, prompt box plugin (React)

## Install

```bash
yarn add @4399ywkf/plugin-lightblock
```

add to engine

```ts
import Engine, { EngineInterface } from '@4399ywkf/engine';
import lightblock from '@4399ywkf/plugin-lightblock';

new Engine(...,{ plugins:[lightblock] })
```

## Order

```ts
// use command to execute the plugin
engine.command.execute('lightblock');
```

## Markdown

```ts
// use markdown syntax
::: tip
```
