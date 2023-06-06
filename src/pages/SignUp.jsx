import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { signup } from "../services/user";

const SignUp = ({ setToken, setUser }) => {

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
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Age</Form.Label>
                <Form.Control value={age} onChange={(e) => setAge(e.target.value)} type="text" />
            </Form.Group>
            <Button onClick={onSubmit} variant="primary">SignUp.</Button>
        </Form>
    )

}

export default SignUp;