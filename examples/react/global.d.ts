import type { EngineInterfacem, Parser } from '@4399ywkf/engine';

declare global {
	interface Window {
		engine?: EngineInterface;
		Parser?: typeof Parser;
	}
}
