import Sobre from './sobre/sobre.js'
import Projetos from './projetos/projetos.js'
import Contato from './contato/contato.js'

import './main.css'
import React from 'react'

const Main = () => {
  return (
    <div className='Main'>
        <Sobre/>
        <Projetos/>
        <Contato/>
    </div>
  )
}

export default Main;