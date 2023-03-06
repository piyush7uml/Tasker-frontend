import React, { useState, useEffect } from 'react';
import { Accordion, Container, Row, Col, Form, InputGroup, Button, ListGroup } from 'react-bootstrap';
import { todoDeleteAction, taskAddAction } from '../Actions/todoActions';
import Task from '../Compoents/Task';
import { useSelector, useDispatch } from 'react-redux'
import Message from './Message';
import Loader from './Loader';



const Todo = ({ todo, index }) => {

    const [taskName, setTaskName] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();


    const taskAdd = useSelector(state => state.taskAdd)

    const { loading, success, error, updatedTodo } = taskAdd

    const taskDelete = useSelector(state => state.taskDelete)

    const { loading: deleteLoading, error: deleteError, success: deleteSuccess } = taskDelete




    const deleteTodoHandler = () => {
        dispatch(todoDeleteAction(todo._id))
    }



    const addTaskHandler = (e) => {
        e.preventDefault();

        setMessage("");


        if (taskName) {

            dispatch(taskAddAction(todo._id, { taskName }))
        } else {
            setMessage("Task field cannot be empty")
        }
    }




    return (

        <Accordion.Item eventKey={todo._id}>
            <Accordion.Header>



                <div className="pt-2" style={{ width: '100%' }}>

                    <p style={{ display: "inline-block", paddingRight: "1rem", width: '90%' }}>{todo.todoName}</p>

                    <div style={{ display: "inline-block", width: '10%' }} >
                        <i onClick={deleteTodoHandler} className="fa-solid fa-trash fa-lg" style={{ color: "red", }}></i>
                    </div>

                </div>

            </Accordion.Header>
            <Accordion.Body>
                {error && <Message>{error}</Message>}
                {loading && <Loader />}
                {message && <Message>{message}</Message>}

                <Form onSubmit={addTaskHandler}>
                    <InputGroup className="my-3">
                        <Form.Control
                            placeholder="Add Task..."
                            type="text"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                        />
                        <Button type="submit" variant="outline-primary" id="button-addon2">
                            Add Task
                                            </Button>
                    </InputGroup>
                </Form>

                {deleteError && <Message>{deleteError}</Message>}
                {deleteLoading && <Loader />}


                <ListGroup as="ol" className="mt-4">

                    {todo.task && todo.task.length > 0 ? todo.task.map((tsk, i) => {
                        return <Task key={tsk._id} task={tsk} index={i} todoId={todo._id} />
                    }) : null}
                </ListGroup>

            </Accordion.Body>
        </Accordion.Item>


    )
}

export default Todo
