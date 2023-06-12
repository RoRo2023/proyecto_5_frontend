//Estilos
import "bootstrap-icons/font/bootstrap-icons.css";
import '../index.css'
import '../App.css'

//Utilidades
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/userContex';

import { Dropdown } from "react-bootstrap";



function HeaderComponent(){

    const context = useContext(UserContext);

    const cerrarSesion = () => {
        context.setUserContext(null)
    }

    return(
        <header>
            <nav>
                <div className="header-logo">
                    <Link to='/'><h1><i class="bi bi-arrow-up-square"></i>LEVEL UP</h1></Link>                  
                </div>
                {
                !context.userContex ?
                <div className="header-text">
                    <ul>
                        <li><Link to='/login'><a href="#">Iniciar sesión</a></Link></li>
                        <li>|</li>
                        <li><Link to='/signup'><a href="#">Registrarse</a></Link></li>
                    </ul>
                </div>
                :
                <div className="active-user">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" style={{color: "white", backgroundColor: "#083d5e", border: "none", fontSize: "24px", fontWeight:"600", height:"36px", paddingTop:"0"}}>
                        {context.userContex}&nbsp;&nbsp;<i class="bi bi-person-circle"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={cerrarSesion}>Cerrar sesión</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                }
            </nav>
        </header>
    )
}

export default HeaderComponent;