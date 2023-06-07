//Componentes
import HeaderComponent from "../components/Header";
import SignUpComponent from "../components/Signup";
import Footer from "../components/Footer";

//Estilos
import '../index.css';

function SignUp(){
    return(
        <>
            <HeaderComponent/>
            <div className="signup">
                <SignUpComponent/>
            </div>
            <Footer/>
        </>
    )
}

export default SignUp;