import type { Question } from './Question';

export interface Folder {
	readonly label: string;
	readonly description: string[];
	readonly id: string;
	
	readonly hidden: boolean;
	readonly gathered: boolean;
	
	readonly tags: string[];
	readonly prerequisites: string[];
	
	readonly contents: Folder[] | Question[];
	
	readonly incorrectAnswers: string[];
	readonly incorrectAnswersPassThru: boolean;
	readonly substitutions: Record<string, string>;
	
	readonly isSharingGroup: boolean;
	
	// Fragments and fragment augmentation
	readonly fragment: string;
	readonly suppressTags: string[];
	readonly disableTags: string[];
	readonly enableTags: string[];
	
	// Passthru params
	readonly caseSensitive: boolean;
	readonly modesOfPresentation: string[];
	readonly maxChoices: number;
	readonly maxCorrectChoices: number;
	readonly maxIncorrectChoices: number;
	readonly typoForgivenessLevel: string;
	readonly correctAnswerSource: string;
	readonly incorrectAnswerSource: string[];
	readonly importance: number;
	readonly shareAnswers: boolean;
	readonly firstTimeHint: boolean;
}