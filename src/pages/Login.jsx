//Componentes
import HeaderComponent from "../components/Header";
import Footer from "../components/Footer";

import { useContext, useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { login } from "../services/user";
import { UserContext } from "../context/userContex";
import { useNavigate } from "react-router-dom";

//Estilos
import '../index.css';

const Login = () =>{

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] =useState(null)

    const { 
        setUserContext,
        userContex
    } = useContext(UserContext)

    useEffect(() => {
        if(!userContex){
          navigate("/login")
        } else{
          navigate('/')
        }
    }, [userContex])

    const onSubmit = async () => {

        if (email !== '' && password !== '') {
            const data = await login(email, password);

            if (!data) {
                alert('Error de authenticacion');
            } else {
                console.log(data);

                setUserContext(data.user);
                console.log(userContex)

                setUser(data.user)
                console.log(user)
            }
        }

    }

    return(
        <>
            <HeaderComponent/>
            <div className="login">
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
            </div>
            <Footer/>
        </>
    )
}

export default Login;