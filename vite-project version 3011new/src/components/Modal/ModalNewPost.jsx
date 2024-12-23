import close from '/close.png'; 
import add from '/add1.png'; 
import './Modal.css';  
import MainButton2 from '../Button/MainButton2'
import { useState, useRef } from "react";
export default function  ModalNewPost ({ isOpen, onClose }, props) {
    if (!isOpen) return null;



    const [username, setUsername] = useState('');     
    const [nickname, setNickname] = useState('');   
    const [errorUsername, setErrorUsername] = useState('');   
    const [errorNickname, setErrorNickname] = useState('');   
    const [isHovered, setIsHovered] = useState(false);    
    const [password, setPassword] = useState('');   
    const [errorPassword, setErrorPassword] = useState('');   

    const handleMouseEnter = () => {     
        setIsHovered(true);     
    };     
 
    const handleMouseLeave = () => {     
        setIsHovered(false);     
    };     
 
    const handleUsernameChange = (e) => {    
        setUsername(e.target.value);    
        if (errorUsername) {    
            setErrorUsername('');    
        }    
    };    

    const handleNicknameChange = (e) => {    
        setNickname(e.target.value);    
        if (errorNickname) {    
            setErrorNickname('');    
        }    
    };    

    const handleNicknameBlur = () => {    
        if (nickname.trim() === '') {    
            setErrorNickname('Для регистрации необходимо заполнить это поле');    
        }    
    };    

    const handlePasswordChange = (e) => {   
        const value = e.target.value;    
        setPassword(value);   
       
        // Проверяем валидность пароля   
        if (!/(?=.*[a-z])(?=.*[A-Z])/.test(value)) {    
            setErrorPassword('Пароль должен содержать строчную и заглавную буквы');    
        } else {    
            setErrorPassword(''); // Сбрасываем ошибку, если пароль валиден    
        }   
    };   

    const handleSubmit = (e) => {     
        e.preventDefault();     

        // Проверка на валидность    
        let hasError = false; // Флаг для отслеживания ошибки     
     
        if (username.trim() === '') {    
            setErrorUsername('Для регистрации необходимо заполнить это поле');     
            hasError = true;
        }    

        if (nickname.trim() === '') {    
            setErrorNickname('Для регистрации необходимо заполнить это поле');    
            hasError = true;
        }    

        if (password.trim() === '' || errorPassword) {   
            setErrorPassword('Пароль должен быть действительным');  
            hasError = true; 
        }  

        // Обработка успешной валидации, если все поля заполнены    
        if (!hasError) {   
            console.log('Имя пользователя:', username);     
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

    return (
        <div className="modal-overlay">
    
            <div className="modal-content1">
               <div className='thefirstrow'>
                <div className='newpod'>Новый пост</div> 
                <img className='close' src={close} alt='user'   style={{ cursor: 'pointer'  }}  onClick={onClose}/>
                </div>
              




                <form  className= "formformodal" onSubmit={handleSubmit}>  
     
               
        <div className='obedinforinput'>
              
               
                <div className={`_rectangle15_2_p ${errorNickname ? 'rectangle-container-error' : ''}`}>      
                <input 
                type="text"   
                className={`_rectangle16_p ${errorNickname ? 'rectangle-error' : ''}`}   
                placeholder="Текст поста"   
                value={nickname}   
                onChange={handleNicknameChange}   
                onBlur={handleNicknameBlur} 
                required   
                />      
                </div>

                {/* Условное отображение ошибки для ника */}    
                {errorNickname && (    
                <div className="text_for_mistake">{errorNickname}</div>    
                )}   

                        <div className="frame5_1">    
                    <img src={add} alt="" className="add"/>    
                    <div className="text_for_download">    
                        Прикрепить фото   
                    </div>    
                </div>      

                <div className='btnnForRegPodcaster'>     
                    {props.testDeisabled === true ? (     
                        <div className='pocastdis'>     
                            <MainButton2 disabled={true}>Опубликовать</MainButton2>    
                        </div>    
                    ) : isHovered ? (    
                        <div className='bgforbtn6'>    
                            <MainButton2 
                                onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave} 
                                disabled={props.testDeisabled}
                            >   
                                Опубликовать   
                            </MainButton2>   
                        </div> 
                    ) : (    
                        <MainButton2 
                            onClick={props.ispressed} 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave} 
                            disabled={props.testDeisabled}
                        >   
                            Опубликовать  
                        </MainButton2>  
                    )}   
                </div> 
          </div>
        </form>
            </div>
        </div>
    );
};
