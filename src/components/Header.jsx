import "bootstrap-icons/font/bootstrap-icons.css";
import '../index.css'
import '../App.css'


function HeaderComponent(){

    return(
        <header>
            <nav>
                <div className="header-logo">
                    <h1><i class="bi bi-arrow-up-square"></i>LEVEL UP</h1>
                    
                </div>
                <div className="header-text">
                    <ul>
                        <li><a href="#">Iniciar sesión</a></li>
                        <li>|</li>
                        <li><a href="#">Registrarse</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default HeaderComponent;