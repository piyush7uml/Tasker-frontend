import React, { useState, useEffect } from 'react';
import FormContainer from '../Compoents/FormContainer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Loader from '../Compoents/Loader';
import Message from '../Compoents/Message';
import { useSelector, useDispatch } from 'react-redux';
import { userRegisterAction } from '../Actions/userActions';
import { useNavigate } from 'react-router-dom'


const RegisterScreen = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");


    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userRegister)

    const { loading, success, error } = userRegister

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    const navigate = useNavigate()


    useEffect(() => {
        if (userInfo && userInfo.id) {
            navigate("/")
        }

    }, [userInfo, dispatch])


    const registerHandler = (e) => {
        e.preventDefault();

        setMessage("");

        if (firstname && lastname && email && password && confirmPassword) {

            if (password === confirmPassword) {

                dispatch(userRegisterAction({ firstname, lastname, email, password }))

            } else {
                setMessage("Passwords do not match")
            }

        } else {
            setMessage("All Fields Are Mandatory")
        }
    }


    return (
        <FormContainer>
            <h2 className="text-center my-4">Register</h2>

            {loading && <Loader />}
            {error && <Message>{error}</Message>}
            {message && <Message>{message}</Message>}

            <Form onSubmit={registerHandler}>
                <Form.Group className="mb-3" controlId="formBasicFirstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />

                </Form.Group>

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

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>

        </FormContainer>
    )
}

export default RegisterScreen
