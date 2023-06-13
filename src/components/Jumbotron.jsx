import Carousel from 'react-bootstrap/Carousel';

function JumbotronComponent(){

    return(
        <div className='carrusel'>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://cdn.gameplanet.com/wp-content/uploads/2023/06/02120207/StreetFighter_6_Lanzamiento_slide_mvk-1536x525.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://cdn.gameplanet.com/wp-content/uploads/2023/06/06133400/DiabloIV_slide_mvk-1536x525.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://cdn.gameplanet.com/wp-content/uploads/2023/05/11194801/TloZ_Tears_Lanzamiento_Slide_mvk-1536x525.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>  
    )
}

export default JumbotronComponent;