import { Link } from "react-router-dom";
import { useState } from "react";
import TimeForm from "../Forms/TimeForm";


export default function PaginaUm(props) {

    const [descricao, setDescricao] = useState("Carinae")
    const [time, setTime] = useState("Eta")
   
    
    const [resultado, setResultado] = useState()

    return (
        <>
            <h3>Estrela Morta</h3>
            Esta estrela está morta{resultado}
            {time} {descricao}
            <button onClick={() => {
                setTime(" Descrição: ")
                setDescricao(descricao + " Não necessariamente uma estrela, mas poeira de gás ")
                
            }}>
            Ver estrela
            </button>
            <TimeForm/>
            <nav>
                <Link to="/" >Voltar</Link>
            </nav>

        </>)
}