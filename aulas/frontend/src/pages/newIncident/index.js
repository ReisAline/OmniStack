import React,{useState} from 'react'
import { Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api';



import  './style.css'
import logoImg from '../../assets/logo.svg'
export default function NewIncident(){
  const[title,setTitle] =useState('');
  const[description,setDescription] =useState('');
  const[value,setValue] =useState('');
  const history = useHistory(); 
  const ongId   = localStorage.getItem('ongId');

  async function handleNewIncident(e){
    e.preventdefault();
    const data={
      title,
      description,
      value,
    };

    
    try{
       await api.post('incidents', data,{
        Headers:{
          Authorization:ongId,
        }
      });
      history.push('/profile');

    }catch(err){
      alert(`Náo deu certo.NewIncident`)
    }

  }

  return (    
    <div className = "new-incedent-container">
      <div className = "Content">
        <section>
          <img src={logoImg} alt= "Be The Hero"/> 
          <h1>Cadastrar novo caso</h1>
          <p> Descreva seu caso...</p>
          <Link className = "back-link" to = "/profile">
            <FiArrowLeft size={16} color ="#e02041" />
           Voltar para profile
          </Link>
        </section>
        <form onSubmit ={handleNewIncident} > 
          <input     placeholder = "Título do caso" value = {title}       onChange= {e=> setTitle(e.target.value)}/>
          <textarea  placeholder = "Descrição"      value = {description} onChange= {e=> setDescription(e.target.value)}/>
          <input     placeholder = "Valor em reais" value = {value}       onChange= {e=> setValue(e.target.value)}/>


          <button className="button" type ="submit">Cadastrar</button>
        </form>  
      </div>
    </div>
  );
}