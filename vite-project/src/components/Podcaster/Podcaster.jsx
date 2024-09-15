import * as style1 from './Podcaster.css'
import link from '/link.png'
import Button from '../Button/MainButton'
import logo from '/logo-name.svg'
import style from '../Button/MainButton.module.css'
import { useState, useRef } from "react";
import SecondButton from '../Button/SecondButton'
import star from '/star.png'
import person from '/image 293.png'

//import style1 from './Podcaster.css'
 export const nameofpodcaster="Александра Митрошина"
export default function Podcaster() {

  let testDeisabled=false;
  let testDeisabled1=false;
  let countofsubcribeswenedd=100;
  let countofsubscriptionseswehave=256;
  let countofsubscribseswehave=27;
 
  let description="По моим видео ты станешь блогером и начнешь зарабатывать. Подпишись🤟🏻"

  const[isHovered, setIsHovered]=useState(false)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const[isHovered1, setIsHovered1]=useState(false)
  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };



  const [pressed, setPressed]=useState(false)
  function ispressed(){
    return(
        setPressed(true))
    
  }
  const [pressed1, setPressed1]=useState(false)
  function ispressed1(){
    return(
        setPressed1(true))
    
  }
  
    return(
      
  
           <div className='obedineniesphoto'>  
           <div className='person'>
           <img src={person} />
           </div>
      
      <div className='obedinenie'>
          <h1 className='profile'>Профиль</h1>



          <section className='s'>

            <div className='kos'>

            </div>

            <div className="pinkblock">
              <div className="whiteblock">
                <h2 className='thef'>{nameofpodcaster}</h2>
                <h6 className='thesec'>{description}</h6>

                <div className='seroe'>
                  <div className='a'><img className='im1' src={link} /> </div>
                  <a className='ssylka'>vk.com/user</a> </div>
                <div className='groupofbtn'>




                  {/*
                  {testDeisabled1 === true ? ( <div className='bgforbtn2' id='1'> <SecondButton   children='Изменить профиль'  disabled={testDeisabled1}/></div>)
               : isHovered1 === true ? (
                <SecondButton    onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  children='Изменить профиль'  disabled={testDeisabled1}/>) : (
                  <div className='bgforbtn' id='1'> <SecondButton    onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  children='Изменить профиль1' disabled={testDeisabled1}/></div>)} */}


                  {testDeisabled1 === true ? (
                    <div className='bgforbtn2' id='1'> <SecondButton  children='Изменить профиль' disabled={testDeisabled1} /></div>
                  )
                    : isHovered1 === true ? (
                      <div>
                        <SecondButton onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} children='Изменить профиль' disabled={testDeisabled1} />
                      </div>) : (
                      <div className='bgforbtn' id='1'> <SecondButton onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} children='Изменить профиль' disabled={testDeisabled1} /></div>
                    )}





                  {testDeisabled === true ? (
                    <div className='pocastdis'>
                      <Button disabled={true}>Стать подкастером</Button>
                      <p> Чтобы стать подкастером необходимо набрать {countofsubcribeswenedd} подписчиков</p>
                    </div>
                  )
                    : isHovered === true ? (
                      <div className='bgforbtn'>
                        <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} disabled={testDeisabled}>
                          Стать подкастером
                        </Button>
                      </div>) : (
                      <Button onClick={ispressed} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} disabled={testDeisabled}>
                        Стать подкастером
                      </Button>)}


                  {/* <p>dis: {testDeisabled ? 'Да' : 'Нет'}</p>
<p>Hovered: {isHovered ? 'Да' : 'Нет'}</p> */}

                </div>


                <div className='countofsub'>
                  <p>
                    {countofsubscriptionseswehave} подписок
                  </p>
                  <img src={star} />
                  <p>
                    {countofsubscribseswehave} подписчиков
                  </p>

                </div>

              </div>


            </div>

          </section></div></div>
    )

}