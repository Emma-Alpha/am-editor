import {
	CardToolbarItemOptions,
	EditorInterface,
	PluginOptions,
	ToolbarItemOptions,
} from '@4399ywkf/engine';

export interface HrOptions extends PluginOptions {
	hotkey?: string | Array<string>;
	markdown?: boolean;
	cardToolbars?: (
		items: (ToolbarItemOptions | CardToolbarItemOptions)[],
		editor: EditorInterface,
	) => (ToolbarItemOptions | CardToolbarItemOptions)[];
}
