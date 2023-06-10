import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Carrito(){
    return(
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Carrito</Modal.Title>
                </Modal.Header>
            
                <Modal.Body style={{height: "500px"}}>
                    <p>Modal body text goes here.</p>
                </Modal.Body>
            
                <Modal.Footer>
                    <Button variant="success">Proceder al pago</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default Carrito;