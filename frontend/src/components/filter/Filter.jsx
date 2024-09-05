import React, { useState,Component } from 'react';
import './Filter.css'
import ellipse from './../../img/Ellipse 198.svg'
import vector1 from './../../img/Vector 15.svg'
import vector2 from './../../img/Vector 16.svg'

export default function Header (){ 

    return( 
        <div className="container__filter">
            <div className="zagolov1">
                Фильтрация
                </div>
            <div className="category">
                <div className="prodolzhit">
                    <div className="zagolov2">
                        Продолжительность
                    </div>
                        <img src = {vector1} className="vector1"/>
                        <img src = {vector2} className="vector2"/>
                        <div className="time1">15 мин.</div>
                        <div className="time2">40 мин.</div>
                </div>  
            
                <div className="upor"> 
                    <div className="radbutton">По дате загрузки</div> 
                    <div className="radbutton">По продолжительности</div> 
                    <div className="radbutton">По релевантности</div> 
                </div>
            <div className="cat">
            <div className="zagolov3">Категории</div>
            </div>
        </div>
        </div>
    ) 
}