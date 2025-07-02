import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Index";
import Cadastro from "../pages/Cadastro/Index";
import Conteudo from "../pages/Inicial/conteudo";
import Principal from "../pages/Inicial/index";
import Dashboard from "../pages/dashboard/Dashboard"


function GerenciadorRota(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Principal/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default GerenciadorRota;