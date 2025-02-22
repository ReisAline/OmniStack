import React, {useState} from 'react'
import { Link, useHistory} from 'react-router-dom'
import {FiLogIn } from 'react-icons/fi'
import api from '../../services/api'

import  './style.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'


export default function Logon(){
  const [id, setId]= useState('');
  const history = useHistory();
  async function handleLogin(e){
    e.preventDefault();

    try{
      const response = await api.post('sessions', {id});
    //  console.log(response.data.name);
    //console.log(id)
      localStorage.setItem('ongId',id);
      localStorage.setItem('ongName',response.data.name);
      alert(`ID de acesso: ${response.data.id}`);
      history.push('/profile');

    }catch(err){
      alert(`Náo deu certo.Login`)
    }
    
  }

  return(
    <div className ="logon-container">
      <section className = "form">
        <img src ={logoImg} alt ="Be The Hero"/>
        <form onSubmit={handleLogin}> 
          <h1>Faça seu logon </h1>
          <input placeholder= "Sua ID"value={id} onChange={e=>setId(e.target.value)}/>
          <button className = "button" type = "submit">Enter</button>
          <Link className = "back-link" to = "/register">
            <FiLogIn size={16} color ="#e02041" />
            Não Tenho Cadastro
          </Link>
        </form>
      </section>
 




      <img src ={heroesImg}alt = "heroes"/>
    </div>
  )
}