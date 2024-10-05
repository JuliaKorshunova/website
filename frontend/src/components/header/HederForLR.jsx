
import logoImg from './../../img/лого.svg'; 
import React from 'react';  

export default function HeaderForLR() {    
   

    return ( 

        <header className="header">
            <div className="logo">
                <img src={logoImg} alt='logo' />
            </div>
           
        </header>
    );
};