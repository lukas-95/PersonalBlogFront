import Footer from './components/statics/footer/Footer';
import './App.css'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Navbar from './components/statics/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import CadastroUsuario from "./pages/cadastroUsuario/CadastroUsuario.tsx";
import ListaTema from "./components/temas/listatema/ListaTema.tsx";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem.tsx";
import CadastroPost from './components/postagens/cadastroPost/CadastroPost.tsx';
import CadastroTema from './components/temas/cadastroTema/CadastroTema.tsx';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem.tsx';
import DeletarTema from './components/temas/deletarTema/DeletarTema.tsx';
import {Provider} from "react-redux";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import store from "./store/store.ts";

function App() {
    return (
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div style={{ minHeight: "100vh" }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastrousuario" element={<CadastroUsuario />} />

              <Route path="/temas" element={<ListaTema />} />

              <Route path="/posts" element={<ListaPostagem />} />

              <Route path="/about" element={<About />} />

              <Route path="/formularioPostagem" element={<CadastroPost />} />

              <Route
                path="/formularioPostagem/:id"
                element={<CadastroPost />}
              />

              <Route path="/formularioTema" element={<CadastroTema />} />

              <Route path="/formularioTema/:id" element={<CadastroTema />} />

              <Route
                path="/deletarPostagem/:id"
                element={<DeletarPostagem />}
              />

              <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </Provider>
    );

}

export default App
