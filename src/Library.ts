import type { Folder } from './Folder.ts';

export class Library {
	readonly title: string;
	readonly description: ReadonlyArray<string>;
	readonly tags: ReadonlyArray<string>;
	readonly author: string;
	readonly version: number;
	readonly id: string;
	
	readonly root: Folder;
	
	readonly hideTags: string;
	readonly renameTags: Readonly<Record<string, string>>;
	
	constructor(libraryObject: any) {
		this.title = libraryObject.title;
		this.description = libraryObject.description;
		this.tags = libraryObject.tags;
		this.author = libraryObject.author;
		this.version = libraryObject.version;
		this.id = libraryObject.id;
		
		this.root = libraryObject.root;
		
		this.hideTags = libraryObject.hideTags;
		this.renameTags = libraryObject.renameTags;
	}
}

