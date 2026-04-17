export interface MutableQuestion {
	question: string;
	answers: string[];
	
	// Common traits
	tags: string[];
	prerequisites: string[];
	
	disabled: boolean;
	shareAnswers: boolean;
	firstTimeHint: boolean;
	importance: number;
	
	modesOfPresentation: string[];
	
	// Verbatim
	caseSensitive: boolean;
	substitutions: Record<string, string>;
	hiddenAnswers: string[];
	typoBlacklist: string[];
	typoForgivenessLevel: string;
	
	// Multiple-choice, radio-button, and checkboxes
	maxChoices: number;
	correctAnswerSource: string;
	incorrectAnswers: string[];
	incorrectAnswerSource: string[];
	
	// Just checkboxes
	maxCorrectChoices: number;
	maxIncorrectChoices: number;
}