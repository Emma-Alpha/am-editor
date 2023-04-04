import { CardValue } from '@4399ywkf/engine';

export type IType = 'abandon' | 'must' | 'add' | 'delete' | '';
export interface TagValue extends CardValue {
	tagType: IType;
	tagValue: string;
	isCustom?: boolean;
}
