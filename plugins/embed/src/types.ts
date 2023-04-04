import {
	CardToolbarItemOptions,
	CardValue,
	EditorInterface,
	PluginOptions,
	ToolbarItemOptions,
} from '@4399ywkf/engine';

export interface EmbedValue extends CardValue {
	url?: string;
	height?: number;
	collapsed?: boolean;
	ico?: string;
	title?: string;
	isResize?: boolean;
}

export type EmbedRenderBeforeEvent = (url: string) => EmbedValue;

export interface EmbedOptions extends PluginOptions {
	renderBefore?: EmbedRenderBeforeEvent;
	cardToolbars?: (
		items: (ToolbarItemOptions | CardToolbarItemOptions)[],
		editor: EditorInterface,
	) => (ToolbarItemOptions | CardToolbarItemOptions)[];
}
