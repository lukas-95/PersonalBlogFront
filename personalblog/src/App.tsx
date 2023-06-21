import Footer from './components/statics/footer/Footer';
import './App.css'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Navbar from './components/statics/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import CadastroUsuario from "./pages/cadastroUsuario/CadastroUsuario.tsx";
import ListaTema from "./pages/temas/listatema/ListaTema.tsx";
import ListaPostagem from "./pages/postagem/listapostagem/ListaPostagem.tsx";
function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div style={{minHeight: "100vh"}}>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/cadastrousuario" element={<CadastroUsuario/>}/>

                    <Route path="/temas" element={<ListaTema/>}/>

                    <Route path="/postagens" element={<ListaPostagem/>}/>

                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>


            <Footer/>
        </BrowserRouter>
    );

}

export default App
