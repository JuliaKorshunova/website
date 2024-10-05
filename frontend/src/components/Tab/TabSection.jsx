
import SecondButtonForTabs from "../Button/SecondButtonForTabs";

import './TabSection.css';
import { useState, useRef } from "react";

export default function TabsSection({Active, onChange}) {


    

    const[isHovered1, setIsHovered1]=useState(false)

    const handleMouseEnter1= () => {
      setIsHovered1(true);
      
    };
    const handleMouseLeave1 = () => {
        setIsHovered1(false);
       
 
      };

      const[isHovered2, setIsHovered2]=useState(false)
    const handleMouseEnter2= () => {
      setIsHovered2(true);
   
    };
    const handleMouseLeave2 = () => {
        setIsHovered2(false);
  
      };

      const[isHovered3, setIsHovered3]=useState(false)
      const handleMouseEnter3= () => {
        setIsHovered3(true);
    
      };
      const handleMouseLeave3= () => {
        setIsHovered3(false);
     
        };



      
        const buttons = [
            { 
                value: 'pod', 
                label: 'Подкасты', 
                handleMouseEnter: handleMouseEnter1, 
                handleMouseLeave: handleMouseLeave1, 
                isHovered: isHovered1 
            },
            { 
                value: 'kurs', 
                label: 'Курсы', 
                handleMouseEnter: handleMouseEnter2, 
                handleMouseLeave: handleMouseLeave2, 
                isHovered: isHovered2 
            },
            { 
                value: 'autor', 
                label: 'Авторы', 
                handleMouseEnter: handleMouseEnter3, 
                handleMouseLeave: handleMouseLeave3, 
                isHovered: isHovered3,
                image:''
            },
           
          
        ];
    return (
        
        <><div >
                


    <div className="tab">
    {buttons.map((button) => (
        <div key={button.value}>
            {/* Проверка на активное состояние */}
            {Active === button.value ? (
                <SecondButtonForTabs
                    isActive={true}
                    onMouseEnter={button.handleMouseEnter}
                    onMouseLeave={button.handleMouseLeave}
                    onClick={() => onChange(button.value)}
                >
                    {button.label}
                </SecondButtonForTabs>
            ) : button.isHovered ? (
                // Если кнопка наведена, но не активна
                <SecondButtonForTabs
                    isActive={false}
                    onMouseEnter={button.handleMouseEnter}
                    onMouseLeave={button.handleMouseLeave}
                    onClick={() => onChange(button.value)}
                >
                    {button.label}
                </SecondButtonForTabs>
            ) : (
                // Все остальные состояния (не активна и не наведена)
                <div className="bgforbtn3">
                    <SecondButtonForTabs
                        isActive={false} // можно также установить false для наглядности
                        onMouseEnter={button.handleMouseEnter}
                        onMouseLeave={button.handleMouseLeave}
                        onClick={() => onChange(button.value)}
                    >
                        {button.label}
                    </SecondButtonForTabs>
                </div>
            )}
        </div>
    ))}
</div>
            
        </div></>
    )
}