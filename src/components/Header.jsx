//Estilos
import "bootstrap-icons/font/bootstrap-icons.css";
import '../index.css'
import '../App.css'

//Utilidades
import { Link } from 'react-router-dom';


function HeaderComponent(){

    return(
        <header>
            <nav>
                <div className="header-logo">
                    <Link to='/'><h1><i class="bi bi-arrow-up-square"></i>LEVEL UP</h1></Link>                  
                </div>
                <div className="header-text">
                    <ul>
                        <li><Link to='/login'><a href="#">Iniciar sesión</a></Link></li>
                        <li>|</li>
                        <li><Link to='/signup'><a href="#">Registrarse</a></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default HeaderComponent;