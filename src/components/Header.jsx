function HeaderComponent(){

    return(
        <header>
            <nav>
                <div className="header-logo">
                    <h1><i class="bi bi-arrow-up-square"></i>LEVEL UP</h1>
                    
                </div>
                <div className="header-text">
                    <ul>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">¿Quiénes somos?</a></li>
                        <li><a href="#">Reservaciones</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default HeaderComponent;