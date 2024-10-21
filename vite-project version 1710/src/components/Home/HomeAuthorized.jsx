import './HomeAuthorized.css'
import Header from '../Header/Header';
import image from '/Gradient.png';
import image2 from '/Gradient2.png';
import newbie from '/newbie.png';
import flashed from '/flashed.png';
import star from '/star.png';
import arrow_forward from '/arrow_forward.png';
import arrow_forward2 from '/arrow_forward2.png';
import OnePodbor from '../PodborSection/OnePodbor/OnePodbor';
import picture from '/image 293.png'
import OneSubcribe from '../SubscribesSection/OneSubscribe/OneSubcribe';
import React, { useState, useRef, useEffect } from 'react';
import fractal from '/Group11.png';
export default function HomeAuthorized  () {

    const authorData = {
        fullName: "Александра Митрошина"
    };

    const [firstName, lastName] = authorData.fullName.split(" "); // Извлекаем имя и фамилию
    const [subscribeData, setSubscribeData] = useState([]);

    useEffect(() => {
        // Замените 'data.json' на путь к вашему JSON-файлу
        fetch('/datasub.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setSubscribeData(data.cards)) 
            .catch((error) => console.error('Ошибка при загрузке данных:', error));
    }, []);
    const [podborData, setPodborData] = useState([]);

    useEffect(() => {
    
        fetch('/dataplay.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setPodborData(data))
            .catch((error) => console.error('Ошибка при загрузке данных:', error));
    }, []);
 
    return (
        <>
        <Header  />  
        <div className="group11">
        <img  src={fractal} alt="Описание изображения" className='group11'></img>
        </div>
        <div className="container1">
            <div className='contforimg'>
            <img  src={image} alt="Описание изображения" className='gradient'></img></div>
        
          
           <div className='obedinenieforhome'>
            <section   className='sforhome'>

            <div className="pinkblockforhome">
              <div className="whiteblockforhome">
              <div className="text_to_place">
                     Место для логотипа
                     </div>
                     <div className="text_to_motus">
                     * motus — [mɔtys] (lat.) движение
                     </div>
                </div></div></section>
                </div>

                <div className='obedinenieforhome2'>
            <section   className='sforhome'>
                 <div className="pinkblockforhome">
                 <div className="whiteblockforhome">
                    
                     <div className="text_to_second">
                     Современная площадка для саморазвития, где вы найдете обучающие подкасты, бесплатные образовательные курсы, 
                        а также сможете делиться своими успехами, начав записывать короткие подкасты для своей аудитории.
                     </div>
                </div></div></section>
                </div>

                <div>
                <div className="text_to_toppodcasts">
                     Топ подкастов
                     </div>


            <div className='card-container-stroka'>
            {subscribeData.map((sub, index) => (
                <OneSubcribe 
                    key={index} // Не забудьте добавить ключ для каждого элемента списка
                    name={sub.name} 
                    descriptionn={sub.descriptionn}  
                    time={sub.time} 
                    author={sub.author} 
                    sub={sub.sub} 
                    image1={sub.image1} // Передаем первое изображение
                    image2={sub.image2} // Передаем второе изображение
                    image3={sub.image3} // Передаем третье изображение
                    hashtags={sub.hashtags}
                />
            ))}
             </div>
             </div>

             <div>
                 <div className="text_to_podborka">
                    Подборки слушателей
                </div>

                <div className='forpodborka'>
                    {podborData.slice(0, 3).map((play, index) => (
                        <OnePodbor
                            key={index}
                            name={play.name}
                            descriptionn={play.descriptionn}
                            view={play.view}
                            release={play.release}
                            image1={play.image1}
                            image2={play.image2}
                            image3={play.image3}
                            image4={play.image4}
                            className={index === 1 ? 'secondc' : ''}
                            className2={'obedinenie2forpod'}
                        />
                    ))}
                  
                    <img src={image2} className="orangeGradient1" alt="Описание изображения" />
                    <div className='more1'>Смотреть больше</div>
                    <img className="morearrow1" src={arrow_forward2} alt="Описание изображения" />
                    
                </div>

             

            
            </div>
            <div>
                <div className='toptegvsroku'>
                      <div className="text_to_topteg">
                    Топовый тег
                     </div>
                    
                     <img  src={ arrow_forward} alt="Описание изображения"></img>
                     <div className="text_to_topteg2">
                        #образование
                     </div>
                </div>
                <div className='hashmain'>
                    <div className='hashtaggreen'>#спорт #маньяки #веселье #секс #фото #блогерство #дети #образование #книги #сериалы #физика #феминизм #фото #блогерство #дети #образование #спорт #маньяки #веселье #секс #фото #блогерство #дети #образование #книги #сериалы #физика #феминизм #фото #блогерство #дети #образование</div>
                    <div className='hashtagpink'>#спорт #маньяки #веселье #секс #фото #блогерство #дети #образование #книги #сериалы #физика #феминизм #фото #блогерство #дети #образование #спорт #маньяки #веселье #секс #фото #блогерство #дети #образование #книги #сериалы #физика #феминизм #фото #блогерство #дети #образование</div>


                </div>
                <div className='card-container-stroka2'>
                    {subscribeData.map((sub, index) => (
                <OneSubcribe 
                    key={index} // Не забудьте добавить ключ для каждого элемента списка
                    name={sub.name} 
                    descriptionn={sub.descriptionn}  
                    time={sub.time} 
                    author={sub.author} 
                    sub={sub.sub} 
                    image1={sub.image1} // Передаем первое изображение
                    image2={sub.image2} // Передаем второе изображение
                    image3={sub.image3} // Передаем третье изображение
                    hashtags={sub.hashtags}
                />
            ))}
             </div>
             

             <div className='hashmain2'>
                    <div className='hashtaggreen'>#спорт #маньяки #веселье #секс #фото #блогерство #дети #образование #книги #сериалы #физика #феминизм #фото #блогерство #дети #образование #спорт #маньяки #веселье #секс #фото #блогерство #дети #образование #книги #сериалы #физика #феминизм #фото #блогерство #дети #образование</div>
                    <div className='hashtagorange'>#спорт #маньяки #веселье #секс #фото #блогерство #дети #образование #книги #сериалы #физика #феминизм #фото #блогерство #дети #образование #спорт #маньяки #веселье #секс #фото #блогерство #дети #образование #книги #сериалы #физика #феминизм #фото #блогерство #дети #образование</div>
                    <div className='hashtagpink'>#спорт #маньяки #веселье #секс #фото #блогерство #дети #образование #книги #сериалы #физика #феминизм #фото #блогерство #дети #образование #спорт #маньяки #веселье #секс #фото #блогерство #дети #образование #книги #сериалы #физика #феминизм #фото #блогерство #дети #образование</div>
                    <div className='hashtaggreen'>#спорт #маньяки #веселье #секс #фото #блогерство #дети #образование #книги #сериалы #физика #феминизм #фото #блогерство #дети #образование #спорт #маньяки #веселье #секс #фото #блогерство #дети #образование #книги #сериалы #физика #феминизм #фото #блогерство #дети #образование</div>
                </div>  </div>

            <div>
                <div className="text_to_authors">
                        Начинающие авторы
                        </div>


             <div className='manycards'>
                        
                <div className='divforcard'>
                    <img   className= "sizeofpict" src={picture} alt="Описание изображения"></img>
                <div className='nameofauthor'>
                            {firstName}<br />
                            {lastName}
                    </div>
                      </div>
              <div className='divforcard'>
                    <img   className= "sizeofpict" src={picture} alt="Описание изображения"></img>
                <div className='nameofauthor'>
                            {firstName}<br />
                            {lastName}
                    </div>
                </div>

                <div className='divforcard'>
                    <img   className= "sizeofpict" src={picture} alt="Описание изображения"></img>
                <div className='nameofauthor'>
                            {firstName}<br />
                            {lastName}
                    </div>
                </div>

                <div className='divforcard'>
                    <img   className= "sizeofpict" src={picture} alt="Описание изображения"></img>
                <div className='nameofauthor'>
                            {firstName}<br />
                            {lastName}
                    </div>
                </div>
                <img  src={ image2}  className="orangeGradient" alt="Описание изображения"></img>
                <div className='more'>Смотреть больше</div>
                <img   className= "morearrow" src={arrow_forward2} alt="Описание изображения"></img>


            </div>

            </div>


            <div>
            <div className='obedinenieforpodpiska'>
                <section   className='sforhome'>
                 <div className="pinkblockforhome">
                 <div className="whiteblockforhome">
                    
                     <div className="podpiska">
                        Подписка
                     </div>
                </div></div></section>
                </div>

                <div className='twoPodpiskaVstroku'>
                <div className='vstolb'>
                    <img  src={ newbie} className='podpiskaImg'  alt="Описание изображения"></img>
                    <div className='obedinenieforpodpiska2'>
                    <section   className='sforhome'>
                    <div className="pinkblockforhome">
                    <div className="whiteblockforhome">
                        
                        <div className="podpiska">
                            Подписка
                        </div>
                    </div></div></section>
                    </div>
                </div>

                <div className='vstolb'>
                    <img  src={ flashed} className='podpiskaImg'  alt="Описание изображения"></img>
                    <div className='obedinenieforpodpiska2'>
                    <section   className='sforhome'>
                    <div className="pinkblockforhome">
                    <div className="whiteblockforhome">
                        <div className='vstolbstar'>
                            <div className="vstrokustar">
                            <img  src={star}   alt="Описание изображения"></img>
                            <div className='textforpodpiska'>Доступ ко всем подкастам</div>
                            </div>

                            <div className="vstrokustar">
                            <img  src={star}   alt="Описание изображения"></img>
                            <div className='textforpodpiska'>Доступ ко всем подкастам</div>
                            </div>

                            <div className="vstrokustar">
                            <img  src={star}   alt="Описание изображения"></img>
                            <div className='textforpodpiska'>Доступ ко всем подкастам</div>
                            </div>
                        </div>
                    </div></div></section>
                    </div>
                </div>
                </div>


            </div>
            





              </div>
    

        



        </>
    )
} 