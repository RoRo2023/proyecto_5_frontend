import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { login } from "../services/user";
import { UserContext } from "../context/userContex";

const Login = ({ setToken, setUser }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { 
        setTokenContext,
        setUserContext
    } = useContext(UserContext)

    const onSubmit = async () => {

        if (email !== '' && password !== '') {
            const data = await login(email, password);

            if (!data) {
                alert('Error de authenticacion');
            } else {
                console.log(data);
                // useState
                setToken(data.token);
                setUser(data.user); 
                setUserContext(data.user); // context
            }
        }

    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </Form.Group>
            <Button onClick={onSubmit} variant="primary">Login</Button>
        </Form>
    )

}

export default Login;