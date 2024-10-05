import React, { useState } from 'react';  
import { NavLink } from 'react-router-dom'; // Импортируем NavLink
import logoImg from './../../img/лого.svg';  
import user from './../../img/usr_btn.svg';  
import './header.css';  
import SecondImgButton from '../Button/SecondImgButton';  
import searchImg from './../../img/search.svg'

export default function Header({ onSearchTermChange }) {    
    const [searchTerm, setSearchTerm] = useState('');   

    const handleSearchChange = (e) => {   
        setSearchTerm(e.target.value);  
    };   

    const handleSearchClick = () => {  
        onSearchTermChange(searchTerm);  
    };  

    const [isHovered, setIsHovered] = useState(false);  
    const handleMouseEnter = () => {  
        setIsHovered(true);  
    };  

    const handleMouseLeave = () => {  
        setIsHovered(false);  
    };  

    return (     
        <header className="header">
            <div className="logo">
                <img src={logoImg} alt='logo' />
            </div>
            <nav className="menu">
                <div className="frame4">
                    <NavLink
                        to="/"
                        className="gl"
                        activeClassName="active"
                        exact
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        to="/subscriptions"
                        className="sub"
                        activeClassName="active"
                    >
                        Мои подписки
                    </NavLink>
                    <NavLink
                        to="/library"
                        className="libr"
                        activeClassName="active"
                    >
                        Библиотека
                    </NavLink>
                    <NavLink
                        to="/login"
                        className="libr"
                        activeClassName="active"
                    >
                        Вход
                    </NavLink>
                </div>
                <img src={user} className="usr___btn" alt='user' />
            </nav>
         <div className="search-container">
            <div className="search">
                <div className="rectangle_15">
                    <input
                        className="rectangle_16"
                        placeholder="Введите запрос"
                        onChange={handleSearchChange}
                    />
                   <div className='test'>
                   { isHovered === true ? (
                       <SecondImgButton
                
                    
                       isImg={true}
                       isActive={false}
                       onMouseEnter={handleMouseEnter}
                       onMouseLeave={handleMouseLeave}
                   >
                       <img className="image-class" src={searchImg} alt={ 'Изображение кнопки'} />
                   </SecondImgButton>) : 
                   (
                      <div className="bgforbtnn">  
                      <SecondImgButton
                
                    
                       isImg={true}
                       isActive={false}
                       onMouseEnter={handleMouseEnter}
                       onMouseLeave={handleMouseLeave}
                   >
                       <img className="image-class" src={searchImg} alt={ 'Изображение кнопки'} />
                   </SecondImgButton>
                   </div>)}
                    </div>
                </div>
            </div>
            </div>
        </header>
    );
};