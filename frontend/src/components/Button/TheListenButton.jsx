import Button from '../Button/MainButton'
import './TheListenButton.css'
import React, { useState} from 'react';

export function TheListenButton({ 
    testDisabled, 
    countOfSubscribersNeeded, 
    buttonCount, 
    onClick 
  }) { 
    // Создаем массив состояний для каждой кнопки 
    const [hoverStates, setHoverStates] = useState(Array(buttonCount).fill(false)); 
  
    const handleMouseEnter = (index) => { 
      setHoverStates((prevStates) => { 
        const newStates = [...prevStates]; 
        newStates[index] = true; // Устанавливаем состояние наведения для указанной кнопки 
        return newStates; 
      }); 
    }; 
  
    const handleMouseLeave = (index) => { 
      setHoverStates((prevStates) => { 
        const newStates = [...prevStates]; 
        newStates[index] = false; // Сбрасываем состояние наведения для указанной кнопки 
        return newStates; 
      }); 
    }; 
  
    return ( 
      <> 
        {testDisabled ? ( 
          <div className='pocastdis'> 
            <Button disabled={false}>Слушать</Button> 
          </div> 
        ) : ( 
          Array.from({ length: buttonCount }, (_, index) => ( 
            <div className='bgforbtn' key={index}> 
              <Button 
                onMouseEnter={() => handleMouseEnter(index)} 
                onMouseLeave={() => handleMouseLeave(index)} 
                onClick={onClick} 
                disabled={testDisabled} 
                className={hoverStates[index] ? 'hovered-button-style' : ''} // Применяем класс при наведении 
              > 
                Слушать 
              </Button> 
            </div> 
          )) 
        )} 
      </> 
    ); 
  }
  
  export default TheListenButton;