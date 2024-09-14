import './CardForPodcast.css'
import MainButton2 from '../Button/MainButton2';
import { useState, useRef } from "react";
export default function Card(props) {   

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

    console.log(props);   
    return (    
      <section section className="card">    
        <div className="blackblock">    
          <div className="whiteblock">
            <div className="container1">   
            <h2 className='zagalovok'>{props.title}</h2> 
            </div>    
            <h6 className='subtitle'>{props.subtitle}</h6>    
            <div className="categoryhastags"></div>   
            <div className="hashtags">   
              {props.hashtags.split(' ').map((hashtag, index) => (    
                <div key={index} className="hastags1">{hashtag}</div>  
              ))}  
            </div>    
            <div className="time">{props.time}</div>    
            <img src={props.img} alt='logo' className='picture' />    
            <div className="container">    
              <img src={props.ellipse} alt='logo' className='icon' />    
              <div className="text1">{props.canal}</div>    
              <div className="text2">{props.channel}</div>    
              {props.button}   
            </div>    
              <div className='btnn'>
                 {testDeisabled === true ? (
                    <div className='pocastdis'>
                      <MainButton2 disabled={true}>Слушать</MainButton2>
                      <p> Чтобы стать подкастером необходимо набрать подписчиков</p>
                    </div>
                  )
                    : isHovered === true ? (
                      <div className='bgforbtn1'>
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
      </section>    
    );      
}