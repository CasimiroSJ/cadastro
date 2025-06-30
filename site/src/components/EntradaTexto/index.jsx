import './styles.css'

function EntradaTexto(propsValues){
    return(
        <input type={propsValues.tipoTexto} placeholder={propsValues.textoEscondido}
        id={propsValues.idEntrada}
        name={propsValues.nomeEntrada}
        />
    );
}

export default EntradaTexto;