import {playlist} from "./data.js"
import OnePlayList from './OnePlayList';
export default function PlayListSection() {
    return(
        <div className='vm'>


                 <div>
            {playlist.map((play) => (
                <OnePlayList 
                    name={play.name} 
                    descriptionn={play.descriptionn}  
                    view={play.view} 
                    release={play.release} 
                    image1={play.image1} // Передаем первое изображение
                    image2={play.image2} // Передаем второе изображение
                    image3={play.image3} // Передаем третье изображение
                    image4={play.image4} // Передаем третье изображение
                    // like={way.like}  
                    // comm={way.comm} 
                    // repost={way.repost} 
                />
            ))}
        </div>
            </div>
     





    ) }
