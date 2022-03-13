


export function questionForm(props){
    console.log(questao)
    alert("Pergunta:"+  Questao.Pergunta + " Resposta:"+Questao.Resposta)

    const Questao = props.Questao
    const Resposta = props.Resposta

    const random = Math.floor(Math.random() * Questao.length)

   

    const [exibirQuestao, setExibirQuestao] = useState(false)

    const [exibirResposta, setExibirResposta] = useState(false)


    return(
        <>
        {exibirQuestao == true && Questao.Pergunta}
                {exibirResposta === true && Pergunta.Resposta}
                <br/>
                {exibirQuestao === false && <button onClick={() => setExibirQuestao(true)}>Exibir questao</button>}
                {exibirResposta === false && exibirQuestao === true &&<button onClick={() => setExibirResposta(true)}>Resposta</button>}
        </>
    )
}