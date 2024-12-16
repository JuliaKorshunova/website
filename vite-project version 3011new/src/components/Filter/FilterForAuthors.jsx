import React, { useState } from 'react';  
import './FilterForAuthors.css';  
import ButtonTabGreenForFilter from '../Button/ButtonTab/ButtonTabGreenForFilter';
import donetab_for_filter from '/donetabtofilter.png';
import CustomRadioButton from '../Button/RadioButton/CustomRadioButton';

export default function FilterForAuthors() {    
  const [selectedOption, setSelectedOption] = useState(null);
  const [sliderValue, setSliderValue] = useState(200); // значение ползунка

  const options = [
    { id: 1, label: 'По дате регистрации', hasArrow: true, arrowDirection: 'down' },
    { id: 2, label: 'По дате регистрации', hasArrow: true, arrowDirection: 'up' },
    { id: 3, label: 'По количеству подписчиков', hasArrow: true, arrowDirection: 'down' },
    { id: 4, label: 'По количеству подписчиков', hasArrow: true, arrowDirection: 'up' },
    { id: 5, label: 'По количеству выпусков', hasArrow: true, arrowDirection: 'down' },
    { id: 6, label: 'По количеству выпусков', hasArrow: true, arrowDirection: 'up' },
  ];

  const handleSelect = (id) => {
    setSelectedOption(id);
  };

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (     
    <>
      <div className="filter">
        <div className="text_to_filter">
          Фильтрация
        </div>

        <div className="frame___8794">
          {/* Ползунок Количество выпусков */}
          <div className="quantity">
            <div className="text_to_quantity">Количество выпусков</div>

            {/* Серый трек */}
            <div className="scrollBar">
              <div 
                className="scrollBarGreen" 
                style={{ width: `${(sliderValue / 400) * 90}%` }} // Динамическая ширина для зеленой полосы
              ></div>
            </div>

            {/* Невидимый ползунок */}
            <input 
              type="range" 
              min="1" 
              max="400" 
              value={sliderValue} 
              className="slider" 
              onChange={handleSliderChange} 
            />

            {/* Фиксированный начальный кружок */}
            <img 
              src="/Ellipse197.svg" 
              alt="Start Ellipse" 
              className="ElipseGreen_1" 
            />

            {/* Динамический конечный кружок */}
            <img 
              src="/Ellipse197.svg" 
              alt="Moving Ellipse" 
              className="ElipseGreen_2" 
              style={{ left: `${15 + (sliderValue / 400) * 230}px` }} // Позиция второго кружка
            />

            {/* Тексты для отображения количества */}
            <div className="text_to_quntity_start">1</div>

            {/* Перемещающийся текст */}
            <div 
              className="text_to_quntity_end" 
              style={{ left: `${15 + (sliderValue / 400) * 230}px` }} // Позиция текста изменяется как у второго кружка
            >
              {sliderValue}
            </div>
          </div>

          <div className="upor___">

          <div className="text_to_upor">
            Упорядочить
          </div>

          <div className="frame___8788">
            {options.map((option) => (
              <div key={option.id} className="radio__btn" style={{ display: 'flex', alignItems: 'center' }}>
                <CustomRadioButton
                  id={option.id}
                  isSelected={selectedOption === option.id}
                  onSelect={handleSelect}
                />
                <span className="radio-label">{option.label}</span>

                {/* Условие для отображения стрелки */}
                {option.hasArrow && (
                  <img 
                    src={option.arrowDirection === 'up' ? '/ArrowUp.svg' : '/ArrowDown.svg'}
                    alt={option.arrowDirection === 'up' ? 'Arrow Up' : 'Arrow Down'}
                    className="arrow-icon"
                  />
                )}
              </div>
            ))}
          </div>
          </div>

          <div className="kategor___">

          <div className="text_to_kategor">
            Категории
          </div>

          <div className="Frame8846">
            <ButtonTabGreenForFilter icon={donetab_for_filter}>Криминал</ButtonTabGreenForFilter>
            <ButtonTabGreenForFilter icon={donetab_for_filter}>Секс</ButtonTabGreenForFilter>
            <ButtonTabGreenForFilter icon={donetab_for_filter}>Дизайн</ButtonTabGreenForFilter>
            <ButtonTabGreenForFilter icon={donetab_for_filter}>Образование</ButtonTabGreenForFilter>
            <ButtonTabGreenForFilter icon={donetab_for_filter}>Криминал</ButtonTabGreenForFilter>
            <ButtonTabGreenForFilter icon={donetab_for_filter}>Драма</ButtonTabGreenForFilter>
            <ButtonTabGreenForFilter icon={donetab_for_filter}>Воспитание</ButtonTabGreenForFilter>
            <ButtonTabGreenForFilter>...</ButtonTabGreenForFilter>
          </div>

          </div>
        </div>
      </div>
    </>
  );
};