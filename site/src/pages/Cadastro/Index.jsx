import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Importar hook de navegação
import axios from 'axios';
import BotaoPrimario from '../../components/BotaoPrimario';
import EntradaTexto from '../../components/EntradaTexto';
import './styles.css';

function Cadastro() {
  const navigate = useNavigate(); // ✅ Criar função de navegação

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

    if (formulario.password !== formulario.confirmpassword) {
      setResposta('As senhas não coincidem!');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3001/auth/register', formulario);

      if (res.data.message) {
        setResposta(res.data.message);
        setFormulario({
          username: '',
          email: '',
          password: '',
          confirmpassword: ''
        });

        // ✅ Aguarda 1 segundo e redireciona para login
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setResposta(err.response.data.error);
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

        <BotaoPrimario tituloBotao="Cadastrar" />
      </form>

      {resposta && <p className="mensagem-resposta">{resposta}</p>}
    </div>
  );
}

export default Cadastro;
