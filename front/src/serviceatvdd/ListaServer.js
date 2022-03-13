import axios from 'axios'

export async function ListaServer() {
    return axios.get("http://localhost:4000/questao")
}