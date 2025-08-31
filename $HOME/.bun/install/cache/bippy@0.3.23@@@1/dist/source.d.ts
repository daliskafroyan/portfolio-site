import { Fiber } from "./types-jg1j8UIH.js";

//#region src/source.d.ts
interface FiberSource {
  fileName: string;
  lineNumber: number;
  columnNumber: number;
}
declare const getCurrentDispatcher: () => React.RefObject<unknown> | null;
declare const setCurrentDispatcher: (value: React.RefObject<unknown> | null) => void;
declare const getFiberSource: (fiber: Fiber) => Promise<FiberSource | null>;

//#endregion
export { FiberSource, getCurrentDispatcher, getFiberSource, setCurrentDispatcher };