import './Home.css';  
import CardForMain from '../card/CardForMain';
import releasephoto from './../../img/Фото.jpg';  
import ellipse from './../../img/Ellipse 196.svg';
import React, { useState, useRef, useEffect } from 'react';
import SecondButton from '../Button/SecondButton';
import SecondButtonBlack from '../Button/SecondButtonBlack.jsx';
import { hashtags } from '../Home/hashtags.js';
import vector22 from './../../img/chevron_left.svg';
import ListenFromTheFirstIssue from '../Tab/ListenFromTheFirstIssue'
import SecondButtonForTabs from "../Button/SecondButtonForTabs";
import Header from '../header/Header.jsx';
export default function Home() {

    const handleClick = () => {
        console.log('Слушать с первого выпуска Clicked!');
    };

    const [podcastReleases, setPodcastReleases] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json'); // Путь к вашему JSON файлу
                if (!response.ok) {
                    throw new Error('Сеть не отвечает');
                }
                const data = await response.json();
                setPodcastReleases(data.releases); // Устанавливаем состояние с загруженными данными
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };

        fetchData(); // Вызов функции
    }, []); // Пустой массив зависимостей: эффект выполнится один раз при монтировании компонента 











    const [overlappingHashtags, setOverlappingHashtags] = useState([]); 


      const hashtagsRef = useRef(null);  
      const imageRef = useRef(null);
    

    
      const [tab, setTab] = useState('listenFirst'); // Устанавливаем вкладку на 'listenFirst'
    const [searchTerm, setSearchTerm] = useState('');
    
      
      
      
      
        const [pressed, setPressed]=useState(false)
      function ispressed(){
        return(
          setPressed(prevPressed => !prevPressed)),
          setIsHoveredb(false)
        
      }
    
        const[isHoveredb2, setIsHoveredb2]=useState(false)
        const handleMouseEnterb2 = () => {
          setIsHoveredb2(true);
        };
      
        const handleMouseLeaveb2 = () => {
          setIsHoveredb2(false);
        };
        const[isHoveredb, setIsHoveredb]=useState(false)
        const handleMouseEnterb = () => {
          setIsHoveredb(true);
        };
      
        const handleMouseLeaveb = () => {
          setIsHoveredb(false);
        };
    
          
        const [showBlock, setShowBlock] = useState(false);
        
        
    

    

    return (
        <>
            <Header  /> 
            <div className='releasephotoanddes'>
            <div className='fix'>
            <div><img className='releasephoto' src={releasephoto} alt="Release" /></div>
            
           
            <div className='t1'> 
                <h6 className='nazv'></h6>
                <div className='t2'>
                    <img className='' src={ellipse} alt="Release" />
                    <div>
                        <h6 className='nazv1'>Александра Митрошина</h6>
                    <h6 className='nazv2'>12,3K подписчиков </h6>
                    </div>
                    
                </div>


            </div>
    <div className='kn'> 
    {pressed ? ( 
        <div className={isHoveredb ? '' : 'bgg2'} id='1'> 
            <SecondButtonBlack  
                className="second-button-black" // Добавьте класс
                children='Отменить подписку'  
                onClick={ispressed}  
                onMouseEnter={handleMouseEnterb}  
                onMouseLeave={handleMouseLeaveb} 
            /> 
        </div> 
    ) : ( 
        <div className={isHoveredb2 ? '' : 'bgg'}> 
            <SecondButton  
                className="second-button" // Добавьте класс
                onMouseEnter={handleMouseEnterb2}  
                onClick={ispressed}  
                onMouseLeave={handleMouseLeaveb2}  
            > 
                Подписаться 
            </SecondButton> 
        </div> 
    )} 
</div>
 <div className="gray-line" />
            <div className='nazv2'>
                {/* <h6 className='nazv3'>#образование</h6>
                <h6 className='nazv3'>#финансы</h6>
                <h6 className='nazv3'>#воспитание</h6> */}
                
                <div className="frame_9" ref={hashtagsRef}>     
                    {hashtags.map((h, index) => ( 
                            <div 
                            key={index} 
                            className={`hastags1 ${overlappingHashtags.includes(index) ? 'gradient' : 'orange'}`} 
                            data-text={h.name} 
                            > 
                            {h.name} 
                            </div> 
                            ))} 
                          </div>
            </div>
            </div>
        </div>

  
        <div className="frame__8815">
          <div className="bread_crumbs1">Мои подписки</div>
          <div className="bread_crumbs2">Как стать богатым за 5 минут не выходя из дома</div>


            <img src={vector22} alt="" />


        </div>

            <div className="group__8794">
            
             <div className="frame__8793">
            <div className="text__for__rich">
                Как стать богатым за 5 минут не выходя из дома
                </div>
            <div className="frame__8786">
                <div className="text__for__description">
                Описание курса, которое рассказывает о том, что этот курс рассказывает о том, что богатым можно стать за пять минут и вообще для этого даже не нужно выходить из дома.
                </div>
            </div>
            </div>
            <div className="text__for__age">18+</div>
            <div className="button-container"> 
            <SecondButtonForTabs  
            onClick={handleClick} 
            className={pressed ? "active-button" : "inactive-button"} // Передаем разные классы
            > 
            Слушать с первого выпуска 
            </SecondButtonForTabs>
            </div>
     
            <div className="lessons"> 
            <div className='home_for_card_container'> 
                {podcastReleases.map(mainPage => ( 
                    <CardForMain key={mainPage.id} mainPage={mainPage}/>  
                ))} 
            </div>
</div>

            </div>

             
        </>
    );
}

