import React, { useEffect, useState } from 'react'; 
import './Podkasts.css'; 
import Card from '../card/CardForPodcast'; 

export default function Podkasts({ searchTerm }) {  
    const [cards, setCards] = useState([]);  

    useEffect(() => {  
        const fetchCards = async () => {  
            try {  
                const response = await fetch('/cardsData.json'); // Путь к вашему JSON файлу
                if (!response.ok) {
                    throw new Error('Не удалось загрузить данные');
                }
                const data = await response.json();  
                setCards(data.cards);  // Устанавливаем карточки из поля "cards"
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
            {filteredCards.map((card) => (       
                <Card       
                    key={card.id}  // Используйте id вместо index
                    title={card.title}       
                    img={card.img}       
                    subtitle={card.subtitle}       
                    hashtags={card.hashtags}       
                    time={card.time}      
                    ellipse={card.ellipse}       
                    canal={card.canal}       
                    channel={card.channel}       
                    buttonText={card.buttonText} // Если есть такая пропс
                />       
            ))}      
        </div>   
    );    
}