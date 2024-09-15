import React, { useState,Component } from 'react';
import logoImg from '/лого.png'
import searchImg from '/search.png'
import './Header.css'
import SecondImgButton from '../Button/SecondImgButton';


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
    const[isHovered, setIsHovered]=useState(false)
    const handleMouseEnter= () => {
      setIsHovered(true);
  
    };
    const handleMouseLeave= () => {
        setIsHovered(false);
       

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
        </header>   
    );   
}