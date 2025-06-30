import { useState } from "react";
import { login } from "../../api/login";
import EntradaTexto from "../../components/EntradaTexto";
import BotaoPrimario from "../../components/BotaoPrimario";
import './styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resposta, setResposta] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await login(email, password);

    if (result.success) {
      setResposta(result.message);
      // Redirecionar, se quiser
      // window.location.href = "/dashboard";
    } else {
      setResposta(result.message);
    }
  };

  return (
    <div className="login-conteiner">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <EntradaTexto
          tipoTexto="email"
          textoEscondido="Digite seu email"
          idEntrada="email"
          nomeEntrada="email"
          aoMudar={(e) => setEmail(e.target.value)}
        />
        <EntradaTexto
          tipoTexto="password"
          textoEscondido="Digite sua senha"
          idEntrada="password"
          nomeEntrada="password"
          aoMudar={(e) => setPassword(e.target.value)}
        />
        <div className="botao-conteiner">
          <BotaoPrimario tituloBotao="Entrar" tipo="submit" />
          <BotaoPrimario
            tituloBotao="Cadastrar"
            evento={() => window.open("/cadastro", "_self")}
          />
        </div>
      </form>
      {resposta && <p>{resposta}</p>}
    </div>
  );
}

export default Login;
