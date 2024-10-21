import * as style1 from './OtherPodcaster'
import './OtherPodcaster.css';  
import link from '/link.png'
import Button from '../../Button/MainButton'
import star from '/star.png'
import headphones from '/headphones.png'
import person from '/image 293.png'
import LentaSection from '../../LentaSection/LentaSection'
import PlayListSection from '../../PlayListSection/PlayListSection'
import React, { useState, useRef, useEffect } from 'react';
import PodcastSection from '../../PodcastSection/PodcastSection'
import HeaderForLog from '../../Header/HeaderForLog'
import TabsSectionForOtherPodcaster from '../../TabsSection/TabsSectionForOtherPodcaster.jsx/TabsSectionForOtherPodcaster'
//import style1 from './Podcaster.css'
 export const nameofpodcaster="Александра Митрошина"
export default function OtherPodcaster() {
  const [tab, setTab]=useState('lenta')

  const [podcasterData, setPodcasterData] = useState([]);

  useEffect(() => {
      // Замените 'data.json' на путь к вашему JSON-файлу
      fetch('/datapodcaster.json')
          .then((response) => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then((data) => setPodcasterData(data))
          .catch((error) => console.error('Ошибка при загрузке данных:', error));
  }, []);



  const[isHovered, setIsHovered]=useState(false)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
      
  
           <>
                 <HeaderForLog/>  
           
           <div className='conteiner'>
           <div className='obedinen'> 
           <div className='obedineniesphoto'>
        <div className='person'>
          <img src={person} />
        </div>

        <div className='obedinenie'>
          <h1 className='profile'>Профиль</h1>

          {podcasterData.map((pod, index) => (
               
           

          <section  key={index} className='s'>

            <div className='kos'>

            </div>

            <div className="pinkblock">
              <div className="whiteblock">
                <div className='rowforpodcater'>
                    <h2 className='thefforpodcasterprofile'>{pod.name}</h2>
                    <div className='usernameforpodacterprofile'>@ksoakso</div>
                    <img src={headphones} />

                </div>
              
                <h6 className='thesec'>{pod.descriptionn
                  }</h6>

                <div className='seroe'>
                  <div className='a'><img className='im1' src={link} /> </div>
                  <a className='ssylka'>{pod.link}</a> </div>
                <div className='groupofbtn'>




                  {/*
    {testDeisabled1 === true ? ( <div className='bgforbtn2' id='1'> <SecondButton   children='Изменить профиль'  disabled={testDeisabled1}/></div>)
 : isHovered1 === true ? (
  <SecondButton    onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  children='Изменить профиль'  disabled={testDeisabled1}/>) : (
    <div className='bgforbtn' id='1'> <SecondButton    onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  children='Изменить профиль1' disabled={testDeisabled1}/></div>)} */}

                    {pod.dis2 === true ? (
                    <div className='pocastdis'>
                      <Button disabled={true}>Стать подкастером</Button>
                      <p> Чтобы стать подкастером необходимо набрать {pod.countofsubcribeswenedd} подписчиков</p>
                    </div>
                  )
                    : isHovered === true ? (
                      <div className='bgforbtna'>
                        <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} disabled={pod.dis2}>
                          Подписаться
                        </Button>
                      </div>) : (
                      <Button onClick={ispressed} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} disabled={pod.dis2}>
                        Подписаться
                      </Button>)}   




                </div>


                <div className='countofsub'>
                  <p>
                    {pod.countofsubscriptionseswehave} подписок
                  </p>
                  <img src={star} />
                  <p>
                    {pod.countofsubscribseswehave} подписчиков
                  </p>

                </div>

              </div>


            </div>

          </section> ))}
          </div></div>
        
          <div className='obedinen2'>

          <TabsSectionForOtherPodcaster Active1={tab} onChange={(current) => setTab(current)} />

          {tab === 'lenta' ? <LentaSection /> : null}
          {tab === 'podcast' ? (
            <><PodcastSection />
            </>) : null}
          {tab === 'podborki' ? <PlayListSection /> : null}
        
        </div>
        </div>


        </div> 
        </> 
    )

}