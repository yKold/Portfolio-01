import { Container } from 'react-bootstrap';
import Api from './api.js'

import './projetos.css'
import React from 'react'

const Projetos = () => {
    return (
        <div className='Container2'>
            <Container >
                <Api/>
            </Container>
        </div>
      )
}

export default Projetos