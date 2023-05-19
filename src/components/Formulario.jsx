import {Form, Button} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useState } from 'react';

const Formulario = () => {
    const [tarea, setTarea] = useState('');
    const [listadoTareas, setListadoTareas] = useState([]);
    
    return (
        <section>
            <Form onSubmit={(e) => {e.preventDefault()}}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
        <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e) => setTarea(e.target.value)} 
        value= {tarea}/>
      <Button variant="success" type="submit" onClick={() => setListadoTareas(listadoTareas, tarea)}>
        Enviar
      </Button>
      </Form.Group>
    </Form>
    <ListaTareas/>
        </section>
    );
};

export default Formulario;