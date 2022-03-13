import { useEffect, useState } from "react"
import TimeForm from "../forms/TimeForm"
import { listaService } from "../services/listaService"
import TimesList from "./TimesList"


export default function Times() {
    const [listaTimes, setListaTimes] = useState([])

    

    const listaEAtualiza = async () => {
        const listagem = await listaService()
        if(listagem){
            setListaTimes(listagem.data.data)
        }
    };

    useEffect(() => {
        listaEAtualiza()
    }, []);


    return (
        <>
            <TimeForm salvarTime={ async () => {
                 
                 axios.get("http://localhost:4000/times")
                 .then(function (response) {

                     setListaTimes(response.data.data)
                 });
                
         }}
            />
            <TimesList times={listaTimes} />
        </>
    )

}