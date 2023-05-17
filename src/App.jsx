import { Container } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
    <Container className='my-5 mainPage'>
      <h1 className='display-4 text-center text-light'>Lista de Tareas</h1>
      <hr className='text-light'/>
      {/* aqui agrego el formulario*/}
    </Container>
    <footer className='bg-dark text-light py-4 text-center'>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
