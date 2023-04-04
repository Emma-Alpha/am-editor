import * as Y from 'yjs';
import { EngineInterface } from '@4399ywkf/engine';
import { Awareness } from '@4399ywkf/plugin-yjs-protocols/awareness';
import {
	WithCursorsOptions,
	withYCursors,
	YCursorEditor,
	CursorStateChangeEvent,
} from './cursors';
import { withYjs as withYjsPlguin, WithYjsOptions, YjsEditor } from './yjs';
import { CursorData } from './types';

export type WithYjsPluginOptions = WithYjsOptions & WithCursorsOptions;

export const withYjs = (
	editor: EngineInterface,
	sharedRoot: Y.XmlElement,
	awareness: Awareness,
	options: WithYjsPluginOptions,
) => {
	const e = withYjsPlguin(editor, sharedRoot, options);
	return withYCursors(e, awareness, options);
};

export { YjsEditor, YCursorEditor };
export type { CursorStateChangeEvent, CursorData };
