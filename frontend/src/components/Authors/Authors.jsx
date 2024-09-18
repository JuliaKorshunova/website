import './Authors.css'
import React, { useEffect, useState } from 'react';
import podcastPicture from './../../img/image 293.jpg'
import CardForAuthors from '../card/CardForAuthors';
export default function Authors() { 

    const authorsData = [ 
        {  
            id: 1,  
            name: 'Александра Митрошина',  
            subscribers: '359 тыс. подписчиков',  
            episodes: '233 выпуска',  
            picture: podcastPicture,  
            testDisabled: false 
        }, 
        {  
            id: 2,  
            name: 'Александра Митрошина',  
            subscribers: '250 тыс. подписчиков',  
            episodes: '150 выпусков',  
            picture: podcastPicture,  
            testDisabled: false  
        },
        {  
            id: 3,  
            name: 'Александра Митрошина',  
            subscribers: '120 тыс. подписчиков',  
            episodes: '75 выпусков',  
            picture: podcastPicture,  
            testDisabled: false  
        },
        {  
            id: 4,  
            name: 'Александра Митрошина',  
            subscribers: '215 тыс. подписчиков',  
            episodes: '98 выпусков',  
            picture: podcastPicture,  
            testDisabled: false  
        },
        {  
            id: 5,  
            name: 'Александра Митрошина',  
            subscribers: '180 тыс. подписчиков',  
            episodes: '50 выпусков',  
            picture: podcastPicture,  
            testDisabled: false  
        },
        {  
            id: 6,  
            name: 'Александра Митрошина',  
            subscribers: '300 тыс. подписчиков',  
            episodes: '120 выпусков',  
            picture: podcastPicture,  
            testDisabled: false  
        },
        {  
            id: 7,  
            name: 'Александра Митрошина',  
            subscribers: '90 тыс. подписчиков',  
            episodes: '60 выпусков',  
            picture: podcastPicture,  
            testDisabled: false  
        },
        {  
            id: 8,  
            name: 'Александра Митрошина',  
            subscribers: '450 тыс. подписчиков',  
            episodes: '150 выпусков',  
            picture: podcastPicture,  
            testDisabled: false  
        },
        {  
            id: 9,  
            name: 'Александра Митрошина',  
            subscribers: '200 тыс. подписчиков',  
            episodes: '85 выпусков',  
            picture: podcastPicture,  
            testDisabled: false  
        },
        {  
            id: 10,  
            name: 'Александра Митрошина',  
            subscribers: '300 тыс. подписчиков',  
            episodes: '110 выпусков',  
            picture: podcastPicture,  
            testDisabled: false  
        }, 
    ];
    

    return (     
        <div className="card-container">  
            {authorsData.map(author => (
        <CardForAuthors key={author.id} author={author} /> // Передаем автора как проп
      ))}    
        </div>  
    );   
}