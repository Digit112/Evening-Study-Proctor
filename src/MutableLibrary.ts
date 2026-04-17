import type { Library } from './Library'
import type { Folder } from './Folder'

export class MutableLibrary implements Library {
	title: string;
	description: string[];
	tags: string[];
	author: string;
	version: number;
	id: string;
	
	root: MutableFolder;
	
	hideTags: string;
	renameTags: Record<string, string>;
}