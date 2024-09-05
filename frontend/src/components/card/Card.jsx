import './Card.css'
import picture from './../../img/image 293.jpg'
import ellipse from './../../img/Ellipse 196.svg'

export default function Card(props) {   
    console.log(props);   
    return (    
      <section>    
        <div className="blackblock">    
          <div className="whiteblock">    
            <h2 className='zagalovok'>{props.title}</h2>    
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
          </div>    
        </div>    
      </section>    
    );      
}