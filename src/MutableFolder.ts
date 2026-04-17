import type { Question } from './Question';

export interface MutableFolder {
	label: string;
	description: string[];
	id: string;
	
	hidden: boolean;
	gathered: boolean;
	
	tags: string[];
	prerequisites: string[];
	
	contents: Folder[] | Question[];
	
	incorrectAnswers: string[];
	incorrectAnswersPassThru: boolean;
	substitutions: Record<string, string>;
	
	isSharingGroup: boolean;
	
	// Fragments and fragment augmentation
	fragment: string;
	suppressTags: string[];
	disableTags: string[];
	enableTags: string[];
	
	// Passthru params
	caseSensitive: boolean;
	modesOfPresentation: string[];
	maxChoices: number;
	maxCorrectChoices: number;
	maxIncorrectChoices: number;
	typoForgivenessLevel: string;
	correctAnswerSource: string;
	incorrectAnswerSource: string[];
	importance: number;
	shareAnswers: boolean;
	firstTimeHint: boolean;
}