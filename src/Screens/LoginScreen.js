import React, { useState, useEffect } from 'react';
import FormContainer from '../Compoents/FormContainer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Loader from '../Compoents/Loader';
import Message from '../Compoents/Message';
import { useSelector, useDispatch } from 'react-redux';
import { userLoginAction } from '../Actions/userActions';
import { Link, useNavigate } from 'react-router-dom'

function LoginScreen() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");


    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin


    const navigate = useNavigate()


    useEffect(() => {
        if (userInfo && userInfo.id) {
            navigate("/")
        }

    }, [userInfo, dispatch])



    const loginHandler = (e) => {
        e.preventDefault()
        setMessage("");

        if (email && password) {

            dispatch(userLoginAction({ email, password }))

        } else {
            setMessage(`Email and Password both are required`)
        }
    }


    return (
        <FormContainer>
            <h2 className="text-center my-4">Login</h2>

            {loading && <Loader />}
            {error && <Message>{error}</Message>}
            {message && <Message>{message}</Message>}

            <Form onSubmit={loginHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className="my-2">New user ?<Link to="/register">Register</Link> </p>

        </FormContainer>
    )
}

export default LoginScreen
