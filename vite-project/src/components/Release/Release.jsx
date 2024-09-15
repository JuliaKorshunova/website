import * as style1 from './Release.css'
import player from '/player.png'
import releasephoto from '/image 293.png'
import ellipse from '/Ellipse 196.png'
import like1 from '/favorite_border.png'
import repost1 from '/autorenew.png'
import visibility from '/visibility.png'
import comm1 from '/chat_bubble_outline.png'
import MainButton from '../Button/MainButton'
import SecondButton from '../Button/SecondButton'
import React, { useState } from 'react';
import tochka from '/Vector.png'
import mini from '/mini.png'
import {comm} from "./data.js"




export default function Podcaster() {
    // const [comments, setComments] = useState(comm);
    // const [newComment, setNewComment] = useState({ name: 'ыв', data: '14.09.2024' });

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setNewComment(prev => ({
    //         ...prev,
    //         [name]: value
    //     }));
    // };
    // const handleCommentSubmit = (e) => {
    //     e.preventDefault(); // Предотвращаем перезагрузку страницы

    //     // Проверка на пустоту
    //     if (newComment.des === undefined || newComment.des.trim() === '') {
    //         setError('Поле описания не должно быть пустым');
    //         return;
    //     }

    //     // Добавляем новый комментарий
    //     setComments([...comments, { ...newComment, like: '', comm: '' }]);
    //     setNewComment({ name: 'ыв', data: '14.09.2024', des: '' }); // Очищаем поле ввода
    //     };




    const [comment, setComment] = useState(''); // Хранение текста комментария
    const [commentsList, setCommentsList] = useState([]); // Хранение списка комментариев

    const handleInputChange = (event) => {
        setComment(event.target.value); // Обновляем состояние при вводе
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
        if (comment.trim() !== '') { // Проверяем, чтобы не добавлять пустые комментарии
            setCommentsList([...commentsList, comment]); // Добавляем новый комментарий в список
            setComment(''); // Очищаем поле ввода
        }
    }
    const [isExpanded, setIsExpanded] = useState(false); // Состояние для контроля отображения текста

    const toggleText = () => {
        setIsExpanded(!isExpanded); // Переключаем состояние
    };
    return(
        
        <div className='obedinpl'>

        <div className='releasephotoanddes'>
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
            <div className='bgg'><SecondButton>Подписаться</SecondButton></div>
            <div className='nazv2'>
                <h6 className='nazv3'>#образование</h6>
                <h6 className='nazv3'>#финансы</h6>
                <h6 className='nazv3'>#воспитание</h6>
            </div>
            
        </div>

        <div className='niz'>
             <div className="player"></div>

             <div className='obedineniep'>
          <section className='sp'>


            <div className="blackblockp">
              <div className="whiteblockp">
                <div className='nazv4'>

               
               <div className='seroep'>
                 <h2 className='thefp'>Супер выпуск</h2>
                  <a className='ssylkap'>22.09.2024</a> </div>
                  <div className='nazv5'>
            <h6 className={`thesecp ${isExpanded ? 'expanded' : ''}`}>
                {isExpanded 
                    ? "Описание выпуска, которое рассказывает о том, что этот выпуск - супер. По моим видео ты станешь блогером и начнешь зарабатывать. Подпишись🤟🏻 ...Описание выпуска, которое рассказывает о том, что этот выпуск - супер. По моим видео ты станешь блогером..Описание выпуска, которое рассказывает о том, что этот выпуск - супер. По моим видео ты станешь блогером.."
                    : "Описание выпуска, которое рассказывает о том, что этот выпуск - супер. По моим видео ты станешь блогером..." // Ограниченный текст
                }
            </h6>
            <h6 className='thethp' onClick={toggleText}  style={{ cursor: 'pointer' }}>
                {isExpanded ? "Скрыть" : "Показать полностью"}
            </h6>
        </div>
                
               </div>

    
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

              </div>


            </div>

          </section></div>
        
       <div className='rasst'>
       <div className='comments'>
    <img className='mini' src={mini} alt="mini" />
    <form onSubmit={handleCommentSubmit} className='inandbut'>
      
            <input
               
                placeholder='Введите комментарий...'
                type='text'
                name='name'
               
                    value={comment}
                 
                className='vvod'
           
                onChange={handleInputChange}
            />
            { comment.trim() !== ''  && (
                <MainButton onClick={handleCommentSubmit}>Отправить</MainButton>
            )}
        
    </form>
</div>
        <div className='rasst2'>

   <div className='comments-count'>
        {/* Условие для вывода корректного окончания */}
        {commentsList.length === 1 
            ? <p className='comments-countp'>1 комментарий</p>
            : commentsList.length > 1 
                ? <p className='comments-countp'>{comm.length} комментария</p> 
                :  <p className='comments-countp'>Нет комментариев</p> }
                 </div>

        <div className='comments-list'>
                {commentsList.map((c, index) => (
                    <div key={index} className='comment'>
                        <div className='vmeste1r'>
             <div className='contentr' > 
          <img className='minir' src={mini} />
      
           </div>

         <div className='vmester'> 
         <div className='tochkar'>
        <img className='tochkair' src={tochka} />
        </div>
           <div className='blockoftextr'>
           
           <h3 className="namepostr">ddd </h3>
           <p className='datar'>434</p>
             
                  
                      <p className='ter'>434</p>

       </div>
      
       <div className='ocenkar'>
       
       <div className='liker'>
          <img className='podnr' src={like1} />
          <p className='kolvor'>44</p>
           </div>
           <div className='commr'>
          <img className='podnr' src={comm1} /> 
          <p className='kolvor'>555</p>
           </div>
          
       </div>
      </div>
      
      
      
      </div>
                    </div>
                ))}
            </div>


        </div>
     

            </div>
        </div>

         

          

        
    </div>

    ) 


}