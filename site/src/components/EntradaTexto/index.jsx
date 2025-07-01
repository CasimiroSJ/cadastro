import './styles.css';

function EntradaTexto(propsValues) {
  return (
    <input
      type={propsValues.tipoTexto}
      placeholder={propsValues.textoEscondido}
      id={propsValues.idEntrada}
      name={propsValues.nomeEntrada}
      onChange={propsValues.aoMudar}  // <<< ESSENCIAL para funcionar com o formulário
      required
    />
  );
}

export default EntradaTexto;
