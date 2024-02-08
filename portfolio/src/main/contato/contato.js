import { Container } from 'react-bootstrap';

import './contato.css'
import React from 'react'

const Contato = () => {
  return (
    <div className='Container3'>
        <Container>
            <p>Existem várias formas de você me encontar</p>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/gabriel-ykold/">
                        <img alt='linkedin' img src='https://cdn-icons-png.flaticon.com/256/174/174857.png'>
                        </img>
                    </a>
                </li>
                <li>
                    <a href="https://pucminas-csm.symplicity.com/profiles/gabriel.vitorteixeirasantos">
                        <img alt='puc carreiras' img src='https://yt3.googleusercontent.com/7rEp65GJQeL4k04gjpstvvaorHYu8oU31ZZWcQGwtIXUlyuF56KObIcBFhQ_FGfhQUC-2-jkfCY=s900-c-k-c0x00ffffff-no-rj'>
                        </img>
                    </a>
                </li>
                <li>
                    <a href="mailto:gvitor922@gmail.com">
                        <img alt='puc carreiras' img src='https://cdn-icons-png.flaticon.com/512/281/281769.png'>
                        </img>
                    </a>
                </li>
            </ul>
            
        </Container>
    </div>
  )
}

export default Contato;