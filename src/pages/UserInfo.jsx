//Componentes
import HeaderComponent from "../components/Header";
import Carrito from "../components/Carrito";
import Footer from "../components/Footer";

//Context
import { useContext} from "react";
import { UserContext } from '../context/userContex';
import { CatalogContext } from "../context/catalogContext";

function UserInfo(){

    const userContext = useContext(UserContext);

    return(
        <>
            <HeaderComponent/>
            <nav className="user-page">
                <div className="info-card">
                    <div className="user-info">
                        <div className="user-name" style={{padding:"20px 20px 0"}}>
                            <h1><i className="bi bi-person-circle user-icon"></i></h1>
                            <h2 style={{color:"black", fontSize:"50px"}}>{userContext.userContex.user}</h2>
                        </div>
                        <h5>Correo:</h5>
                        <p style={{color:"black", fontSize:"50px"}}>{userContext.userContex.email}</p>
                        <h5>Edad:</h5>
                        <p style={{color:"black", fontSize:"50px"}}>{userContext.userContex.age}</p>
                    </div>
                    <div style={{width: '100%'}}>
                        <Carrito ModalId={"carritoUser"} itemClass={"store-itemUser"} />
                    </div>
                </div>
            </nav>
            <Footer/>
        </>
    )
}

export default UserInfo;