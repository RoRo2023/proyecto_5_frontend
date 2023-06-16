

function Footer(){

    return(
       <footer style={{marginTop:"10vh"}}>
          <nav>
            <div>
                <div className="list">
                    <dt>NOSOTROS</dt>
                    <dd><a href="#">Acerca de</a></dd>
                    <dd><a href="#">Blog</a></dd>
                    <dd><a href="#">Trabajos</a></dd>
                    <dd><a href="#">Prensa</a></dd>
                    <dd><a href="#">Asociados</a></dd>
                </div>
            </div>
            <div>
                <div className="list">
                    <dt>LEGAL</dt>
                    <dd><a href="#">Privacidad</a></dd>
                    <dd><a href="#">Términos</a></dd>
                </div>
            </div>
            <div className="redes-sociales" style={{gap: "25px"}}>
                <p ><a><i className="bi bi-instagram"></i></a></p>
                <p ><a><i className="bi bi-facebook"></i></a></p>
                <p ><a><i className="bi bi-messenger"></i></a></p>
                <p ><a><i className="bi bi-twitter"></i></a></p>
            </div>
          </nav>
          <br />
          <p className="foot">2023. UCamp. Todos los derechos reservados. Esta es una aplicación ficticia para fines académicos.</p>
       </footer> 
    )
}

export default Footer;