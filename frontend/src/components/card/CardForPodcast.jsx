import './CardForPodcast.css'
import MainButton2 from '../Button/MainButton2';
import React, { useState, useRef, useEffect } from "react"; 
export default function Card(props) {    
  const [isHovered, setIsHovered] = useState(false); 
  const [isGradient, setIsGradient] = useState(false); 
  const hashtagsRef = useRef(null); 
  const imageRef = useRef(null); 
  
  const handleMouseEnter = () => { 
      setIsHovered(true); 
  }; 

  const handleMouseLeave = () => { 
      setIsHovered(false); 
  }; 

  const [overlappingHashtags, setOverlappingHashtags] = useState([]);

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

  return (     
      <section className="card">     
          <div className="blackblock">     
              <div className="whiteblock"> 
                  <div className="container1">    
                      <h2 className='zagalovok'>{props.title}</h2>  
                  </div>     
                  <h6 className='subtitle'>{props.subtitle}</h6>     
                  <div className="categoryhastags">       
                      <div className="rectangle_629">     
                          <div className="frame_9" ref={hashtagsRef}>    
                          {props.hashtags.split(' ').map((hashtag, index) => (
                            <div
                            key={index}
                            className={`hastags1 ${overlappingHashtags.includes(index) ? 'gradient' : 'orange'}`}
                            data-text={hashtag}
                            >
                            {hashtag}
                            </div>
                            ))}
                          </div>      
                      </div>        
                  </div> 
                  <div className="time">{props.time}</div>     
                  <img ref={imageRef} src={props.img} alt='logo' className='picture' />     
                  <div className="container">     
                      <img src={props.ellipse} alt='logo' className='icon' />     
                      <div className="text1">{props.canal}</div>     
                      <div className="text2">{props.channel}</div>     
                      {props.button}    
                  </div>     
                  <div className='btnn'> 
                      {props.testDeisabled === true ? ( 
                          <div className='pocastdis'> 
                              <MainButton2 disabled={true}>Слушать</MainButton2> 
                          </div> 
                      ) : isHovered ? ( 
                          <div className='bgforbtn1'> 
                              <MainButton2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} disabled={props.testDeisabled}> 
                                  Слушать 
                              </MainButton2> 
                          </div>) : ( 
                          <MainButton2 onClick={props.ispressed} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} disabled={props.testDeisabled}> 
                              Слушать 
                          </MainButton2>
                      )} 
                  </div> 
              </div>     
          </div>     
      </section>     
  );  
}
