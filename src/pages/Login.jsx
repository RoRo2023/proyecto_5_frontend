//Componentes
import HeaderComponent from "../components/Header";
import LoginComponent from "../components/Login";
import Footer from "../components/Footer";

//Estilos
import '../index.css';

function Login(){
    return(
        <>
            <HeaderComponent/>
            <div className="login">
                <LoginComponent/>
            </div>
            <Footer/>
        </>
    )
}

export default Login;