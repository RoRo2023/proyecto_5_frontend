import { Badge } from "react-bootstrap";

function BadgeComponent({consola}){
    var type = "";
    var text = ""; 
    if(consola === "PlayStation 5"){
        type = 'secondary';
        text = 'PS5'
    }else if(consola === "Nintendo Switch"){
        type = 'danger';
        text = "Nintendo Switch";
    }else {
        type = 'success';
        text = "Xbox Series X";
    }

    return(
        <Badge bg = {type} style={{maxHeight: "24px"}}>{text}</Badge>       
    )
}

export default BadgeComponent;