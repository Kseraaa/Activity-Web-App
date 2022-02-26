import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import History from './pages/history';
import Register from './pages/register';
import Newregis from './pages/newregis'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/newregis" element={<Newregis/>}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;