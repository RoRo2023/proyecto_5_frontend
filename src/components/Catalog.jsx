import React, { useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
//Estilos

import Carrito from "./Carrito";

import { CatalogContext } from "../context/catalogContext";
import BadgeComponent from "./Badge";
import StoreButton from "./StoreButton";

function Catalog (){
    const context = useContext(CatalogContext);

    const { data } = useFetch({
        url:'http://localhost:5500/catalog'
    })

      const onSubmit = async event => {
        try{
            const item = await event.currentTarget.id;
            context.setCarritoContext(oldArray => [...oldArray, data[item]]);
            const precio = await data[item].precio;
            context.setTotalContext(context.totalContex+parseInt(precio));
            console.log(context.totalContex);
        }catch (error){
            console.log(error)
        }
      };

      function numberWithCommas(num) { 
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
      }

    return(
        
        <>
            <nav className="compra">
                <div className="catalogo">
                    {
                        !data ? <span>Sin productos</span>
                        :
                        data.map((product, index)=> (
                            <div className="item-card">
                                <div className="item-top">
                                    <div className="badge">
                                        <BadgeComponent consola = {product.consola}/>
                                    </div>
                                    <div className="name">
                                        <h2 style={{textAlign: "left"}}>{product.nombre}</h2>
                                    </div>
                                </div>
                                <img alt="" src={product.imagen} style={{maxWidth: "220px"}}/>
                                <div className="item-bottom">
                                    <div>
                                        <p style={{fontSize: "45px"}}>{`$${numberWithCommas(product.precio)}`}</p>
                                    </div>
                                    <StoreButton thisId={index} onPress={onSubmit}/>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
                <Carrito ModalId={"carrito"} itemClass={"store-item"} />
            </nav>
        </>
    )
}

export default Catalog;