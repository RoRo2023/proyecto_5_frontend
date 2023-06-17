import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function JumbotronComponent(){

    return(
        <div className='carrusel'>
            <Carousel>
                <Carousel.Item>
                    <Link to='/catalog/648c9b597f3552748fb761ed'>
                    <img
                    className="d-block w-100"
                    src="https://cdn.gameplanet.com/wp-content/uploads/2023/06/02120207/StreetFighter_6_Lanzamiento_slide_mvk-1536x525.jpg"
                    alt="First slide"
                    /></Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to='/catalog/648c9b597f3552748fb761ef'>
                    <img
                    className="d-block w-100"
                    src="https://cdn.gameplanet.com/wp-content/uploads/2023/06/06133400/DiabloIV_slide_mvk-1536x525.jpg"
                    alt="Second slide"
                    /></Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to='/catalog/648c9b597f3552748fb761ee'>
                    <img
                    className="d-block w-100"
                    src="https://cdn.gameplanet.com/wp-content/uploads/2023/05/11194801/TloZ_Tears_Lanzamiento_Slide_mvk-1536x525.jpg"
                    alt="Third slide"
                    /></Link>
                </Carousel.Item>
            </Carousel>
        </div>  
    )
}

export default JumbotronComponent;