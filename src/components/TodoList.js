import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { getTodosByVisibilityFilter } from '../redux/selectors';
import { deleteTodo } from '../redux/actions';
import { FcHighPriority, FcMediumPriority, FcLowPriority } from 'react-icons/fc';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Timer from './Timer';
import { Table } from 'react-bootstrap';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import * as dayjs from 'dayjs';

const TodoList = ({ todos, deleteTodo }) => (
    <Table variant="dark" responsive striped>
        <thead>
            <tr className="text-center todo-list-headers">
                <th>Status</th>
                <th>Name</th>
                <th>Priority</th>
                <th>Due Date</th>
                <th>Time Left</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                todos && todos.length
                    // eslint-disable-next-line no-unused-vars
                    ? todos.map((todo, index) => {
                        let priorityComp = todo.priority === "high" ? <FcHighPriority className="todo-item priority-icon" /> :
                            todo.priority === "medium" ? <FcMediumPriority className="todo-item priority-icon" /> :
                                todo.priority === "low" ? <FcLowPriority className="todo-item priority-icon" /> : <p className="todo-item">No priority!</p>;
                        let remainingTime = todo.dueDate ? <Timer dueDate={todo.dueDate} id={`timer-div-${todo.id}`} /> : <p className="todo-item">No due date!</p>;
                        let completion = todo.completed;
                        let dueDate = todo.dueDate ? <p className="todo-item">{dayjs(todo.dueDate).format('MM/DD/YYYY')}</p> : <p className="todo-item">No due date!</p>;
                        return (
                            <tr key={`todo-row-${todo.id}`} className="text-center" id={`todo-row-${todo.id}`}>
                                <td>{completion ? <FiThumbsUp className="todo-item" /> : <FiThumbsDown className="todo-item" />}</td>
                                <td><Todo key={`todo-${todo.id}`} todo={todo} /></td>
                                <td>{priorityComp}</td>
                                <td>{dueDate}</td>
                                <td>{remainingTime}</td>
                                <td><RiDeleteBin5Line onClick={() => deleteTodo(todo.id)} className="todo-item delete-todo" /></td>
                            </tr>
                        );
                    })
                    : 
                    <tr className="no-todos text-center">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>No todos!</td>
                        <td></td>
                        <td></td>
                    </tr>
            }
        </tbody>
    </Table>
)

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: todo => dispatch(deleteTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);