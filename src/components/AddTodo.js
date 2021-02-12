import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
import { Form, FormLabel, FormControl, Button, Col } from 'react-bootstrap';

class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "", priority: "", dueDate: "" };
    }

    updateInput = input => {
        this.setState({ input: input });
    }

    updateTime = date => {
        this.setState({ dueDate: date })
    }

    handleAddTodo = () => {
        if (this.state.input !== "") {
            this.props.addTodo(this.state.input, this.state.priority, this.state.dueDate);
            this.setState({ input: "", priority: "", dueDate: "" });
        }
    }

    handlePriority = (priority) => {
        this.setState({ priority: priority });
    }

    render() {
        return (
            <Form className="form-margin">
                <Form.Row className="text-center">
                    <Col className="text-input">
                        <FormLabel>Todo Name (Required): </FormLabel>
                        <FormControl type="text" onChange={e => this.updateInput(e.target.value)} value={this.state.input} size="sm" required className="text-field"></FormControl>
                    </Col>
                    <Col className="text-input">
                        <Form.Row className="justify-content-center">
                            <FormLabel>Set Priority: </FormLabel>
                        </Form.Row>
                        <Form.Row className="justify-content-center">
                            <Button onClick={() => this.handlePriority("low")} className="add-priority" variant="success">Low</Button>
                            <Button onClick={() => this.handlePriority("medium")} className="add-priority" variant="warning">Medium</Button>
                            <Button onClick={() => this.handlePriority("high")} className="add-priority" variant="danger">High</Button>
                            <Button onClick={() => this.handlePriority("")} className="add-priority" variant="dark">None</Button>
                        </Form.Row>
                    </Col>
                    <Col className="text-input">
                        <FormLabel>Due date: </FormLabel>
                        <FormControl onChange={e => this.updateTime(e.target.value)} value={this.state.dueDate} type="date" size="sm"></FormControl>
                    </Col>
                </Form.Row>
                <Form.Row className="text-center button-margin">
                    <Col><Button id="add-todo-button" className="add-todo" onClick={this.handleAddTodo}>Add todo</Button></Col>
                </Form.Row>
            </Form>
        );
    }
}

export default connect(null, { addTodo })(AddToDo);