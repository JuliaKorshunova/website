import close from '/close.png'; 
import close1 from '/close1.png'; 
import add from '/add1.png'; 
import done from '/done.png'; 
import './Modal.css';  
import './ModalBePodcaster.css';  
import MainButton2 from '../Button/MainButton2'
import { useState, useRef } from "react";
export default function  ModalBePodcaster ({ isOpen, onClose }, props) {
    if (!isOpen) return null;

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value); //event.target — это элемент, который вызвал событие. В данном случае это радиокнопка (input)
    };

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
    
            <div className="modal-contentbepod">
               <div className='thefirstrow'>
                <div className='newpod'>Стать подкастером</div> 
                <img className='close' src={close} alt='user'   style={{ cursor: 'pointer'  }}  onClick={onClose}/>
                </div>
              
                <form  className= "formformodal" onSubmit={handleSubmit}>  
        <div className='obedinforinputbepod'>
              <div className='linesforradiobtn'>
        <div className='radiobuttn1'>
            
                    <input
                        type="radio"
                        value="Выполнить условия"
                        checked={selectedOption === 'Выполнить условия'}
                        onChange={handleOptionChange}
                    />
                   <label className='txtformbl'>Выполнить условие</label>
                    </div>

                 
                    {selectedOption === 'Выполнить условия' && (
                    <><div className='uslovie2'>
                                    <div className='uslovie'>
                                        <img className="image-class" src={done} alt={'Изображение кнопки'} />
                                        <p className='textformodal'>Набрать 100 подписчиков</p>
                                    </div>
                                    <div className='uslovie'>
                                        <img className="image-class" src={close1} alt={'Изображение кнопки'} />
                                        <p className='textformodal1'>Набрать 100 подписчиков</p>
                                    </div>
                                    <div className='uslovie'>
                                        <img className="image-class" src={done} alt={'Изображение кнопки'} />
                                        <p className='textformodal'>Набрать 100 подписчиков</p>
                                    </div>
                                </div>
                                <div className='btnnForBePodcaster1'>
                                        {props.testDeisabled === true ? (
                                            <div className='pocastdis'>
                                                <MainButton2 disabled={true}>   Стать подкастером   </MainButton2>
                                            </div>
                                        ) : isHovered ? (
                                            <div className='bgforbtnbepod'>
                                                <MainButton2
                                                    onMouseEnter={handleMouseEnter}
                                                    onMouseLeave={handleMouseLeave}
                                                    disabled={props.testDeisabled}
                                                >
                                                    Стать подкастером
                                                </MainButton2>
                                            </div>
                                        ) : (
                                            <MainButton2
                                                onClick={props.ispressed}
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                disabled={props.testDeisabled}
                                            >
                                                Стать подкастером
                                            </MainButton2>
                                        )}
                                    </div></> 
                    )}
            </div>
                    <div className='radiobuttn'>
                    <input
                        type="radio"
                        value="Прикрепить ссылку на mave"
                        checked={selectedOption === 'Прикрепить ссылку на mave'}
                        onChange={handleOptionChange}
                    />
                     <label className='txtformbl'>Прикрепить ссылку на mave</label>
                    </div>
 
                    
                    <div>
                       
                        {selectedOption === 'Прикрепить ссылку на mave' && (
                <><div className='inbepod'>

                                    <div className="_rectangle15_1">
                                        <input type="text" className='_rectangle166' placeholder="Возрастное ограничение (при наличии)" />
                                    </div>

                                </div><div className='btnnForBePodcaster'>
                                        {props.testDeisabled === true ? (
                                            <div className='pocastdis'>
                                                <MainButton2 disabled={true}>   Стать подкастером   </MainButton2>
                                            </div>
                                        ) : isHovered ? (
                                            <div className='bgforbtnbepod'>
                                                <MainButton2
                                                    onMouseEnter={handleMouseEnter}
                                                    onMouseLeave={handleMouseLeave}
                                                    disabled={props.testDeisabled}
                                                >
                                                    Стать подкастером
                                                </MainButton2>
                                            </div>
                                        ) : (
                                            <MainButton2
                                                onClick={props.ispressed}
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                disabled={props.testDeisabled}
                                            >
                                                Стать подкастером
                                            </MainButton2>
                                        )}
                                    </div></> 



                        )}
                    </div>

                    <div className='btnnForBePodcaster2'>
                                        {props.testDeisabled === true ? (
                                            <div className='pocastdis'>
                                                <MainButton2 disabled={true}>   Стать подкастером   </MainButton2>
                                            </div>
                                        ) : isHovered ? (
                                            <div className='bgforbtnbepod'>
                                                <MainButton2
                                                    onMouseEnter={handleMouseEnter}
                                                    onMouseLeave={handleMouseLeave}
                                                    disabled={props.testDeisabled}
                                                >
                                                    Стать подкастером
                                                </MainButton2>
                                            </div>
                                        ) : (
                                            <MainButton2
                                                onClick={props.ispressed}
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                disabled={props.testDeisabled}
                                            >
                                                Стать подкастером
                                            </MainButton2>
                                        )}
                                    </div>

          </div>
        </form>
            </div>
        </div>
    );
};
