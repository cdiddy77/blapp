export interface AddAssetPromptModel {
    isActive: boolean;
    okCallback: (files: FileList) => void;
    cancelCallback: () => void;
    helpMessage?: string;
 }