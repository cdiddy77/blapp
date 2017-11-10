import * as React from 'react';
import '../App.css';
import * as jsutil from '../../../shared/src/util/jsutil';
import { AddAssetPromptModel } from '../models/AddAssetPromptModel';
import { KnownEvents, FileUploadProgressEvent } from '../models/EventsProvider';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalTitle,
    ModalFooter,
    Button,
    FormGroup,
    FormControl,
    ControlLabel,
    HelpBlock
} from 'react-bootstrap';

enum PromptState {
    noFiles,
    notStarted,
    inProgress,
    done
}

interface AddAssetPromptState {
    currentValue: FileList;
    uploadStata: FileUploadProgressEvent[];
    okButtonText: string;
    promptState: PromptState;
}

export class AddAssetPrompt extends React.Component<AddAssetPromptModel, AddAssetPromptState>{
    eventHandlerRegistered: boolean = false;

    constructor(props: AddAssetPromptModel) {
        super(props);
        this.state = {
            currentValue: null,
            uploadStata: [],
            okButtonText: 'Close',
            promptState: PromptState.noFiles
        };
    }

    onShow() {
        if (!this.eventHandlerRegistered && this.props && this.props.events) {
            this.eventHandlerRegistered = true;
            this.props.events.on(KnownEvents.fileUploadProgressEvent, (args) => {
                this.onFileStatusChanged(args);
            });
        }
        this.setState({
            currentValue: null,
            uploadStata: [],
            okButtonText: 'Close',
            promptState: PromptState.noFiles
        });
    }

    onClickSubmit() {
        if (this.state.promptState == PromptState.notStarted) {
            this.props.onStartUpload(this.state.currentValue);
        } else {
            this.props.onCloseModal();
        }
    }
    onClickCancel() {
        console.log('onClickCancel');
        this.props.onCloseModal();
    }
    onFilesChange(value: FileList) {
        if (value.length > 0) {
            this.setState({
                currentValue: value,
                okButtonText: 'Start Upload',
                promptState: PromptState.notStarted
            });
        } else {
            this.setState({
                currentValue: value,
                okButtonText: 'Close',
                promptState: PromptState.noFiles
            });
        }
    }
    onFileStatusChanged(args: FileUploadProgressEvent) {
        console.log('file status changed', args);
        let currentStata = this.state.uploadStata;
        currentStata[args.index] = args;
        this.setState({ uploadStata: currentStata });
        let allDone = currentStata.every(v => v.done);
        if (allDone) {
            this.setState({ okButtonText: 'Done', promptState: PromptState.done });
        }
    }
    render() {
        return (
            <Modal show={this.props.isActive}
                onHide={() => this.onClickCancel()}
                onShow={() => this.onShow()}>
                <ModalHeader closeButton>
                    <ModalTitle>Add Assets</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <label className='control-label' htmlFor='inputControl'>Asset file</label>
                    <input type='file'
                        name='file'
                        className='form-control'
                        onChange={(ev) => this.onFilesChange(ev.target.files)}
                        multiple
                    />
                    <div style={{ marginTop: 10 }}>
                        {this.state.uploadStata.map((v, i) => {
                            return (
                                <div key={i}>{v.assetName} - {v.pctComplete * 100} - {v.statusText}</div>
                            );
                        })}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => this.onClickSubmit()}>{this.state.okButtonText}</Button>
                </ModalFooter>
            </Modal >
        );

    }
}