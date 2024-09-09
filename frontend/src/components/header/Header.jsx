import React, { useState,Component } from 'react';
import logoImg from './../../img/лого.svg'
import searchImg from './../../img/search.svg'
import './header.css'


export default function Header({ onSearchTermChange }) {  
    const [searchTerm, setSearchTerm] = useState('');  //searchTerm хранит текущее значение текста, введенного пользователем в поле поиска

    //обработчик изменений(Срабатывает каждый раз, когда пользователь вводит текст в поле поиска)
    const handleSearchChange = (e) => { 
        setSearchTerm(e.target.value); // Обновляем searchTerm
    }; 

    //Обработчик клика(Cрабатывает при нажатии на кнопку поиска)
    const handleSearchClick = () => {
        onSearchTermChange(searchTerm); // Передаем текущее значение searchTerm в родительский компонент через функцию onSearchTermChange
    };

    return (   
        <header className="header">   
            <div className="logo">   
                <img src={logoImg} alt='logo' /> 
            </div>    
            <nav className="menu">   
                <div className="frame4">  
                    <a href="/" className="gl">Главная</a>   
                    <a href="/" className="sub">Мои подписки</a>   
                    <a href="/" className="libr">Библиотека</a>   
                </div>  
            </nav>   
            <div className="search">   
                <div className="rectangle_15">   
                    <input   
                        className="rectangle_16"   
                        placeholder="Введите запрос"   
                        onChange={handleSearchChange}  
                    />  
                    <button className="search_btn" onClick={handleSearchClick}> 
                        <img src={searchImg} alt="Search" className="search_picture" /> 
                    </button>  
                </div> 
            </div> 
        </header>   
    );   
}