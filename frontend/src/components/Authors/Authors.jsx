import './Authors.css'
import React, { useEffect, useState } from 'react';
import CardForAuthors from '../card/CardForAuthors'; 
import authorsData from './authorsData';
import Filter from '../filter/Filter';
export default function Authors() {   

return (   
    <>
        <div className="card-container">  
            {authorsData.map(author => (
        <CardForAuthors key={author.id} author={author} /> // Передаем автора как проп
      ))}    
        </div>  

        </>  
    );   
}