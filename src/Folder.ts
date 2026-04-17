import type { Question } from './Question';

export class Folder {
	readonly label: string;
	readonly description: ReadonlyArray<string>;
	readonly id: string;
	
	readonly hidden: boolean;
	readonly gathered: boolean;
	
	readonly tags: ReadonlyArray<string>;
	readonly prerequisites: ReadonlyArray<string>;
	
	readonly contents: Readonly<Folder[]> | Readonly<Question[]>;
	
	readonly incorrectAnswers: ReadonlyArray<string>;
	readonly incorrectAnswersPassThru: boolean;
	readonly substitutions: Readonly<Record<string, string>>;
	
	readonly isSharingGroup: boolean;
	
	// Fragments and fragment augmentation
	readonly fragment: string;
	readonly suppressTags: ReadonlyArray<string>;
	readonly disableTags: ReadonlyArray<string>;
	readonly enableTags: ReadonlyArray<string>;
	
	// Passthru params
	readonly caseSensitive: boolean;
	readonly modesOfPresentation: ReadonlyArray<string>;
	readonly maxChoices: number;
	readonly maxCorrectChoices: number;
	readonly maxIncorrectChoices: number;
	readonly typoForgivenessLevel: string;
	readonly correctAnswerSource: string;
	readonly incorrectAnswerSource: ReadonlyArray<string>;
	readonly importance: number;
	readonly shareAnswers: boolean;
	readonly firstTimeHint: boolean;
	
	constructor(folderObject: any) {
		this.label = folderObject.label;
		this.description = folderObject.description;
		this.id = folderObject.id;
		
		this.hidden = folderObject.hidden;
		this.gathered = folderObject.gathered;
		
		this.tags = folderObject.tags;
		this.prerequisites = folderObject.prerequisites;
		
		this.contents = folderObject.contents;
		
		this.incorrectAnswers = folderObject.incorrectAnswers;
		this.incorrectAnswersPassThru = folderObject.incorrectAnswersPassThru;
		this.substitutions = folderObject.substitutions;
		
		this.isSharingGroup = folderObject.isSharingGroup;
		
		// Fragments and fragment augmentation
		this.fragment = folderObject.fragment;
		this.suppressTags = folderObject.suppressTags;
		this.disableTags = folderObject.disableTags;
		this.enableTags = folderObject.enableTags;
		
		// Passthru params
		this.caseSensitive = folderObject.caseSensitive;
		this.modesOfPresentation = folderObject.modesOfPresentation;
		this.maxChoices = folderObject.maxChoices;
		this.maxCorrectChoices = folderObject.maxCorrectChoices;
		this.maxIncorrectChoices = folderObject.maxIncorrectChoices;
		this.typoForgivenessLevel = folderObject.typoForgivenessLevel;
		this.correctAnswerSource = folderObject.correctAnswerSource;
		this.incorrectAnswerSource = folderObject.incorrectAnswerSource;
		this.importance = folderObject.importance;
		this.shareAnswers = folderObject.shareAnswers;
		this.firstTimeHint = folderObject.firstTimeHint;
	}
}