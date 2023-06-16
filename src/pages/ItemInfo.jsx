import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useContext} from 'react';
import { CatalogContext } from '../context/catalogContext';

//Componentes
import HeaderComponent from '../components/Header';
import Footer from '../components/Footer';
import StoreButton from '../components/StoreButton';
import Carrito from '../components/Carrito';
//Estilos
import '../index.css';
import { Spinner } from 'react-bootstrap';

function ItemInfo(){
    const {id} = useParams();

    const { data } = useFetch({
        url:'http://localhost:5500/catalog/'+id
    })

    const context = useContext(CatalogContext);

    function numberWithCommas(num) { 
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
      }
    
    console.log(data)

    const onSubmit = async event=> {
        try{
            context.setCarritoContext(oldArray => [...oldArray, data]);
            const precio = await data.precio;
            context.setTotalContext(context.totalContex+parseInt(precio));
            console.log(context.totalContex);
        }catch (error){
            console.log(error)
        }
      };

    return(
        <>
            <HeaderComponent/>
            <nav className='item-info'>
                
                {
                !data ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
                :
                <div className='info-card'>
                    <div className='info-img'>
                        <img src={data.imagen} alt="" style={{maxWidth: "400px"}}/>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", width:"100%"}}>
                        <div>
                            <h2>{data.nombre}</h2>
                            <p><span style={{fontWeight:"800"}}>Consola: </span>{data.consola}</p>
                            <p><span style={{fontWeight:"800"}}>Clasificacion: </span>{data.clasificacion}</p>
                            <p><span style={{fontWeight:"800"}}>Genero: </span>{data.genero}</p>
                            <p>{data.descripcion}</p>
                        </div>
                        <div className='price'>
                            <h3 style={{fontSize: "80px"}}>{`  $${numberWithCommas(data.precio)}`}</h3>
                            <StoreButton thisId={1} onPress={onSubmit} style={{height: "100px", width: "100px"}}/>
                        </div>
                    </div>
                </div>
                }
                <Carrito ModalId={"carrito"} itemClass={"store-item"} />
            </nav>
            <Footer/>
        </>
    )
}

export default ItemInfo;