import React, { useState, useEffect } from 'react';
import './Podkasts.css';
import Card from '../card/Card'; 
import TheListenButton from '../Button/TheListenButton'

export default function Podkasts({ searchTerm }) { 
    const [cards, setCards] = useState([]); 

    useEffect(() => { 
        const fetchCards = async () => { 
            try { 
                const response = await fetch('/api/cards'); 
                const data = await response.json(); 
                setCards(data); 
            } catch (error) { 
                console.error("Ошибка при загрузке карточек:", error); 
            } 
        }; 
        fetchCards(); 
    }, []); 

    const filteredCards = cards.filter(card =>   
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    ); 

    return (     
        <div className="card-container">  
            {filteredCards.map((card, index) => (      
                <Card      
                    key={index}      
                    title={card.title}      
                    img={card.img}      
                    subtitle={card.subtitle}      
                    hashtags={card.hashtags}      
                    time={card.time}     
                    ellipse={card.ellipse}      
                    canal={card.canal}      
                    channel={card.channel}      
                />      
            ))}     
        </div>  
    );   
}