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
import UserName from './pages/username';
import OneUser from './pages/oneuser'
import PubHome from './pages/pubhome';
import PublicContact from './pages/contact2';
import ActivityInfoPage from './pages/activityinfopage';
import { AuthProvider } from './auth';
import Aboutpublicpage from './pages/aboutpublicpage';
import Abouthomepage from './pages/abouthomepage';

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
              <Route path="/aboutpublicpage" element={<Aboutpublicpage/>}/>
              <Route path="/abouthomepage" element={<Abouthomepage/>}/>

              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/activityadmin" element={<ActivityInfoPage/>}/>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;