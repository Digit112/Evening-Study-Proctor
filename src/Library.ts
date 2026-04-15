import type { Folder } from './Folder.ts';

export interface Library {
	readonly title: string;
	readonly description: string[];
	readonly tags: string[];
	readonly author: string;
	readonly version: number;
	readonly id: string;
	
	readonly root: Folder;
	
	readonly hideTags: string;
	readonly renameTags: Record<string, string>;
}