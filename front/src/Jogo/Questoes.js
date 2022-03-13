
import React, { useState } from "react";



export default function Questoes(props){
    
    const questoes = props.questoes

    const random = Math.floor(Math.random() * questoes.length)

    const [questao, setQuestao] = useState(questoes[random])

    const [exibirQuestao, setExibirQuestao] = useState(false)

    const [exibirResposta, setExibirResposta] = useState(false)

            return(
                <>
                {exibirQuestao == true && questao.questao}
                {exibirResposta === true && questao.resposta}
                <br/>
                {exibirQuestao === false && <button onClick={() => setExibirQuestao(true)}>Exibir questao</button>}
                {exibirResposta === false && exibirQuestao === true &&<button onClick={() => setExibirResposta(true)}>Resposta</button>}


                </>

            );

        
    }


    


