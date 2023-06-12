import { CatalogContext } from "../context/catalogContext";
import { useContext, useState, useEffect } from 'react';

import { Button } from "react-bootstrap";

function StoreButton({ onPress, thisId }){

    return (
        <>
            <Button id={thisId} variant="success" className="store-button" onClick={onPress} ><i class="bi bi-cart-plus"></i></Button>
        </>
    );
}

export default StoreButton;