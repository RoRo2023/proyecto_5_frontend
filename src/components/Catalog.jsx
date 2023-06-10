import { getCatalog } from "../services/catalog";
import React, { useEffect, useState } from "react";

//Estilos
import { Badge, Button } from "react-bootstrap";

function Catalog (){

    const [products, setProducts] = useState(null);

    useEffect(() => {
        loadCatalog();
    
    }, []);

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

    return(
        <>
            <nav className="compra">
                <div className="catalogo">
                    {
                        !products ? <span>Sin productos</span>
                        :
                        products.map((product)=> (
                            <div className="item-card">
                                <div className="item-top">
                                    <h2 style={{textAlign: "left"}}>{product.nombre}</h2>
                                    {
                                        product.consola="PlayStation 5"? <Badge bg = 'secondary' style={{maxHeight: "24px"}}>PS5</Badge>
                                        :
                                        product.consola="Nintendo Switch"? <Badge bg = 'danger' style={{maxHeight: "24px"}}>Nintendo Switch</Badge>
                                        :
                                        <Badge bg = 'success' style={{maxHeight: "24px"}}>Xbox Series X</Badge>
                                    }
                                </div>
                                <img src={product.imagen} style={{maxWidth: "200px"}}/>
                                <div className="item-bottom">
                                    <div>
                                        <p style={{fontSize: "30px"}}>{product.clasificacion}</p>
                                        <p style={{fontSize: "35px"}}>{product.precio}</p>
                                    </div>
                                    <Button variant="success" className="store-button"><i class="bi bi-cart-plus" ></i></Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <hr />
                <div className="carrito">
                    <h1>Carrito</h1>
                </div>
            </nav>
        </>
    )
}

export default Catalog;