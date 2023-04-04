import { Node, RemoveNodeOperation } from '@4399ywkf/engine';
import * as Y from 'yjs';
import { getYTarget } from '../../transform';

export function removeNode(
	sharedRoot: Y.XmlElement,
	editorRoot: Node,
	op: RemoveNodeOperation,
): void {
	const { yParent: parent, yOffset } = getYTarget(
		sharedRoot,
		editorRoot,
		op.path,
	);
	parent.delete(yOffset, 1);
}
