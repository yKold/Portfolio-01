import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './api.css'

const Api = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const owner = 'ykold';
        const accessToken = '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';
    
        axios.get(`https://api.github.com/users/${owner}/repos`, {
          headers: {
            Authorization: `token ${accessToken}`
          }
        })
        .then(response => {
            setRepos(response.data);
        })
        .catch(error => {
          console.error('Erro ao obter repositórios:', error);
        });
    }, []);

    return (
        <div>
            <h1>Meus Repositórios:</h1>
            <div className='tamanho'>
                <br/>
                {repos.map(repo => (
                    <div className='lista' key={repo.id}>
                        <div className='bloco'>
                            <p>Nome: {repo.name} - <br/>ID: {repo.id}</p> 
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer"> Acesse o repositório</a>
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    );
}

export default Api;
