//Estilos
import "bootstrap-icons/font/bootstrap-icons.css";
import '../index.css'
import '../App.css'

//Utilidades
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/userContex';

import { Dropdown } from "react-bootstrap";



function HeaderComponent(){

    const context = useContext(UserContext);

    const navigate = useNavigate();

    const cerrarSesion = () => {
        context.setUserContext(null)
        navigate('/')
    }

    return(
        <header>
            <nav>
                <div className="header-logo">
                    <Link to='/'><h1><i class="bi bi-arrow-up-square"></i>LEVEL UP</h1></Link>                  
                </div>
                {
                !context.userContex ?
                <>
                    <div className="header-text">
                        <ul>
                            <li><Link to='/login'><a href="#">Iniciar sesión</a></Link></li>
                            <li>|</li>
                            <li><Link to='/signup'><a href="#">Registrarse</a></Link></li>
                        </ul>
                    </div>
                    <div className="menu2" style={{display: "none"}}>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{color: "white", backgroundColor: "#083d5e", border: "none", fontSize: "24px", height:"36px", paddingTop:"0"}}>
                                <i class="bi bi-list"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Link to='/login'><Dropdown.Item href="#/action-1">Iniciar sesión</Dropdown.Item></Link>
                                <Link to='/signup'><Dropdown.Item href="#/action-2">Registrarse</Dropdown.Item></Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </>
                :
                <div className="active-user">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" style={{color: "white", backgroundColor: "#083d5e", border: "none", fontSize: "24px", fontWeight:"600", height:"36px", paddingTop:"0"}}>
                        {context.userContex.user}&nbsp;&nbsp;<i class="bi bi-person-circle"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Link to='/userinfo'><Dropdown.Item href="#/action-1">Info</Dropdown.Item></Link>
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