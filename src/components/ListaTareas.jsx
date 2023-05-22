import { ListGroup } from "react-bootstrap";
import ItemTarea from "./itemTarea";

const ListaTareas = ({listadoTareas}) => {
    return (
    <ListGroup>
      {
        listadoTareas.map((tarea,indice) => <ItemTarea key={indice} tarea={tarea}></ItemTarea>)
      }
    </ListGroup>
    );
};

export default ListaTareas;