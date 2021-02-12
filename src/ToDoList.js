import React from 'react';
import { Row } from 'react-bootstrap';
import AddToDo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilter';
import Heading from './components/Heading';

export default function ToDoList() {
    return (
        <div id="app">
            <Heading />
            <AddToDo />
            <Row><TodoList /></Row>
            <Row><VisibilityFilters /></Row>
        </div>
    )
}