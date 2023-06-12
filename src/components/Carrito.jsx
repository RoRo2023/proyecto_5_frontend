import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { CatalogContext } from "../context/catalogContext";
import { useContext, useState, useEffect} from 'react';

function Carrito(){

    const [data, setData] = useState(null);
    const [total, setTotal] = useState(0);
    const context = useContext(CatalogContext);
    
    useEffect(() => {
        if (context.carritoContex.length !== 0){
            setData(context.carritoContex);
            console.log(context.carritoContex)
        } else{
            setData(null);
            console.log(context.carritoContex)
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

    return(
        <div>
            {
            !data ? <div style={{display: "none"}}></div>
            :
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >

                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Carrito</Modal.Title>
                    </Modal.Header>
                
                    <Modal.Body style={{minHeight:"100px", height:'fitcontent'}}>
                        {
                            data.map((product, index)=> (
                                <div className='store-item'>
                                    <div>
                                        <img src={product.imagen} style={{maxWidth: "20px"}}/>
                                        <p className='item-name'>{product.nombre}</p>
                                    </div>
                                    <div>
                                        <h4>{`$${numberWithCommas(product.precio)}`}</h4>
                                        <Button variant="danger" style={{height: "42px", width: "42px"}} onClick={() => handleRemoveItem(index)}><i class="bi bi-x-lg"></i></Button>
                                    </div>
                                </div>
                            ))
                            }
                    </Modal.Body>
                
                    <Modal.Footer className='finish-sale'>
                        <h4>{`Total: $${numberWithCommas(context.totalContex)}`}</h4>
                        <Button variant="success">Proceder al pago <i class="bi bi-cart-check-fill"></i></Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        }
        </div>
        
    )
}

export default Carrito;