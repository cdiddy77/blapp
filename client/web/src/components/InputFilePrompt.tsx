import * as React from 'react';
import '../App.css';
import * as jsutil from '../../../shared/src/util/jsutil';
import { InputFilePromptModel } from '../models/InputFilePromptModel';
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


interface InputFilePromptState {
    currentValue: FileList;
}

export class InputFilePrompt extends React.Component<InputFilePromptModel, InputFilePromptState>{
    constructor(props:InputFilePromptModel){
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
                    <ModalTitle>{this.props.title}</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <label className='control-label' htmlFor='inputControl'>{this.props.prompt}</label>
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
        {/*<div id="promptModal" className="modal fade" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 className="modal-title">Modal title</h4>
                        </div>
                        <div className="modal-body">
                            <label className='control-label' htmlFor='inputControl'>YOURPROMPT</label>
                            <input type='text' className='form-control' id='inputControl' placeholder='YOURPLACEHOLDER' />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>*/}
    }
}