import './OneAuthor.css'
import ellipse from '/Ellipse 196.png'
import white from '/white.jpg'
import picture from '/image 293.png'
import MainButton2 from '../../Button/MainButton2';
import React, { useState, useRef, useEffect } from 'react';
export default function OneAuthor({ name, subscribers, episodes, image2, image3, image4 }) {   

  const [hashtagData, sethashtagData] = useState([]);

  useEffect(() => {
  
      fetch('/hashtagsforsubscribes.json')
          .then((response) => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then((data) => sethashtagData(data))
          .catch((error) => console.error('Ошибка при загрузке данных:', error));
  }, []);


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
            <h6 className='subtitlesub'>{subscribers}</h6>  
            <div className="content">{episodes}</div>  
             
          
            <img src={image3} alt='logo' className='picturesub' />    
            <img src={image2} alt='logo' className='picturesub1' ref={imageRef} />    
            <div className="containersub">    
            
              {/* {props.button}    */}
            </div>    
            <div className='vstoku'>
              <div className='btnnpod'>
             
                 {testDeisabled === true ? (
                    <div className='pocastdis'>
                      <MainButton2 disabled={true}>Слушать</MainButton2>
                      <p> Чтобы стать подкастером необходимо набрать подписчиков</p>
                    </div>
                  )
                    : isHovered === true ? (
                      <div className='bgforbtn'>
                        <MainButton2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} disabled={testDeisabled}>
                          Отменить подписку
                        </MainButton2>
                      </div>) : (
                      <MainButton2 onClick={ispressed} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} disabled={testDeisabled}>
                        Слушать
                      </MainButton2>)}
                    
                   
              </div>

           </div>
          </div>    
        </div>    
      </div>    </div>
    );      
}