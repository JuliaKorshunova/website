import close from '/close.png'; 
import add from '/add1.png'; 
import './Modal.css';  
import './ModalSettings.css'; 
import MainButton2 from '../Button/MainButton2'
import { useState, useEffect } from "react";
import ButtonExit from '../Button/ButtonExit/ButtonExit';
export default function  ModalSettings ({ isOpen, onClose } ){
    if (!isOpen) return null; 
   
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open'); // Отключаем прокрутку на фоне

            // Обработчик прокрутки
            const handleWheel = (e) => {
                const modalContent = document.getElementById('block');
                if (modalContent) {
                    modalContent.scrollTo(0, modalContent.scrollTop + e.deltaY);
                    e.preventDefault(); // Предотвращаем прокрутку страницы
                }
            };

            document.addEventListener("wheel", handleWheel, { passive: false });

            // Очистка: убираем обработчик событий при размонтировании
            return () => {
                document.body.classList.remove('modal-open'); // Включаем прокрутку для тела
                document.removeEventListener("wheel", handleWheel);
            };
        }
    }, [isOpen]);

   // Если модальное окно не открыто, ничего не рендерим
     const [podcasterData, setPodcasterData] = useState([]);
     const [isButtonDisabled1, setIsButtonDisabled1] = useState(true); // Начальное состояние кнопки - отключена

    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
const [error, setError] = useState('');
const [name, setName] = useState('');
const [errorname, setErrorName] = useState('');
const [nickname, setNickname] = useState('');
const [errorNickName, setErrorNickName] = useState('');
const [description, setDescription] = useState('');
const [errorDes, setErrorDes] = useState('');
const [password, setPassword] = useState('');   
const [errorPassword, setErrorPassword] = useState(''); 
const [link, setLink] = useState('');
const [errorLink, setErrorLink] = useState('');



useEffect(() => {
    fetch('/datauser.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            setPodcasterData(data);
            // Проверяем, что массив не пустой
            if (data.length > 0) {
                const podcaster = data[0]; // Достаем первый элемент массива
                setPodcasterData(podcaster);

                // Устанавливаем состояния
                if (podcaster.email) {
                    setEmail(podcaster.email);
                    console.log(podcaster.email);
                } else {
                    console.log('Email is undefined');
                }

                if (podcaster.name) {
                    setName(podcaster.name);
                    console.log(podcaster.name);
                } else {
                    console.log('Name is undefined');
                }

                if (podcaster.nickname) {
                    setNickname(podcaster.nickname);
                    console.log(podcaster.nickname);
                } else {
                    console.log('Nickname is undefined');
                }
                
                if (podcaster.link) {
                    setLink(podcaster.link);
                    console.log(podcaster.link);
                } else {
                    console.log('Link is undefined');
                }

                if (podcaster.descriptionn) { // Поменяйте на descriptionn
                    setDescription(podcaster.descriptionn); // Измените на корректное поле
                    console.log(podcaster.descriptionn);
                } else {
                    console.log('Description is undefined');
                }
            } else {
                console.log('No data found');
            }
        })
        .catch((error) => console.error('Ошибка при загрузке данных:', error));
}, []);

        const handleCheckboxChange = (event) => {
            setIsChecked(event.target.checked);
        };


        const [isHovered, setIsHovered] = useState(false);   
        const [isHovered1, setIsHovered1] = useState(false);   

    const handleMouseEnter = () => {     
        setIsHovered(true);     
    };     
 
    const handleMouseLeave = () => {     
        setIsHovered(false);     
    };     

    const handleMouseEnter1 = () => {     
        setIsHovered1(true);     
    };     
 
    const handleMouseLeave1 = () => {     
        setIsHovered1(false);     
    };     

    

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        // Простая регулярная проверка email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            setError('Введите корректный адрес электронной почты');
        } else {
            setError('');
        }
    };
   

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);

        // Простая регулярная проверка email
        const namePattern = /^[A-Za-zА-Яа-яЁё ]{2,30}$/;
        if (!namePattern.test(value)) {
            setErrorName('Введите корректное имя');
        } else {
            setErrorName('');
        }
    };


    const handleNicknameChange = (e) => {
        const value = e.target.value;
        setNickname(value);
    
        // Проверка никнейма
        const nicknamePattern = /^@[A-Za-z]{2,19}$/; // @ в начале, разрешаем только английские буквы, длина от 3 до 20 (вместе с символом @)
        if (!nicknamePattern.test(value)) {
            setErrorNickName('Никнейм должен начинаться с @ и содержать только английские буквы, длина от 3 до 20 символов');
        } else {
            setErrorNickName('');
        }
    };

    const handleDescriptionChange = (e) => {
        const value = e.target.value;
        setDescription(value);

        // Проверка описания профиля
        const descriptionPattern = /^[A-Za-z0-9\s.,!?]{0,40}$/; // Разрешаем буквы, цифры, пробелы и знаки препинания
        if (!descriptionPattern.test(value)) {
            setErrorDes('Описание профиля может содержать только буквы, цифры, пробелы и знаки препинания (до 40 символов)');
        } else if (value.length > 40) {
            setErrorDes('Описание профиля не должно превышать 40 символов');
        } else {
            setErrorDes('');
        }
    };


    const handleLinkChange = (e) => {
        const value = e.target.value;
        setLink(value);

        // Проверка описания профиля
        const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\/[^\s]*)?$/; 
        if (!urlPattern.test(value)) {
            setErrorLink('Неверная ссылка');
        }  else {
            setErrorLink('');
        }
    };
 
    const handlePasswordChange = (e) => {   
        const value = e.target.value;    
        setPassword(value);   
       const passwordPattern=/(?=.*[a-z])(?=.*[A-Z])/;
        // Проверяем валидность пароля   
        if (!passwordPattern.test(value)) {    
            setErrorPassword('Пароль должен содержать строчную и заглавную буквы');    
        } else {    
            setErrorPassword(''); // Сбрасываем ошибку, если пароль валиден    
        }   
    };  
    const handleSubmit = (e) => {     
        e.preventDefault();     

        // Проверка на валидность    
        let hasError = false; // Флаг для отслеживания ошибки     
     
        if (name.trim() === '') {    
            setErrorName('Для регистрации необходимо заполнить это поле');     
            hasError = true;
        }    

        if (nickname.trim() === '') {    
            setErrorNickName('Для регистрации необходимо заполнить это поле');    
            hasError = true;
        }    

        if (password.trim() === '' || errorPassword) {   
            setErrorPassword('Пароль должен быть действительным');  
            hasError = true; 
        }  
        if (email.trim() === '' || error) {   
            setError('Пароль должен быть действительным');  
            hasError = true; 
        }  
        if (link.trim() === '' || errorLink) {   
            setErrorLink('Пароль должен быть действительным');  
            hasError = true; 
        }  
        if (description.trim() === '' || errorDes) {   
            setErrorDes('Пароль должен быть действительным');  
            hasError = true; 
        }  
        // Обработка успешной валидации, если все поля заполнены    
        if (!hasError) {   
            console.log('Имя пользователя:', name);     
            console.log('Ник:', nickname);     
            console.log('Пароль:', password);     
         
            // Сбросить поля после успешной обработки    
            setUsername('');     
            setNickname('');    
            setPassword('');    
            setErrorUsername('');    
            setErrorNickname('');    
            setErrorPassword('');    
        }    
    };  
    useEffect(() => {
        // Проверка наличия ошибок
        const hasError = (error=='' && errorname=='' && errorDes=='' && errorLink=='' && errorNickName=='' && errorPassword=='') ;
    
        // Если хотя бы одно поле имеет ошибку — отключаем кнопку
        setIsButtonDisabled1(!hasError);
    }, [error, errorname, errorDes, errorLink, errorNickName, errorPassword]); // Зависимости для проверки валидации Мы добавили зависимости в массив, чтобы useEffect вызывался каждый раз, когда изменяются состояния ошибок.


    return (
        <div className="modal-overlay">
    
            <div className="modal-contentsettings" id="block">
               <div className='thefirstrow'>
                <div className='newpod'>Настройки</div> 
                <img className='close' src={close} alt='user'   style={{ cursor: 'pointer'  }}  onClick={onClose}/>
                </div>
              


                
          {/* {podcasterData.map((pod, index) => ( */}
         

                <form  className= "formformodal" onSubmit={handleSubmit}>  
     
                     <div className='obedinforinput'>
              
            <div className='inputplustext'>
                 <div className={`_rectangle15_1green ${error ? 'rectangle-container-error' : ''}`}>     
                    <input 
                        type="email" 
                        className={`_rectangle16 ${error ? 'rectangle-error' : ''}`}    
                        placeholder="Почта" 
                        value={email}
                        onChange={handleEmailChange}
                        required 
                    />     
                     </div>  
                     {error && (
                               <div className="text_for_mistake">{error}</div>
                        )}
                  
                      </div>
                      <div className='inputplustext'>
                 <div className={`_rectangle15_2green ${errorname ? 'rectangle-container-error' : ''}`}>     
                    <input 
                        type="name" 
                        className={`_rectangle16 ${errorname ? 'rectangle-error' : ''}`}    
                      
                        value={name}
                        onChange={handleNameChange}
                        required 
                    />     
                    
                  </div> 
                  {errorname && (
                               <div className="text_for_mistake">{errorname}</div>
                        )}
              </div>  
              <div className='inputplustext'>
              <div className={`_rectangle15_3green ${errorNickName ? 'rectangle-container-error' : ''}`}>     
                    <input 
                        type="text" 
                        className={`_rectangle16 ${errorNickName ? 'rectangle-error' : ''}`}    
                      
                         value={nickname}
                        onChange={handleNicknameChange}
                        required 
                    />     </div>    

                        {errorNickName && (
                               <div className="text_for_mistake">{errorNickName}</div>
                        )}
                      </div>
                  
                    <div className='inputplustext'>
              <div className={`_rectangle15_3pink ${errorDes ? 'rectangle-container-error' : ''}`}>     
                    <input 
                        type="text" 
                        className={`_rectangle16 ${errorDes ? 'rectangle-error' : ''}`}    
                      
                        value={description}
                        onChange={handleDescriptionChange}
                        required 
                    />     </div>    
                     {errorDes && (
                               <div className="text_for_mistake">{errorDes}</div>
                        )}
                    </div>
                  
            
              <div className="frame5_1">    
                    <img src={add} alt="" className="add"/>    
                    <div className="text_for_download">    
                        Загрузить фото профиля   
                    </div>    
                </div> 

                     <div className='inputplustext'>
                <div className={`_rectangle15_4green ${errorLink ? 'rectangle-container-error' : ''}`}>     
                    <input 
                        type="text" 
                        className={`_rectangle16 ${errorLink ? 'rectangle-error' : ''}`}    
                      
                        value={link}
                        onChange={handleLinkChange}
                        required 
                    />  </div>     
                    {errorLink && (
                               <div className="text_for_mistake">{errorLink}</div>
                        )}
                  
              </div>
              <div className='inputplustext'>
              <div  className={`_rectangle15_5 ${errorPassword ? 'rectangle-container-error' : ''}`}>         
                        <input    
                            type="password"    
                            className={`_rectangle16 ${errorPassword ? 'rectangle-error' : ''}`}  
                            placeholder="Изменить пароль"    
                            value={password}    
                            onChange={handlePasswordChange}    
                            required    
                        />    </div>       
                        {errorPassword && (       
                            <div className="text_for_mistake">{errorPassword}</div>       
                        )}       
                    </div>  
                    <div className="checkbox-container">
                        <div className='blockforcheckbox'> </div>
                        <input 
                            type="checkbox" 
                            className="checkbox-input" 
                            checked={isChecked} 
                            onChange={handleCheckboxChange} 
                            id="custom-checkbox"/>
                             
                        <label htmlFor="custom-checkbox" className="custom-checkbox"></label>
                        <span className="checkbox-label">Я согласен с условиями использования</span>
        </div>
        <div className='test1'>
                <div className='btnnForRegPodcaster1'>     
                    {isButtonDisabled1 === true ? (     
                          
                            <MainButton2 disabled={isButtonDisabled1}>Сохранить изменения</MainButton2>    
                       
                    ) : isHovered ? (    
                        <div className='bgforbtnsave'>    
                            <MainButton2 
                                onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave} 
                                disabled={isButtonDisabled1}
                            >   
                               Сохранить изменения  
                            </MainButton2>   
                        </div> 
                    ) : (    
                        <MainButton2 
                            // onClick={props.ispressed} 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave} 
                            disabled={isButtonDisabled1}
                        >   
                             Сохранить изменения    
                        </MainButton2>  
                    )} 


                   
                </div> 
                { isHovered1 ? (    
                        <div className='bgforbtnexit'>    
                            <ButtonExit 
                                onMouseEnter={handleMouseEnter1} 
                                onMouseLeave={handleMouseLeave1} 
                              
                            >   
                                Выйти из аккаунта   
                            </ButtonExit>   
                        </div> 
                    ) : (    
                        <ButtonExit 
                          
                            onMouseEnter={handleMouseEnter1} 
                            onMouseLeave={handleMouseLeave1} 
                           
                        >   
                            Выйти из аккаунта  
                        </ButtonExit>  
                    )}   </div>
          </div>
        </form>  
        {/* ))} */}
            </div>
        </div>
    );
};
