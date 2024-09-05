import React, { useState, useEffect } from 'react';
import './Podkasts.css';
import Card from '../card/Card'; 
import TheListenButton from '../Button/TheListenButton'

export default function Podkasts() {
  const [cards, setCards] = useState([]);
  const [testDeisabled, setTestDisabled] = useState(false); 
  const [isHovered, setIsHovered] = useState(false); 
  const [countofsubcribeswenedd, setCountOfSubscribersNeeded] = useState(100); 
  const [ispressed, setPressed] = useState(() => () => console.log('Кнопка нажата')); 
 
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

  return (
    <div className="card-container">
      {cards.map((card, index) => ( 
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
    button={ 
      <TheListenButton 
        testDisabled={testDeisabled} 
        countOfSubscribersNeeded={countofsubcribeswenedd} 
        buttonCount={1} 
        onClick={ispressed}  
      >
        {card.buttonText} 
      </TheListenButton> 
    } 
  /> 
))}
    </div>
  );
}