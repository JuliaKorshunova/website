import React, { useState,Component } from 'react';
import logoImg from './../../img/лого.svg'
import './header.css'
import userImg from './../../img/usr_btn.svg'
import searchImg from './../../img/search_btn.svg'

export default function Header (){ 

    return( 
        <header className = "header"> 
          <div className="logo"> 
         <img src={logoImg} alt ='logo' ></img> 
            </div>  
          <nav className="menu"> 
            <div className="frame4">
                <a href="/" className="gl">Главная</a> 
                <a href="/" className="sub">Мои подписки</a> 
                <a href="/" className="libr">Библиотека</a> 
                </div>
          </nav> 
        </header> 
         
    ) 
}