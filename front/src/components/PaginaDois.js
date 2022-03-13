import { Link } from "react-router-dom";
import { useState } from "react";


export default function PaginaUm(props) {

    const [descricao, setDescricao] = useState("Carinae")
    const [time, setTime] = useState("Eta")
   
    
    const [resultado, setResultado] = useState("Menor buraco negro descoberto")

    return (
        <>
            <h3>Buraco Negro</h3>
            Unicórnio {resultado}
            {time} {descricao}
            <button onClick={() => {
                setTime(" Descrição: ")
                setDescricao(descricao + " Não necessariamente uma estrela, mas poeira de gás ")}}>
            Ver buraco
            </button>

            <nav>
                <Link to="/" >Voltar</Link>
            </nav>

        </>)
}