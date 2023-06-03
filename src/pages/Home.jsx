//Componentes
import HeaderComponent from "../components/Header";
import JumbotronComponent from "../components/Jumbotron";
import Catalog from "../components/Catalog";
import Carrito from "../components/Carrito";
import Footer from "../components/Footer";

//Estilos
import '../index.css';

function Home(){
    return(
        <>
            <HeaderComponent/>
            <JumbotronComponent/>
            <div>
                <Catalog/>
                <Carrito/>
            </div>
            <Footer/>
        </>
    )
}

export default Home;