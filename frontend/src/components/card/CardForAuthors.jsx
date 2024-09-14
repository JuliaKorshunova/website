import './CardForAuthors.css'
import MainButton2 from '../Button/MainButton2';
import React, { useState } from 'react';
export default function CardForAuthors({ author }) {  
    const { name, subscribers, episodes, picture, testDisabled } = author; // Деструктурируем здесь

    const [isHovered, setIsHovered] = useState(false); 
    const handleMouseEnter = () => setIsHovered(true); 
    const handleMouseLeave = () => setIsHovered(false);

    const [pressed, setPressed] = useState(false); 
    const isPressed = () => setPressed(true); 

    return ( 
        <section className="card"> 
            <div className="blackblock"> 
                <div className="whiteblock"> 
                    <img src={picture} className="photo" alt={name} /> 
                    <div className="name">{name}</div> 
                    <div className="subsrubes">{subscribers}</div> 
                    <div className="content">{episodes}</div> 
                    <div className='btnn'> 
                        {testDisabled ? ( 
                            <div className='pocastdis'> 
                                <MainButton2 disabled={true}>Слушать</MainButton2> 
                                <p> Чтобы стать подкастером необходимо набрать подписчиков</p> 
                            </div> 
                        ) : isHovered ? ( 
                            <div className='bgforbtn'> 
                                <MainButton2 
                                    onMouseEnter={handleMouseEnter} 
                                    onMouseLeave={handleMouseLeave} 
                                    disabled={testDisabled}> 
                                    Отменить подписку 
                                </MainButton2> 
                            </div>
                        ) : ( 
                            <MainButton2 
                                onClick={isPressed} 
                                onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave} 
                                disabled={testDisabled}> 
                                Слушать 
                            </MainButton2>
                        )} 
                    </div> 
                </div> 
            </div> 
        </section> 
    );     
}