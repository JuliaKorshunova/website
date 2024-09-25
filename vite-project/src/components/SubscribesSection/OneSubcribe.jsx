import './OneSubcribe.css'
import ellipse from '/Ellipse 196.png'
import white from '/white.jpg'
import picture from '/image 293.png'
import MainButton2 from '../Button/MainButton2';
import { hashtags } from '/src/components/Release/hashtags.js';
import React, { useState, useRef, useEffect } from 'react';
export default function OneSubcribe({ name, descriptionn, time, author, sub,  image1, image2, image3, image4 }) {   

  const[isHovered, setIsHovered]=useState(false)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const testDeisabled=false;


  const [pressed, setPressed]=useState(false)
  function ispressed(){
    return(
        setPressed(true))
    
  }

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
  


    // console.log(props);   
    return (    
      <div className='sectionsub'>
      <div  className="cardsub">    
        <div className="blackblocksub">    
          <div className="whiteblocksub">
            <div className="container1sub">   
            <h2 className='zagalovoksub'>{ name}</h2> 
            </div>    
            <h6 className='subtitlesub'>{descriptionn}</h6>    
            <div className="categoryhastagssub"></div>   
            <div className="hashtagssub">   
                
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
            <div className="timesub">{time}</div>    
            <img src={image3} alt='logo' className='picturesub' />    
            <img src={image2} alt='logo' className='picturesub1' ref={imageRef} />    
            <div className="containersub">    
              <img src={image1} alt='logo' className='iconsub' />    
              <div className="text1sub">{author}</div>    
              <div className="text2sub">{sub} подписчиков</div>    
              {/* {props.button}    */}
            </div>    
              <div className='btnnsub'>
                 {testDeisabled === true ? (
                    <div className='pocastdis'>
                      <MainButton2 disabled={true}>Слушать</MainButton2>
                      <p> Чтобы стать подкастером необходимо набрать подписчиков</p>
                    </div>
                  )
                    : isHovered === true ? (
                      <div className='bgforbtnsub'>
                        <MainButton2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} disabled={testDeisabled}>
                          Слушать
                        </MainButton2>
                      </div>) : (
                      <MainButton2 onClick={ispressed} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} disabled={testDeisabled}>
                        Слушать
                      </MainButton2>)}
              </div>
           
          </div>    
        </div>    
      </div>    </div>
    );      
}