import { Container } from 'react-bootstrap';

import './sobre.css'
import React from 'react'

const Sobre = () => {
  return (
    <Container className='Container'>
        <p className='sobre_header'>Quem sou eu?</p>
        <p className='sobre-txt'>
            Prazer em te conhecer.<br/> 
            Me chamo Gabriel Vitor, sou um Desenvolvedor Front-End com pouca experiência e atualmente estou cursando o 1° período de Engenharia de Software na PUC Minas - Coração Eucarístico. Tenho dedicado muito tempo ao aprimoramento das minhas habilidades em programação, buscando minha primeira oportunidade de estágio na área. Desde pequeno, sou fascinado por tecnologia, a ponto de dedicar meu tempo a analisar especificações técnicas de novos aparelhos apenas como hobby, aos 10 anos de idade.
        </p>
    </Container>
  )
}

export default Sobre;