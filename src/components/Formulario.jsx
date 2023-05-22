import {Form, Button} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useState } from 'react';

const Formulario = () => {
    const [tarea, setTarea] = useState('');
    const [listadoTareas, setListadoTareas] = useState([]);
  
const handleSubmit = (e) => {
  e.preventDefault();
  setListadoTareas([...listadoTareas,tarea])
  setTarea('');
}

    return (
        <section>
            <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
        <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e) => setTarea(e.target.value)} 
        value= {tarea}/>
      <Button variant="success" type="submit">
        Enviar
      </Button>
      </Form.Group>
    </Form>
    <ListaTareas/>
        </section>
    );
};

export default Formulario;