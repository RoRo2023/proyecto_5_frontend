import { Button } from "react-bootstrap";
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContex';

function TestButton(){
    const [user, setUser] = useState(null);

    const context = useContext(UserContext);

    useEffect(() => {
        context.setUserContext(user);
        console.log(context.userContex); 
    }, [user])

    const onSubmit=()=>{
            setUser("Usuario de Prueba")
            console.log(user)
    }


    return(
        <Button onClick={onSubmit} variant="success">Prueba</Button>
    )
}

export default TestButton;