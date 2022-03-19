import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import History from './pages/history';
import Contact from './pages/contact';
import CreateActivityAdmin from './pages/createactivity';
import ScrollToTop from './components/backtotop/scroll-index';
import ScrollIndicator from './components/scrollindicator/indicator-index';
import Login from './pages/login';
import Register from './pages/register';
import ActivityAdmin from './pages/activityadmin';
import UserName from './pages/username';
import OneUser from './pages/oneuser'
import PubHome from './pages/pubhome';
import PublicContact from './pages/contact2';
import Activityfcfs from './pages/activityfcfs';
import Activitycdd from './pages/activitycdd';
import { AuthProvider } from './auth';

function App(){
  return(
    <>
        <ScrollIndicator/>
        <ScrollToTop/>
        <div className="page-container">
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navigate replace to="/public"/>}/>
                <Route path="/public" element={<PubHome/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/history" element={<History/>}/>
                <Route path="/contact" element={<Contact/>}/>

                <Route path="/createactivity" element={<CreateActivityAdmin/>}/>
                <Route path="/username" element={<UserName/>}/>
                <Route path="/oneuser" element={<OneUser/>}/>
                <Route path="/publiccontact" element={<PublicContact/>}/>

                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/activityadmin" element={<ActivityAdmin/>}/>
                <Route path="/activityfcfs" element={<Activityfcfs/>}/>
                <Route path="/activitycdd" element={<Activitycdd/>}/>
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </div>
    </>
  );
}

export default App;