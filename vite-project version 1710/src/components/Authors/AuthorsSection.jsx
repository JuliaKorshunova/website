import './AuthorsSection.css';  
import React, { useEffect, useState } from 'react';  
import OneAuthor from './OneAuthor/OneAuthor';


export default function AuthorsSection() {

   

    const [podcasterData, SetpodcasterData] = useState([]);

    useEffect(() => {
        // Замените 'data.json' на путь к вашему JSON-файлу
        fetch('/authorsData.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => SetpodcasterData(data))
            .catch((error) => console.error('Ошибка при загрузке данных:', error));
    }, []);

    return (
        <div className='author-card'>
            {podcasterData.map((pod, index) => (
                <OneAuthor 
                    key={index} // Не забудьте добавить ключ для каждого элемента списка
                    name={pod.name} 
                    subscribers={pod.subscribers}  
                    episodes = {pod.episodes}
                    image1={pod.image1} // Передаем первое изображение
                    image2={pod.image2} // Передаем второе изображение
                    image3={pod.image3} // Передаем третье изображение
                />
            ))}
        </div>
    )
}