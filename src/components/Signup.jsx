import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { signup } from "../services/user";

import '../index.css';

const SignUpComponent = ({ setToken, setUser }) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');

    const onSubmit = async () => {

        if (email !== '' && name !== '' && password !== '' && age !== '') {
            const data = await signup(email, name, password, age);

            if (!data) {
                alert('Error de authenticacion');
            } else {
                console.log(data);
                // useState
                setEmail(data.email);
                setName(data.name);
                setPassword(data.password);
                setAge(data.age);
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
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Edad</Form.Label>
                    <Form.Control value={age} onChange={(e) => setAge(e.target.value)} type="text" />
                </Form.Group>
                <Button onClick={onSubmit} variant="primary">Confirmar Registro</Button>
            </Form>
        </div>
    )

}

export default SignUpComponent;