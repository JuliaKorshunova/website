import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Замените Switch на Routes
import Header from "./components/header/Header";   
import Library from "./components/library/Library";   
import Home from './components/Home/Home';    
import MySubscriptions from './components/MySubscriptions/MySubscriptions';    
import './index.css'; 
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import PageRegister from './components/Register/PageRegister';
import PasswordRecovery from './components/PasswordRecovery/PasswordRecovery';
import PasswordRecoveryTransition from './components/PasswordRecovery/PasswordRecoveryTransition';


export default function App() {   


    return (   
        <Router>  
            <div className="wrapper">   
                <Routes> 
                    <Route path="/" element={<Home />} />  {/* Замените component на element */}
                    <Route path="/subscriptions" element={<MySubscriptions />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/login" element={<Login />} /> {/* Добавляем маршрут для входа */}
                    <Route path="/register" element={<PageRegister />} /> {/* Добавляем маршрут для регистрации */}
                    <Route path="/reset-password" element={<PasswordRecovery/>} />
                    <Route path="/reset-password-transition" element={<PasswordRecoveryTransition />} />
                </Routes>  
            </div>  
        </Router>  
    );   
}