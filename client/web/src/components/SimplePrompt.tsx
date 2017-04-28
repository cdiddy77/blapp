import * as React from 'react';
import '../App.css';
import * as jsutil from '../../../shared/src/util/jsutil';
import { SimplePromptModel } from '../models/SimplePromptModel';
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


interface SimplePromptState {
    currentValue: string;
}

export class SimplePrompt extends React.Component<SimplePromptModel, SimplePromptState>{
    constructor(props:SimplePromptModel){
        super(props);
        this.state={currentValue:''};
    }
    onClickSubmit() {
        this.props.okCallback(this.state.currentValue);
    }
    onClickCancel() {
        this.props.cancelCallback();
    }
    onTextChange(value: string) {
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
                    <input type='text'
                        className='form-control'
                        value={this.state.currentValue}
                        onChange={(ev) => this.onTextChange(ev.target.value)}
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