import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminHome from './pages/adminHome';
import ScrollToTop from './components/backtotop/scroll-index';
import ScrollIndicator from './components/scrollindicator/indicator-index';



function AdminApp(){
  return(
    <>
        <ScrollIndicator/>
        <ScrollToTop/>
        <div className="page-container">
          <BrowserRouter>
            <Routes>
              <Route path="/admin" element={<AdminHome/>}/>
            </Routes>
          </BrowserRouter>

        </div>
    </>
  );
}

export default AdminApp;