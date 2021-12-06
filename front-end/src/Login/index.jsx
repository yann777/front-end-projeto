import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import '../index.css'

import Painel from '../components/Painel'

export default function Login() {

    let history = useHistory();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const signIn = () => {
        const signIn = {
            email: email,
            senha: senha
        }

        axios.post('https://localhost:5000/Signin', {
            body: JSON.stringify(signIn),
            headers: {
                'content-type': 'application/json'
            }
        })

            .then(response => response.json())
            .then(dados => {

                if (dados.token !== undefined) {
                    localStorage.setItem('token', dados.token)
                    history.push('/');
                } else {
                    alert(dados.msgerro)
                    
                }

            })

            .catch(erro => console.error(erro))
            console.log("ghjghjghjh")
    };

    return (
        <div className="tela-login">
            <Painel>
                <h1 className="titulo-painel">Login</h1>
                <div className="alinhar-inputs">
                    <form onSubmit={event => {
                        event.preventDefault();
                        signIn();
                    }}>
                        <input className="input-painel" placeholder="Email" type="email" onChange={e => setEmail(e.target.value)} />
                        <input className="input-painel" placeholder="Senha" type="password" onChange={e => setSenha(e.target.value)}/>
                        <button className="btn-login">Entrar</button>
                    </form>
                </div>
                <div className="realizar-cadastro">
                    <p>Não possui conta?<a> Cadastre-se</a></p>
                </div>
            </Painel>
        </div>
    )
}