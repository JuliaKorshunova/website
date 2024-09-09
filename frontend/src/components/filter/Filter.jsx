import React, { useState,Component } from 'react';
import './Filter.css'
import ellipse from './../../img/Ellipse 198.svg'
import vector1 from './../../img/Vector 15.svg'
import vector2 from './../../img/Vector 16.svg'

export default function Filter() {
    const [selectedFilter, setSelectedFilter] = useState('date'); // Начальное состояние

    // Функция для изменения состояния при выборе фильтра
    const handleChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    return (
        <>
            <div className="zagolov1">Фильтрация</div>
            <div className="category">
                <div className="prodolzhit">
                    <div className="zagolov2">Продолжительность</div>
                    <img src={vector1} className="vector1" alt="Vector 1" />
                    <img src={vector2} className="vector2" alt="Vector 2" />
                    <div className="time1">15 мин.</div>
                    <div className="time2">40 мин.</div>
                </div>

                <div className="upor">
                    <label className="radbutton">
                        <input
                            type="radio"
                            name="filter" // Добавим атрибут name для группировки
                            value="date"
                            checked={selectedFilter === "date"}
                            onChange={handleChange}
                        />
                        По дате загрузки
                    </label>
                    <label className="radbutton">
                        <input
                            type="radio"
                            name="filter"
                            value="duration"
                            checked={selectedFilter === "duration"}
                            onChange={handleChange}
                        />
                        По продолжительности
                    </label>
                    <label className="radbutton">
                        <input
                            type="radio"
                            name="filter"
                            value="relevance"
                            checked={selectedFilter === "relevance"}
                            onChange={handleChange}
                        />
                        По релевантности
                    </label>
                </div>

                <div className="cat">
                    <div className="zagolov3">Категории</div>
                </div>
            </div>
        </>
    );
}