export interface Question {
	readonly question: string;
	readonly answers: string[];
	
	// Common traits
	readonly tags: string[];
	readonly prerequisites: string[];
	
	readonly disabled: boolean;
	readonly shareAnswers: boolean;
	readonly firstTimeHint: boolean;
	readonly importance: number;
	
	readonly modesOfPresentation: string[];
	
	// Verbatim
	readonly caseSensitive: boolean;
	readonly substitutions: Record<string, string>;
	readonly hiddenAnswers: string[];
	readonly typoBlacklist: string[];
	readonly typoForgivenessLevel: string;
	
	// Multiple-choice, radio-button, and checkboxes
	readonly maxChoices: number;
	readonly correctAnswerSource: string;
	readonly incorrectAnswers: string[];
	readonly incorrectAnswerSource: string[];
	
	// Just checkboxes
	readonly maxCorrectChoices: number;
	readonly maxIncorrectChoices: number;
}