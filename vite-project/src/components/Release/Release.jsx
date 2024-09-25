import * as style1 from './Release.css'
import player from '/player.png'
import releasephoto from '/image 293.png'
import ellipse from '/Ellipse 196.png'
import like1 from '/favorite_border.png'
import repost1 from '/autorenew.png'
import visibility from '/visibility.png'
import comm1 from '/chat_bubble_outline.png'
import comm2 from '/chat_bubble.png'
import MainButton from '../Button/MainButton'
import SecondButton from '../Button/SecondButton'
import React, { useState, useRef, useEffect } from 'react';
import tochka from '/Vector.png'
import tochka2 from '/more_vert.png'
import save from '/playlist_add.png'
import error from '/error_outline.png'
import copy from '/content_copy.png'
import mini from '/mini.png'
import {comm as initialComm} from "./data.js"
import { hashtags } from '/src/components/Release/hashtags.js';
import SecondButtonBlack from '../Button/SecondButtonBlack.jsx'
import VideoPlayer from '../VideoPlayer/VideoPlayer.jsx'
import OneSubcribe from '../SubscribesSection/OneSubcribe.jsx'




export default function Podcaster() {
    const text = "Ваш текст здесь, который может быть длиннее двух строк...Описание выпуска, которое рассказывает о том, что этот выпуск - супер. По моим видео ты станешь блогером...Описание выпуска, которое рассказывает о том, что этот выпуск - супер. По моим видео ты станешь блогером и начнешь зарабатывать. Подпишись🤟🏻 ...Описание выпуска, которое рассказывает о том, что этот выпуск - супер. По моим видео ты станешь блогером..Описание выпуска, которое рассказывает о том, что этот выпуск - супер. По моим видео ты станешь блогером"; // Замените на свой текст
    
    const [visibleCount, setVisibleCount] = useState(5); // Количество текущих видимых комментариев

    const loadMoreComments = () => {
        setVisibleCount((prevCount) => prevCount + 5); // Увеличиваем количество видимых комментариев на 5
    };


    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            
            // Если прокрутка вниз, фиксируем элемент
            if (scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false); // Вернуть блок обратно
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


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
 

    const [currentImages, setCurrentImages] = useState(Array(initialComm.length).fill(comm1)); // инициализация со значением comm1

    const handleImageClick1 = (index) => {
       
        setCurrentImages(prevImages => {
            const newImages = [...prevImages];

            if (newImages[index] === comm1) {
                newImages.fill(comm1); // Сначала сбрасываем все на comm1
                newImages[index] = comm2; // Устанавливаем текущий элемент на comm2
            } else {
                newImages[index] = comm1; // Возвращаем на comm1
            }

            return newImages;})
        setActiveIndex(activeIndex === index ? null : index);
        setComment1(comm[index].name + ',')
    };
   
    const [isImageVisible, setIsImageVisible] = useState(true);
    const [isBlockVisible, setIsBlockVisible] = useState(false);

    const toggleImage = () => {
        setIsImageVisible(prev => !prev);
        setIsBlockVisible(prev => !prev); // Показать или скрыть блок
    };
   
     

    const [currentImages2, setCurrentImages2] = useState(Array(initialComm.length).fill(tochka));

    const [activeIndex1, setActiveIndex1] = useState(null);
    const [blockVisibility2, setBlockVisibility2] = useState(Array(initialComm.length).fill(false));

   const handleImageClick2 = (index) => {
       
        setCurrentImages2(prevImages => {
            const newImages = [...prevImages];

            if (newImages[index] === tochka) {
                newImages.fill(tochka); 
                newImages[index] = tochka2; 
            } else {
                newImages[index] = tochka; 
            }

            return newImages;
            
        })
        // setActiveIndex1(activeIndex1 === index ? null : index);
        setBlockVisibility2(prevVis => {
            const newVis = [...prevVis];

            if (newVis[index] === false) {
                newVis.fill(false); 
                newVis[index] = true; 
            } else {
                newVis[index] = false; 
            }

            return newVis;
            
        })
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

  


 
        const [currentImage, setCurrentImage] = useState(comm1); // Первое изображение по умолчанию
        const [showBlock, setShowBlock] = useState(false);
    
        const handleImageClick = () => {
            // Смена изображения при клике
            setCurrentImage(prevImage => (prevImage === comm1 ? comm2 : comm1));
            setShowBlock(prevShowBlock => !prevShowBlock);
        };

        const [comm, setComm] = useState(initialComm); // Состояние для массива комментариев
        const [comment, setComment] = useState(''); // Состояние для введенного комментария
        
    const [podcomm, setPodComm] = useState(Array(initialComm.length).fill('')); // инициализация со значением comm1

        const handleCommentSubmit2 = (e) => {
            e.preventDefault(); // Предотвратить перезагрузку страницы
    
            if (comment.trim() !== '') {
                const newComment = {
                    name: 'Новое имя', // Замените на нужное имя
                    data: new Date().toLocaleDateString(), // Используйте текущую дату
                    des: comment.trim(), // Используем введенный комментарий
                    like: "0", // Начальное значение лайков
                    comm: "0", // Начальное значение комментариев
                };
    
                // Обновляем массив комментариев
                setComm([...comm, newComment]);
                setComment(''); // Очистить поле ввода
            }
        };

       
    
        // Обработчик изменения ввода
        const handleInputChange = (e) => {
            setComment(e.target.value);
        };
   




    const handleInputChange1 = (e) => {
        // Обновляем только комментарий
        setComment1(e.target.value);
        // При необходимости обновляем полный комментарий
       
    };

  
    const [isExpanded, setIsExpanded] = useState(false); // Состояние для контроля отображения текста

    const toggleText = () => {
        setIsExpanded(!isExpanded); // Переключаем состояние
    };
    return(
        
        <div className='obedinpl'>

        <div className='releasephotoanddes'>
           <div className={`fix ${isSticky ? 'fixed' : ''}`}>
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
                <h6 className='nazv3'>#воспитание</h6>
                 */}
                 
                     {hashtags.map((h, index) => ( 
                            <h6 
                            key={index} 
                            className="nazv3"
                            data-text={h.name} 
                            > 
                            {h.name} 
                            </h6> 
                            ))}  
                         
            </div>
            </div>
        </div>

        <div className='niz'>
             <div className="player" >
                <h5 className='kroshka'>Мои подписки Семейный бюджет Супер - выпуск!</h5>
                <VideoPlayer></VideoPlayer>
             </div>

             <div className='obedineniep'>
          <section className='sp'>


            <div className="blackblockp">
              <div className="whiteblockp">
                <div className='nazv4'>

               
               <div className='seroep'>
                 <h2 className='thefp'>Супер выпуск</h2>
                  <a className='ssylkap'>22.09.2024</a> </div>
                  <div className='nazv5'>
                 
            <div className={`text-container ${isExpanded ? 'expanded' : ''}`}>
                {text}
            </div>
            <h6  className='thethp' onClick={toggleText} style={{ cursor: 'pointer' }}>
                {isExpanded ? "Скрыть" : "Показать полностью"}
            </h6>
        
        </div>
                
               </div>
    <div className='obidenssettings'>
        <div className='obidenstochka'> 
                <div className='countofsubp'>
               
        
                        <div className='like'>
                        <img className='podn' src={like1} />
                        <p className='kolvo'>77</p> </div>
                        <div className='comm'>
                        <img className='podn' src={repost1} />
                    <p className='kolvo'>99</p> </div>
                        <div className='repost'>
                        <img className='podn' src={visibility} />
                    <p className='kolvo'>888</p></div>
          
     

                </div>
                {isImageVisible ? (
                <img className='podn' src={tochka} alt="Изображение 1" onClick={toggleImage} style={{ cursor: 'pointer' }} />
            ) : (
                <img className='podn' src={tochka2} alt="Изображение 2" onClick={toggleImage} style={{ cursor: 'pointer' }} />
            )}
            </div>
            {isBlockVisible && (
                <div className='your-block'>
                    <div className='your-block1'> < img className='podn' src={save} /> <p >Сохранить</p>  </div>
                    <div className='your-block1'> < img className='podn' src={error} /> <p >Пожаловаться</p>  </div>
                    <div className='your-block1'> < img className='podn' src={copy} /> <p >Копировать</p>  </div>
                </div>
            )}
             </div>
             
             
              </div>


            </div>

          </section></div>
        
       <div className='rasst'>
       <div className='comments'>
    <img className='mini' src={mini} alt="mini" />
    <form onSubmit={handleCommentSubmit2} className='inandbut'>
      
            <input
               
                placeholder='Введите комментарий...'
                type='text'
                name='name'
               
                    value={comment}
                 
                className='vvod'
           
                onChange={handleInputChange}
            />
            { comment.trim() !== ''  && (
              isHovered1 === true ? (
                    <div className='bgg3'>
                     <MainButton onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} onClick={handleCommentSubmit2}>Отправить</MainButton>
                    </div>) : (
                    <div >   <MainButton onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} onClick={handleCommentSubmit2}>Отправить</MainButton></div>
                  )
                
            )}
        
    </form>
</div>
        <div className='rasst2'>

   <div className='comments-count'>
        {/* Условие для вывода корректного окончания */}
        {comm.length === 1 
            ? <p className='comments-countp'>1 комментарий</p>
            : comm.length > 1 
                ? <p className='comments-countp'>{comm.length} комментария</p> 
                :  <p className='comments-countp'>Нет комментариев</p> }
                 </div>

        <div className='comments-list'>
        {comm
        
        .slice(0, visibleCount)
        .sort((a, b) => {
            const dateA = a.data.split('.').reverse().join('-'); // Преобразуем 'DD.MM.YYYY' в 'YYYY-MM-DD'
            const dateB = b.data.split('.').reverse().join('-'); // То же для b
            return new Date(dateB) - new Date(dateA); // Сортировка по убыванию
        })
        .map((c, index) => (
                    <div key={index} className='comment'>
                        <div className='vmeste1r'>
             <div className='contentr' > 
          <img className='minir' src={mini} />
      
           </div>

         <div className='vmester'> 
         <div className='tochkar'>
       
                <div className='podn2'>   
                    <img className='podnr' src={currentImages2[index]}  alt="Коммент"   onClick={() => handleImageClick2(index)} />
            </div>
              {blockVisibility2[index] && (
                <div className='your-blockk'>
                   
                    <div className='your-block1'> < img className='podn' src={error} /> <p >Пожаловаться</p>  </div>
                    
                </div>
            )}
          
        </div>
                     <div className='blockoftextr'>
           
                        <h3 className="namepostr">{c.name} </h3>
                        <p className='datar'>{c.data} </p>
                        <p className='ter'>{c.des} </p>

                        </div>
         <div className='commvstolb'>
       <div className='ocenkar'>
       
       <div className='liker'>
          <img className='podnr' src={like1} />
          <p className='kolvor'>{c.like} </p>
           </div>
        
           <div className='commr'>
            <img className='podnr' src={currentImages[index]}  alt="Коммент"   onClick={() => handleImageClick1(index)} />
            <p className='kolvor'>{c.comm} </p>
            {/* Блок, который отображается при нажатии на изображение */}
          
            </div>
        </div>
          {activeIndex === index  && (
                <div className='additional-block'>
                    <div className='comments'>
             <img className='mini' src={mini} alt="mini" />
            <form onSubmit={handleCommentSubmit2} className='inandbut'>
      
            <input
               
                placeholder='Введите комментарий...'
                type='text'
                name='name'
               
                value={comment1}
                 
                className='vvod'
           
                onChange={handleInputChange1}
            />
             { comment1.trim() !== ''  && (
              isHovered2 === true ? (
                    <div className='bgg3'>
                     <MainButton onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} onClick={handleCommentSubmit2}>Отправить</MainButton>
                    </div>) : (
                    <div >   <MainButton onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} onClick={handleCommentSubmit2}>Отправить</MainButton></div>
                  )
                
            )}
        
             </form>
            </div>
                </div>
            )}
       </div> 
      </div>
      
      
     
      </div><div className="gray-line1" />
                    </div>
                ))}
            </div>
          

        </div>
     

            </div>
            {comm.length > visibleCount && ( // Проверка, превышает ли количество комментариев видимое количество
                <p className='zagr'  style={{ cursor: 'pointer'  }} onClick={loadMoreComments}>
                    Загрузить ещё
                </p>
            )}



            <div className='rec'>
                <p className='nazv6'>Может быть интересно</p>
                <div className='card-container1'>
                    <OneSubcribe></OneSubcribe>
                    <OneSubcribe></OneSubcribe>
                    <OneSubcribe></OneSubcribe>
                    <OneSubcribe></OneSubcribe>
                    <OneSubcribe></OneSubcribe>
                    <OneSubcribe></OneSubcribe>
                </div>

            </div>
        </div>

               

          

        
    </div>

    ) 


}