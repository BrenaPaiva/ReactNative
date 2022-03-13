import axios from 'axios';

export async function ListaService(){
   return axios.get("http://localhost:4000/times")
    
    };

   
