import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import History from './pages/history';
import Contact from './pages/contact';
import FooterBar from './components/footer/footer'


function App(){
  return(
      <div className="page-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home"/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      <FooterBar/>
      </div>
  );
}

export default App;