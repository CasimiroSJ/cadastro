import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from "../../api/login";
import EntradaTexto from "../../components/EntradaTexto";
import BotaoPrimario from "../../components/BotaoPrimario";
import './styles.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resposta, setResposta] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await login(email, password);

    if (result.success) {
      setResposta(result.message);
      // Redirecionar após login bem-sucedido
      //window.location.href = "../Dashboard/Dashboard";
       setTimeout(() => {
          navigate('/Dashboard');
        }, 0);
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
          <BotaoPrimario tituloBotao="Entrar" />
          <BotaoPrimario
            tituloBotao="Cadastrar"
            evento={() => window.open("/cadastro", "_self")}
          />
        </div>
      </form>

      {resposta && <p className="mensagem-resposta">{resposta}</p>}
    </div>
  );
}

export default Login;
