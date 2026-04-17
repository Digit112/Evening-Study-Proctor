export class Question {
	readonly question: string;
	readonly answers: ReadonlyArray<string>;
	
	// Common traits
	readonly tags: ReadonlyArray<string>;
	readonly prerequisites: ReadonlyArray<string>;
	
	readonly disabled: boolean;
	readonly shareAnswers: boolean;
	readonly firstTimeHint: boolean;
	readonly importance: number;
	
	readonly modesOfPresentation: ReadonlyArray<string>;
	
	// Verbatim
	readonly caseSensitive: boolean;
	readonly substitutions: Readonly<Record<string, string>>;
	readonly hiddenAnswers: ReadonlyArray<string>;
	readonly typoBlacklist: ReadonlyArray<string>;
	readonly typoForgivenessLevel: string;
	
	// Multiple-choice, radio-button, and checkboxes
	readonly maxChoices: number;
	readonly correctAnswerSource: string;
	readonly incorrectAnswers: ReadonlyArray<string>;
	readonly incorrectAnswerSource: ReadonlyArray<string>;
	
	// Just checkboxes
	readonly maxCorrectChoices: number;
	readonly maxIncorrectChoices: number;
	
	constructor(questionObject: any) {
		this.question = questionObject.question;
		this.answers = questionObject.answers;
		
		// Common traits
		this.tags = questionObject.tags;
		this.prerequisites = questionObject.prerequisites;
		
		this.disabled = questionObject.disabled;
		this.shareAnswers = questionObject.shareAnswers;
		this.firstTimeHint = questionObject.firstTimeHint;
		this.importance = questionObject.importance;
		
		this.modesOfPresentation = questionObject.modesOfPresentation;
		
		// Verbatim
		this.caseSensitive = questionObject.caseSensitive;
		this.substitutions = questionObject.substitutions;
		this.hiddenAnswers = questionObject.hiddenAnswers;
		this.typoBlacklist = questionObject.typoBlacklist;
		this.typoForgivenessLevel = questionObject.typoForgivenessLevel;
		
		// Multiple-choice, radio-button, and checkboxes
		this.maxChoices = questionObject.maxChoices;
		this.correctAnswerSource = questionObject.correctAnswerSource;
		this.incorrectAnswers = questionObject.incorrectAnswers;
		this.incorrectAnswerSource = questionObject.incorrectAnswerSource;
		
		// Just checkboxes
		this.maxCorrectChoices = questionObject.maxCorrectChoices;
		this.maxIncorrectChoices = questionObject.maxIncorrectChoices;
	}
}