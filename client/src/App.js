import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import History from './pages/history';
import Contact from './pages/contact';
import AdminHome from './pages/createactivity';
import ScrollToTop from './components/backtotop/scroll-index';
import ScrollIndicator from './components/scrollindicator/indicator-index';
import Login from './pages/login';
import Register from './pages/register';
import ActivityAdmin from './pages/activityadmin';
import UserName from './pages/username';
import OneUser from './pages/oneuser'
import PubHome from './pages/acthome';

function App(){
  return(
    <>
        <ScrollIndicator/>
        <ScrollToTop/>
        <div className="page-container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate replace to="/home"/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/history" element={<History/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/publichome" element={<PubHome/>}/>

              <Route path="/adminhome" element={<AdminHome/>}/>
              <Route path="/username" element={<UserName/>}/>
              <Route path="/oneuser" element={<OneUser/>}/>

              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/activityadmin" element={<ActivityAdmin/>}/>
            </Routes>
          </BrowserRouter>
        </div>
    </>
  );
}

export default App;