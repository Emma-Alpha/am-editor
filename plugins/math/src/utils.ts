import { EditorInterface } from '@4399ywkf/engine';

export const getLocales = <T extends string | {} = string>(
	editor: EditorInterface,
) => {
	return editor.language.get<{ [key: string]: T }>('math');
};
