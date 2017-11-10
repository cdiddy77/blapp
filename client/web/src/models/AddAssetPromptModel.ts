import { EventsProvider } from './EventsProvider';

export class AddAssetPromptModel {
    onStartUpload: (files: FileList) => void;
    onCloseModal: () => void;
    isActive:boolean;
    events: EventsProvider;
}
