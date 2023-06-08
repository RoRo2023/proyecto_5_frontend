//Componentes
import HeaderComponent from "../components/Header";
import JumbotronComponent from "../components/Jumbotron";
import Catalog from "../components/Catalog";
import Carrito from "../components/Carrito";
import Footer from "../components/Footer";
import TestButton from "../components/TestButton";

//Estilos
import '../index.css';

function Home(){
    return(
        <>
            <HeaderComponent/>
            <JumbotronComponent/>
            <TestButton/>
            <div>
                <Catalog/>
                <Carrito/>
            </div>
            <Footer/>
        </>
    )
}

export default Home;