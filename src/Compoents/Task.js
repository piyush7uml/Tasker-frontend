import React from 'react';
import { Accordion, Container, Row, Col, Form, InputGroup, Button, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { taskDeleteAction } from '../Actions/todoActions';

const Task = ({ task, index, todoId }) => {



    const dispatch = useDispatch();



    const taskDeleteHandler = () => {

        dispatch(taskDeleteAction(todoId, task._id))
    }


    return (
        <>
            {task ? (
                <ListGroup.Item as="li" className="pt-4">

                    <Row>
                        <Col xs={11}>
                            <p className=""> {index + 1}.{" "}{task.taskName}
                            </p>
                        </Col>

                        <Col xs={1}>
                            <div className="">
                                <i onClick={taskDeleteHandler} className="fa-solid fa-trash" style={{ color: "red" }}></i>
                            </div>

                        </Col>

                    </Row>
                </ListGroup.Item>
            ) : null}
        </>
    )
}

export default Task
