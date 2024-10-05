import React, { useState} from "react"; 
import './Login.css'
import fractal from './../../img/Group8830.png'
import MainButton2 from '../Button/MainButton2';
import { Link } from 'react-router-dom';
import HeaderForLR from "../header/HederForLR";

export default function Login(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => { 
        setIsHovered(true); 
    }; 
  
    const handleMouseLeave = () => { 
        setIsHovered(false); 
    }; 

    return ( 
        <> 
        <HeaderForLR/>
        <div className="parent1"> 
            <img src={fractal} alt="" className="group8830"/> 
        </div>
            <div className="text_for_login">Вход /</div>
            <Link to="/register"> {/* Используем Link вместо div */}
                <div className="text_for_register">Регистрация</div> 
            </Link>
            <div className="frame_8820"> 




                <div className="_rectangle15"> 
                    <input type="email" className='_rectangle16' placeholder="Почта" required /> 
                </div> 
                <div className="_rectangle15_1"> 
                    <input type="password" className='_rectangle16' placeholder="Пароль" required /> 
                </div> 
                     
                <div className="frame8821">   
                    <div className="text_for_forget_password">   
                        Забыли пароль? <Link to="/reset-password" className="orange-text">Восстановить</Link>   
                    </div>   
                </div> 
    
                <div className='btnnForLogin'>  
                    {props.testDeisabled === true ? (  
                        <div className='pocastdis'>  
                            <MainButton2 disabled={true}>Войти</MainButton2>  
                        </div>  
                    ) : isHovered ? (  
                        <div className='bgforbtn2'>  
                            <MainButton2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} disabled={props.testDeisabled}>  
                                Войти  
                            </MainButton2>  
                        </div>) : (  
                        <MainButton2 onClick={props.ispressed} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} disabled={props.testDeisabled}>  
                            Войти  
                        </MainButton2> 
                    )}  
                </div> 
            </div> 
        </> 
    );
};



