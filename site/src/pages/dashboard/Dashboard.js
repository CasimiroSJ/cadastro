import './styles.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Dashboard(){
    const [saire, setSair] = useState('')
    const navigate = useNavigate();
    function sair(){
       setTimeout(() => {
          navigate('/login');
        }, 0);
    }
        return(
            <div className='dashboard'>
                <h1>Seja-Vindo, Tropa...!</h1>

                <button className='sair' onClick={sair}>Sair</button>

            </div>

        
        );   
}
export default Dashboard;