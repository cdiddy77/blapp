import * as React from 'react';
import '../App.css';
import * as jsutil from '../../../shared/src/util/jsutil';
import { AddAssetPromptModel } from '../models/AddAssetPromptModel';
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


interface AddAssetPromptState {
    currentValue: FileList;
}

export class AddAssetPrompt extends React.Component<AddAssetPromptModel, AddAssetPromptState>{
    constructor(props:AddAssetPromptModel){
        super(props);
        this.state={currentValue:null};
    }
    onClickSubmit() {
        this.props.okCallback(this.state.currentValue);
    }
    onClickCancel() {
        this.props.cancelCallback();
    }
    onFilesChange(value: FileList) {
        this.setState({ currentValue: value });
    }
    render() {
        // SPROMPT : add some markup for validation message
        return (
            <Modal show={this.props.isActive} onHide={() => this.onClickCancel()}>
                <ModalHeader closeButton>
                    <ModalTitle>Add Assets</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <label className='control-label' htmlFor='inputControl'>Asset file</label>
                    <input type='file'
                        name='file'
                        className='form-control'
                        onChange={(ev) => this.onFilesChange(ev.target.files)}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => this.onClickSubmit()}>OK</Button>
                </ModalFooter>
            </Modal >
        );
       
    }
}