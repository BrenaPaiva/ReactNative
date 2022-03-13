import { Link } from "react-router-dom";



export default function home(props) {
    return (
        <>
            <div>
            <b>Cemitério Espacial</b>

            </div>
            
            <nav>
                <Link to="pagina-um/Estrela" >Estrela Morta</Link>
            </nav>
            <nav>
                <Link to="pagina-dois/Buraco" >Buraco Negro</Link>
            </nav>
            <nav>
                <Link to="pagina-tres/" >Anã Branca</Link>
            </nav>
            <nav>
                <Link to="jogo/" >Acesse o jogo</Link>
            </nav>

        </>)
}