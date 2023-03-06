import React, { useState, useEffect } from 'react'
import { Accordion, Container, Row, Col, Form, InputGroup, Button, ListGroup, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { todoListAction, todoAddAction, taskAddAction } from '../Actions/todoActions';
import Todo from '../Compoents/Todo';
import Message from '../Compoents/Message';
import Loader from '../Compoents/Loader'
import { TODO_ADD_RESET, TODO_DELETE_RESET, TASK_ADD_RESET, TASK_DELETE_RESET } from '../Constants/todoConstants';
import { LinkContainer } from 'react-router-bootstrap'

const HomeScreen = () => {


    const [todoName, setTodoName] = useState("");
    const [message, setMessage] = useState("");




    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todoList);

    const { loading, error, todos } = todoList;

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const todoAdd = useSelector(state => state.todoAdd)

    const { error: addError, success, loading: addLoading } = todoAdd;


    const todoDelete = useSelector(state => state.todoDelete)

    const { loading: deleteLoading, success: deleteSuccess, error: deleteError } = todoDelete


    const taskAdd = useSelector(state => state.taskAdd)

    const { loading: taskLoading, success: taskSuccess, error: taskError, updatedTodo } = taskAdd


    const taskDelete = useSelector(state => state.taskDelete)

    const { success: deleteTaskSuccess } = taskDelete


    useEffect(() => {

        if (userInfo && userInfo.id) {
            if (todos && todos.length === 0) {
                dispatch(todoListAction())
            }
        }

        if (success) {
            dispatch(todoListAction())
            dispatch({
                type: TODO_ADD_RESET
            })
        }

        if (deleteSuccess) {
            dispatch(todoListAction())

            dispatch({
                type: TODO_DELETE_RESET
            })
        }

        if (taskSuccess) {
            dispatch(todoListAction())
            dispatch({
                type: TASK_ADD_RESET
            })
        }

        if (deleteTaskSuccess) {
            dispatch(todoListAction())
            dispatch({
                type: TASK_DELETE_RESET
            })
        }

    }, [dispatch, todos, userInfo, success, deleteSuccess, taskSuccess, deleteTaskSuccess])




    const addTodoHandler = (e) => {
        e.preventDefault();

        if (!userInfo || !userInfo.id) {
            return handleShow()
        }

        setMessage("");

        if (!todoName) {
            setMessage(`Todo Field cannot be empty`)
        } else {
            dispatch(todoAddAction({ todoName }))
        }
    }


    return (
        <Container>
            <Row>
                {/* MODAL FOR LOGIN MESSAGE */}
                <>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="text-primary">Log in</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>YOU HAVE TO FIRST LOGIN TO ADD TODOS</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                close
                           </Button>
                            <LinkContainer to="/login">
                                <Button variant="primary" onClick={handleClose}>
                                    Go to Login
                               </Button>
                            </LinkContainer>
                        </Modal.Footer>
                    </Modal>
                </>



                <Col md={{ span: 8, offset: 2 }}>
                    <h2 className="text-center my-5">TODO</h2>
                    {message && <Message>{message}</Message>}
                    {addLoading && <Loader />}
                    {addError && <Message>{addError}</Message>}

                    <Form onSubmit={addTodoHandler}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Add Todo..."
                                type="text"
                                value={todoName}
                                onChange={(e) => setTodoName(e.target.value)}
                            />
                            <Button type="submit" variant="outline-primary" id="button-addon2">
                                Add Todo
                            </Button>
                        </InputGroup>
                    </Form>

                    <>

                        <h4 className="text-center text-primary my-5">Todo List</h4>

                        {error && <Message>{error}</Message>}
                        {loading && <Loader />}

                        {deleteError && <Message>{deleteError}</Message>}
                        {deleteLoading && <Loader />}

                        <Accordion>
                            {todos && todos.length > 0 ? todos.map((todo, i) => {
                                return <Todo key={todo._id} todo={todo} index={i} />
                            }) : (
                                    <>
                                        <Message variant="primary">List Is Empty</Message>
                                    </>
                                )}
                        </Accordion>



                    </>


                </Col>

            </Row>
        </Container>
    )
}

export default HomeScreen
