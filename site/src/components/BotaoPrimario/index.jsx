import './styles.css';

function BotaoPrimario({ tituloBotao, evento = () => {} }) {
  return (
    <button type="submit" onClick={evento}>
      {tituloBotao}
    </button>
  );
}

export default BotaoPrimario;
