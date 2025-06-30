import './styles.css'
import'./conteudo'
import Conteudo from './conteudo';
import BotaoPrimario from '../../components/BotaoPrimario';

function Principal(){

    function enviar(){
        alert("Conteudo enviado")
    }
    return(
 <div className='principal'>
        <div className="centro">

        <div className='menu'>
          <div className='logo'>
            <h3>CODEXA.dev</h3>
          </div>
          <div className='item-menu'>
          <BotaoPrimario tituloBotao="Login" evento={()=>{
            window.open("/login", "_self")
        }}/>
          </div>
        </div>

        <div className='form'>
           <h2>Entre em contacto!</h2>
          <form onSubmit={enviar}>
            <div className='items-form'>
              <input type='text' placeholder="Nome"/>
              <input type='text' placeholder="ID"/>
              <input type='text' placeholder="Problema"/>
              <input type='text' placeholder="Solução"/>
              <input type='submit' value={"Enviar"}/>

            </div>
          </form>

        </div>
        </div>

       <Conteudo/>
        </div>

    );
}



export default Principal;