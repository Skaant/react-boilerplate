import { Id } from "./Id";

export type Index<T extends Id> = { [id: string]: T };
