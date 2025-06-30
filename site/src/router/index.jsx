import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Index";
import Cadastro from "../pages/Cadastro/Index";
import Conteudo from "../pages/Inicial/conteudo";
import Principal from "../pages/Inicial/index";


function GerenciadorRota(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/index" element={<Principal/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default GerenciadorRota;