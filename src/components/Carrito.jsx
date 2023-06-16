import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { CatalogContext } from "../context/catalogContext";
import { UserContext } from '../context/userContex';
import { useContext, useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

function Carrito({ModalId, itemClass}){

    const [data, setData] = useState(null);
    const context = useContext(CatalogContext);
    const userContext = useContext(UserContext);

    const navigate = useLocation();
    
    useEffect(() => {
        if (context.carritoContex.length !== 0){
            setData(context.carritoContex);
            console.log(context.carritoContex)
        } else{
            if(navigate.pathname=='/userinfo'){
                setData([]);
                console.log(context.carritoContex)
            }else{
                setData(null);
                console.log(context.carritoContex)
            }
        }
    }, [context.carritoContex])

    function numberWithCommas(num) { 
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
    }

    const handleRemoveItem = async index => {
        try{
            const precio = await context.carritoContex[index].precio;
            context.setCarritoContext(oldValues => {
                return oldValues.filter((_, i) => i !== index)
            })
            context.setTotalContext(context.totalContex - precio)
            console.log(context.totalContex)
        }catch(error){
            console.log(error)
        }
    };
//!navigate.pathname=='/userinfo'
    return(
        <div>
            {
            !data ?<div style={{display: "none"}}></div>
            :
            <div
                className="modal show"
                style={{ display: 'block', position: 'static'}}
            >
                <div style={{paddingLeft:"350px"}}></div>
                <Modal.Dialog id={ModalId}>
                    <Modal.Header>
                        <Modal.Title className='carrito-title'>Carrito</Modal.Title>
                    </Modal.Header>
                
                    <Modal.Body style={{minHeight:"100px", height:'fitcontent'}}>
                        {
                            data.length==0 ?<span>Carrito vacío</span>:null
                        }
                        {
                            data.map((product, index)=> (
                                <div className={itemClass}>
                                    <div>
                                        <img alt='' src={product.imagen} />
                                        <p className='item-name'>{product.nombre}</p>
                                    </div>
                                    <div>
                                        <h4>{`$${numberWithCommas(product.precio)}`}</h4>
                                        <Button variant="danger" style={{height: "42px", width: "42px"}} onClick={() => handleRemoveItem(index)}><i className="bi bi-x-lg"></i></Button>
                                    </div>
                                </div>
                            ))
                            }
                            
                    </Modal.Body>
                
                    <Modal.Footer className='finish-sale'>
                        <h4>{`Total: $${numberWithCommas(context.totalContex)}`}</h4>
                        {
                            !userContext.userContex ?
                            <>
                                <Link to='/login'><Button className="add-carrito" variant="success"><p>Proceder al pago </p><i className="bi bi-cart-check-fill"></i></Button></Link>
                                <p>*Cuenta de usuario requerida para finalizar el pago</p>
                            </>
                            : navigate.pathname=='/checkout' ? null:
                            <Link to='/checkout'><Button className="add-carrito" variant="success"><p>Proceder al pago </p><i className="bi bi-cart-check-fill"></i></Button></Link>

                        }
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        }
        </div>
        
    )
}

export default Carrito;