//import { getCatalog } from "../services/catalog";
import React, { useEffect, useState, useContext} from "react";
import { useFetch } from "../hooks/useFetch";
//Estilos
import { Badge, Button } from "react-bootstrap";

import Carrito from "./Carrito";

import { CatalogContext } from "../context/catalogContext";
import BadgeComponent from "./Badge";

function Catalog (){
    const context = useContext(CatalogContext);
    /*
    const [products, setProducts] = useState(null);

    useEffect(() => {
        loadCatalog();
    
    }, []);

    const onSubmit=(object)=>{
        context.setCarritoContext(oldArray => [...oldArray, object]);
    }

    //const cardText = loadCatalog();
    const loadCatalog = async() => {
        const response = await getCatalog();
        try{
            console.log(response);
            setProducts(response.catalogo)
        }catch(error){
            console.log(error)
        }
        return(
            response.catalogo
        )
        
    }
*/
    const { data } = useFetch({
        url:'http://localhost:5500/catalog'
    })
    console.log(data)

    return(
        
        <>
            <nav className="compra">
                <div className="catalogo">
                    {
                        !data ? <span>Sin productos</span>
                        :
                        data.data.catalogo.map((product)=> (
                            <div className="item-card">
                                <div className="item-top">
                                    <div className="badge">
                                        <BadgeComponent consola = {product.consola}/>
                                    </div>
                                    <div className="name">
                                        <h2 style={{textAlign: "left"}}>{product.nombre}</h2>
                                    </div>
                                </div>
                                <img src={product.imagen} style={{maxWidth: "220px"}}/>
                                <div className="item-bottom">
                                    <div>
                                        <p style={{fontSize: "45px"}}>{product.precio}</p>
                                    </div>
                                    <Button variant="success" className="store-button"><i class="bi bi-cart-plus"></i></Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <hr />
                <div className="carrito">
                    <Carrito/>
                </div>
            </nav>
        </>
    )
}

export default Catalog;