import './styles.css'

function BotaoPrimario({tituloBotao, evento=()=>{}}){
    return(
    <button onClick={evento}>{tituloBotao}</button>
    );
}

export default BotaoPrimario;