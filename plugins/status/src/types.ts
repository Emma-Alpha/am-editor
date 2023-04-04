import { PluginOptions } from '@4399ywkf/engine';

export interface StatusOptions extends PluginOptions {
	hotkey?: string | Array<string>;
	colors?: {
		background: string;
		color: string;
	}[];
}
