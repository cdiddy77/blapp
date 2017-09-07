export interface InputFilePromptModel {
    isActive: boolean;
    okCallback: (files: FileList) => void;
    cancelCallback: () => void;
    helpMessage?: string;
    title: string;
    prompt: string;
}