import { isPlainObject } from '@4399ywkf/engine';
// Slates deep equality function: https://github.com/ianstormtaylor/slate/blob/68aff89e892fe15a16314398ff052ade6068900b/packages/slate/src/utils/deep-equal.ts#L13
// We have to match slates deepEquals behavior to merge insert deltas in the same way slate does.
export function deepEquals(node: any, another: any): boolean {
	// eslint-disable-next-line guard-for-in
	for (const key in node) {
		const a = node[key];
		const b = another[key];

		if (isPlainObject(a) && isPlainObject(b)) {
			if (!deepEquals(a, b)) {
				return false;
			}
		} else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			for (let i = 0; i < a.length; i++) {
				if (a[i] !== b[i]) {
					return false;
				}
			}
		} else if (a !== b) {
			return false;
		}
	}

	for (const key in another) {
		if (node[key] === undefined && another[key] !== undefined) {
			return false;
		}
	}

	return true;
}

export function pick<
	TObj extends Record<string, any>,
	TKeys extends keyof TObj,
>(obj: TObj, ...keys: TKeys[]): Pick<TObj, TKeys> {
	return Object.fromEntries(
		Object.entries(obj).filter(([key]) => keys.includes(key as TKeys)),
	) as Pick<TObj, TKeys>;
}

export function omit<
	TObj extends Record<string, any>,
	TKeys extends keyof TObj,
>(obj: TObj, ...keys: TKeys[]): Omit<TObj, TKeys> {
	return Object.fromEntries(
		Object.entries(obj).filter(([key]) => !keys.includes(key as TKeys)),
	) as Omit<TObj, TKeys>;
}

export function omitNullEntries<TObj extends Record<string, any>>(
	obj: TObj,
): {
	[K in keyof TObj]: TObj[K] extends null ? never : K;
} {
	return Object.fromEntries(
		Object.entries(obj).filter(([, value]) => value !== null),
	) as {
		[K in keyof TObj]: TObj[K] extends null ? never : K;
	};
}
