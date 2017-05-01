export interface SimplePromptModel {
    isActive: boolean;
    okCallback: (input: string) => void;
    cancelCallback: () => void;
    validationCallback: (input: string) => boolean;
    helpMessage?: string;
    title: string;
    prompt: string;
    // SPROMPT : add validation callback which returns null or text of error message
}