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
       
    }
}