import './styles.css';
import { useState } from 'react';
import axios from 'axios';
import EntradaTexto from '../../components/EntradaTexto';
import BotaoPrimario from '../../components/BotaoPrimario';

function Cadastro() {
  const [formulario, setFormulario] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const [resposta, setResposta] = useState('');

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://codexa-1.onrender.com/auth/register', formulario);
      setResposta(res.data.msg || 'Cadastro realizado com sucesso!');
    } catch (err) {
      if (err.response?.data?.msg) {
        setResposta(err.response.data.msg);
      } else {
        setResposta('Erro na conexão com o servidor.');
      }
    }
  };

  return (
    <div className="cadastro-conteiner">
      <h2>Tela de Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <EntradaTexto
          tipoTexto="text"
          textoEscondido="Digite seu nome"
          idEntrada="username"
          nomeEntrada="username"
          aoMudar={handleChange}
        />

        <EntradaTexto
          tipoTexto="email"
          textoEscondido="Digite seu email"
          idEntrada="email"
          nomeEntrada="email"
          aoMudar={handleChange}
        />

        <EntradaTexto
          tipoTexto="password"
          textoEscondido="Digite sua senha"
          idEntrada="password"
          nomeEntrada="password"
          aoMudar={handleChange}
        />

        <EntradaTexto
          tipoTexto="password"
          textoEscondido="Confirme sua senha"
          idEntrada="confirmpassword"
          nomeEntrada="confirmpassword"
          aoMudar={handleChange}
        />

        <BotaoPrimario tituloBotao="Cadastrar" tipo="submit" />
      </form>

      {resposta && <p>{resposta}</p>}
    </div>
  );
}

export default Cadastro;
