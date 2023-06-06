import { getCatalog } from "../services/catalog";
import React, { useEffect } from "react";

/*
useEffect(async() => {
    const  response  = await getCatalog();
    console.log(response);

}, []);

/*
const loadCatalog = async() => {
    const  response  = await getCatalog();
    console.log(response);
    return(
        response
    )
    
}
*/

function Catalog (){

    useEffect(() => {
        loadCatalog();
    
    }, []);

    //const cardText = loadCatalog();
    const loadCatalog = async() => {
        const  response  = await getCatalog();
        console.log(response);
        return(
            response
        )
        
    }

    return(
        <>
            <nav className="compra">
                <div className="catalogo">
                    <div className="card">
                        {/*<p dangerouslySetInnerHTML={ {__html: cardText} }></p>*/}
                    </div>
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