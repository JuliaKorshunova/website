import './Authors.css';  
import React, { useEffect, useState } from 'react';  
import CardForAuthors from '../card/CardForAuthors';  

export default function Authors() { 
    const [authors, setAuthors] = useState([]); // Состояние для хранения авторов  

    useEffect(() => { 
        fetch('/authorsData.json')  
            .then((response) => { 
                if (!response.ok) { 
                    throw new Error('Network response was not ok'); 
                } 
                return response.json();  
            }) 
            .then((data) => setAuthors(data.authors)) // Здесь используем setAuthors(data.authors) 
            .catch((error) => console.error('Ошибка при загрузке данных:', error));  
    }, []); 

    return ( 
        <>   
            <div className="card-container">     
                {authors.map(author => (   
                    <CardForAuthors key={author.id} author={author} /> // Передаем автора как проп   
                ))}       
            </div>     
        </>     
    );      
}
