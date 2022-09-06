import React from 'react';
import { Container } from 'react-bootstrap';
import insti_img from '../../assets/img/banner1.jpg';
import principal_img from '../../assets/styles/Instituicao.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

export default function Instituicoes() {
  return (
    <div>
    <a href='/' className='inicio' >Inicio</a>
    <Container className="mt-3">
      <Carousel />
      <h1 className='titulo' >Titulo Lorem ipsum </h1>

      <Footer />
    </Container>
    </div>
  )
}
