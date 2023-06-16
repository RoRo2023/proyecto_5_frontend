import { useLocation } from "react-router-dom";

import { Button } from "react-bootstrap";

function StoreButton({ onPress, thisId }){
    const navigate = useLocation();

    return (
        <>
        {
            navigate.pathname=='/' ? 
            <Button id={thisId} variant="success" className="store-button" onClick={onPress} ><i class="bi bi-cart-plus"></i></Button>
            : 
            <Button id={thisId} variant="success" className="store-buttonInfo" onClick={onPress} ><i class="bi bi-cart-plus"></i></Button>
        }
        </>
    );
}

export default StoreButton;