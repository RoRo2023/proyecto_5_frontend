import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { login } from "../services/user";
import { UserContext } from "../context/userContex";

import '../index.css';

const LoginComponent = ({ setToken, setUser }) => {

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
        <div className="card">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                </Form.Group>
                <Button onClick={onSubmit} variant="primary">Iniciar sesión</Button>
            </Form>
        </div>
    )

}

export default LoginComponent;