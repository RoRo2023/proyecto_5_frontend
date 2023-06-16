import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useContext, useEffect} from "react";
import { CatalogContext } from "../context/catalogContext";
import { useNavigate } from "react-router-dom";

import Carrito from "../components/Carrito";
import HeaderComponent from "../components/Header";
import Footer from "../components/Footer";

const Checkout = () => {

    const context = useContext(CatalogContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(context.carritoContex.length===0){
            context.setTotalContext(0)
            console.log(context.carritoContex)
            navigate("/")
        } else{
            console.log(context.carritoContex)
            navigate('/checkout')
        }
    }, [context.carritoContex])

    return (
        <>  
            <HeaderComponent/>
            <nav className="checkout">
                <div className="checkout-container">
                    <PayPalScriptProvider
                        options={{
                            "client-id": "AcM-ZhUv10CexbQ43XYM6z_Yd4DcipcNNpTPBnbeBZLmdFxQZf70DWUgHKQa_RSda9sm2tkHWwMABqTJ",
                            "currency": "MXN",
                        }}
                    >
                        <PayPalButtons
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: context.totalContex,
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={(data, actions) => {
                                return actions.order.capture().then((details) => {
                                    const name = details.payer.name.given_name;
                                    alert(`Transacción completada por ${name}`);
                                    //vaciar carrito
                                    context.setTotalContext(0);
                                    context.setCarritoContext([])
                                });
                            }}
                        />
                    </PayPalScriptProvider>
                </div>
                <div>
                    <Carrito ModalId={"carritoCheckout"} itemClass={"store-itemCheckout"} />
                </div>
            </nav>
            <Footer/>
        </>
        
    )

}

export default Checkout;