import './Home.css';  
import CardForMain from '../card/CardForMain';
import releasephoto from './../../img/Фото.jpg';  
import ellipse from './../../img/Ellipse 196.svg';
import React, { useState, useRef, useEffect } from 'react';
import SecondButton from '../Button/SecondButton';
import SecondButtonBlack from '../Button/SecondButtonBlack.jsx';
import { hashtags } from '../Home/hashtags.js';
import releases from './releasesData';

export default function Home() {

    const [overlappingHashtags, setOverlappingHashtags] = useState([]); 

    const [isGradient, setIsGradient] = useState(false);  
      const hashtagsRef = useRef(null);  
      const imageRef = useRef(null);
    
    const checkCollision = () => { 
      if (hashtagsRef.current && imageRef.current) { 
          const hashtags = hashtagsRef.current.children; 
          const imageRect = imageRef.current.getBoundingClientRect(); 
          const overlaps = []; 
    
          for (let i = 0; i < hashtags.length; i++) { 
              const hashtagRect = hashtags[i].getBoundingClientRect(); 
              const isOverlapping = !(hashtagRect.bottom < imageRect.top || 
                                      hashtagRect.top > imageRect.bottom || 
                                      hashtagRect.right < imageRect.left || 
                                      hashtagRect.left > imageRect.right); 
              if (isOverlapping) overlaps.push(i); 
          } 
    
          console.log('Перекрывающиеся хэштеги:', overlaps); // Вывод в консоль 
          setOverlappingHashtags(overlaps); 
      } 
    }; 
    
    useEffect(() => { 
    checkCollision(); // Проверяем наложение при монтировании 
    window.addEventListener('resize', checkCollision); // Проверяем при изменении размера окна 
    return () => { 
        window.removeEventListener('resize', checkCollision); // Очищаем обработчики 
    }; 
    }, []);
    
        const[isHovered1, setIsHovered1]=useState(false)
      const handleMouseEnter1 = () => {
        setIsHovered1(true);
      };
    
      const handleMouseLeave1 = () => {
        setIsHovered1(false);
      };
      const[isHovered2, setIsHovered2]=useState(false)
      const handleMouseEnter2 = () => {
        setIsHovered2(true);
      };
    
      const handleMouseLeave2 = () => {
        setIsHovered2(false);
      };
      
      
      
        const [activeIndex, setActiveIndex] = useState(null);
        const [comment1, setComment1] = useState('');
     
    
        
    
        
        const [isImageVisible, setIsImageVisible] = useState(true);
        const [isBlockVisible, setIsBlockVisible] = useState(false);
    
        const toggleImage = () => {
            setIsImageVisible(prev => !prev);
            setIsBlockVisible(prev => !prev); // Показать или скрыть блок
        };
       
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
        
        
    
      
        const [isExpanded, setIsExpanded] = useState(false); // Состояние для контроля отображения текста
    
        const toggleText = () => {
            setIsExpanded(!isExpanded); // Переключаем состояние
        }
    

    return (
        <>
            <div className='releasephotoanddes'>
            <div className='fix'>
            <div><img className='releasephoto' src={releasephoto} alt="Release" /></div>
            
           
            <div className='t1'> 
                <h6 className='nazv'>Семейный бюджет</h6>
                <div className='t2'>
                    <img className='' src={ellipse} alt="Release" />
                    <div>
                        <h6 className='nazv1'>Альфа-банк</h6>
                    <h6 className='nazv1'>123 подписчика</h6>
                    </div>
                    
                </div>


            </div>
<div className='kn'>
            {pressed ? (
    <div className={isHoveredb ? '' : 'bgg2'} id='1'>
        <SecondButtonBlack 
            children='Отменить подписку' 
            onClick={ispressed} 
            onMouseEnter={handleMouseEnterb} 
            onMouseLeave={handleMouseLeaveb}
        />
    </div>
) : (
    <div className={isHoveredb2 ? '' : 'bgg'}>
        <SecondButton 
            onMouseEnter={handleMouseEnterb2} 
            onClick={ispressed} 
            onMouseLeave={handleMouseLeaveb2} 
        >
          Подписаться
        </SecondButton>
    </div>
)}</div>
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
            <div className="lessons"> 
            <div className="home_for_card_container">
            {releases.map(mainPage => (
              <CardForMain key={mainPage.id} mainPage={mainPage}/> 
            ))}
            </div>
</div>

            </div>
        </>
    );
}

