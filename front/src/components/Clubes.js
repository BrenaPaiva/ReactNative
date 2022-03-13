export default function Clubes(props) {
    const nomes = props.clubes;
    const lista = nomes.map((nome) => 
        <li>
            {nome}
        </li>
    )
        
    return (
        <div>
            <h3>Times de Futebol</h3>
            <ul>{lista}</ul>
        </div>
    )
}