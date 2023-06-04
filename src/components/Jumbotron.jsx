import Carousel from 'react-bootstrap/Carousel';

function JumbotronComponent(){

    return(
        <div className='carrusel'>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://img2.wallspic.com/previews/1/3/7/0/80731/80731-technology-joystick-video_game_consoles-video_games-xbox-x750.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://img1.wallspic.com/previews/4/4/6/6/3/136644/136644-playstation-video_game_consoles-recreation-black-playstation_controller-x750.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://img1.wallspic.com/previews/9/1/1/1/81119/81119-video_game_consoles-tech-game_controller-xbox-technology-x750.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>  
    )
}

export default JumbotronComponent;