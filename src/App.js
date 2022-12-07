
import './App.css';
import Header from './header.jsx';
import CardImagen from './CardImagen.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Row } from 'react-bootstrap';
import Footer from './Footer.jsx';

function App() {
  return (
    <div className="App">
     <Header titulo="Galeria de Imagenes con React"></Header> 
     <Row>
     <Col>
     <CardImagen imagen="https://cdn.pixabay.com/photo/2022/11/07/06/23/european-crested-tit-7575701_960_720.jpg"  titulo="ave" descripcion="foto de ave"></CardImagen>
     </Col>
     <Col>
     <CardImagen imagen="https://cdn.pixabay.com/photo/2022/12/02/16/34/western-honey-bee-7631244_960_720.jpg" titulo="abeja" descripcion="foto de abeja"></CardImagen>
     </Col>
     <Col>
    <CardImagen imagen="https://cdn.pixabay.com/photo/2022/11/28/20/52/bird-7623166_960_720.jpg" titulo="pajaro" descripcion="foto de pajaro"></CardImagen>
    </Col>
    </Row>
    <Footer texto="Todos los derechos reservados @2022"></Footer>
    </div>
    
  );
}

export default App;
