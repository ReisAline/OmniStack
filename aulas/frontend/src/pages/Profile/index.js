import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';


import  './style.css'
import logoImg from '../../assets/logo.svg'
export default function Profile(){
  const [incidents,setIncidents] = useState([]);
  const history = useHistory(); 
  const ongId   = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName'); 
 
  useEffect(() =>{
    api.get('profile',
      {Headers:{
        Authorization:ongId,
      }
      }).then(response => {
        setIncidents(response.data);
      })
  },[ongId]) ;

  async function hendleDeleteIncident(id){
    try{
    await api.delete(`incidents/${id}`,{
      Headers:{
        Authorization:ongId,
      }
    });
    setIncidents(incidents.filter(incident => incident.id!==id));

    }catch(err){
      alert('ero ao deletar.');
    }

  }
  function handleLogout(){
    localStorage.clear();
    history.push('/');

  }


  return(
    <div className="profile-container">
      <header>
        <img src ={logoImg} alt ="Be The Hero"/>
        <span>Bem Vindo {ongName} </span>
        <Link className="button" to = "/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041"/>
        </button>
      </header>

      <h1>Caso cadastrso</h1>
      <ul>
        {incidents.map(incidents => (
          <li key={incidents.id}>
            <strong> CASO: </strong>
            <p> {incidents.title} </p>

            <strong> DESCRILÇAO: </strong>
            <p> {incidents.description} </p>

            <strong> VALOR: </strong>
            <p>{Intl.NumberFormat('pt-BR',{style: 'currency',currency:'BRL'}).format(incidents.value)}</p>

            <button onClick={()=> hendleDeleteIncident} type="button">
               <FiTrash2 size={20} color= "#a8a8b3" />
            </button>          
          </li>
        ) )}      

      </ul>
    </div>
  );
}
