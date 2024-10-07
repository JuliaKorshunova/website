import * as style1 from './PodcasterProfile.css'
import link from '/link.png'
import Button from '../../Button/MainButton'
import logo from '/logo-name.svg'
import SecondButton from '../../Button/SecondButton'
import star from '/star.png'
import settings from '/settings.png'
import add from '/add.png'
import headphones from '/headphones.png'
import person from '/image 293.png'
import TabsSectionForPodcaster from '../../TabsSection/TabsSectionForPodcaster/TabSectionForPodcaster'
import LentaSection from '../../LentaSection/LentaSection'
import SubscribesSection from '../../SubscribesSection/SubscribesSection'
import PlayListSection from '../../PlayListSection/PlayListSection'
import React, { useState, useRef, useEffect } from 'react';
import PodcastSection from '../../PodcastSection/PodcastSection'
import SecondImgButton from '../../Button/SecondImgButton'
import SecondImgButtonPink from '../../Button/SecondImgButtonPink'
import HeaderForLog from '../../Header/HeaderForLog'
import Modal from '../../Modal/Modal'
import ModalNewPost from '../../Modal/ModalNewPost'
//import style1 from './Podcaster.css'
 export const nameofpodcaster="Александра Митрошина"
export default function Podcaster() {
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



  const [isModalOpenPost, setIsModalOpenPost] = useState(false);
  const [isModalOpenPodcast, setIsModalOpenPodcast] = useState(false);


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

  const[isHovered2, setIsHovered2]=useState(false)
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
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
  const[isHovered5, setIsHovered5]=useState(false)
  const handleMouseEnter5= () => {
    setIsHovered5(true);
  
  };
  const handleMouseLeave5= () => {
    setIsHovered5(false);

    };

  
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


                  { isHovered1 === true ? (
                      <div>
                          <SecondImgButtonPink 
                    //     onMouseOver={button.onToggleOpen4} 
                    // onMouseOut={button.onToggleOpen4}
                          
                           
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                        >
                            <img className="image-class" src={settings} alt={ 'Изображение кнопки'} />
                        </SecondImgButtonPink>
                      </div>) : (
                      <div className='bgforbtnp' id='1'>  <SecondImgButtonPink 
                 
                          
                             
                              onMouseEnter={handleMouseEnter1}
                              onMouseLeave={handleMouseLeave1}
                          >
                              <img className="image-class" src={settings} alt={ 'Изображение кнопки'} />
                          </SecondImgButtonPink></div>
                    )}





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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <TabsSectionForPodcaster Active1={tab} onChange={(current) => setTab(current)} />

        {tab === 'lenta' && (
            <div className="plus" style={{ flex: '0 1 auto' }}>
                {isHovered5 ? (
                    <SecondImgButtonPink
                        isImg={true}
                        onMouseEnter={handleMouseEnter5}
                        onClick={() => setIsModalOpenPost(true)}
                        onMouseLeave={handleMouseLeave5}
                    >
                        <img className="image-class" src={add} alt={'Изображение кнопки'} />
                    </SecondImgButtonPink>
                ) : (
                    <div className='bgforsipb'>
                        <SecondImgButtonPink
                            isImg={true}
                            onMouseEnter={handleMouseEnter5}
                            onMouseLeave={handleMouseLeave5}
                            onClick={() => setIsModalOpenPost(true)}
                        >
                            <img className="image-class" src={add} alt={'Изображение кнопки'} />
                        </SecondImgButtonPink>
                    </div>
                )}
            </div>
        )}
         {tab === 'podcast' && (
            <div className="plus" style={{ flex: '0 1 auto' }}>
                {isHovered5 ? (
                    <SecondImgButtonPink
                        isImg={true}
                        onMouseEnter={handleMouseEnter5}
                        onClick={() => setIsModalOpenPodcast(true)}
                        onMouseLeave={handleMouseLeave5}
                    >
                        <img className="image-class" src={add} alt={'Изображение кнопки'} />
                    </SecondImgButtonPink>
                ) : (
                    <div className='bgforsipb'>
                        <SecondImgButtonPink
                            isImg={true}
                            onMouseEnter={handleMouseEnter5}
                            onMouseLeave={handleMouseLeave5}
                            onClick={() => setIsModalOpenPodcast(true)}
                        >
                            <img className="image-class" src={add} alt={'Изображение кнопки'} />
                        </SecondImgButtonPink>
                    </div>
                )}
            </div>
        )}
    </div>

    {tab === 'lenta' && <LentaSection />}
    {tab === 'podcast' && <PodcastSection />}
    {tab === 'playlist' && <PlayListSection />}
    {tab === 'arhiv' && null}


</div>

        </div>
        </div>

        <Modal isOpen={isModalOpenPodcast} onClose={() => setIsModalOpenPodcast(false)} />
        <ModalNewPost isOpen={isModalOpenPost} onClose={() => setIsModalOpenPost(false)} />

        </div> 
        </> 
    )

}