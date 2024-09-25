import * as style1 from './SubscribesSection.css'
import Card from './OneSubcribe'
import {subscribe} from "./data.js"
export default function SubscribesSection() {

    return(
    //     <div className="grid-container">
    //     <div className="grid-item"><Card></Card></div>
    //     <div className="grid-item"><Card></Card></div>
    //     <div className="grid-item"><Card></Card></div>
    //     <div className="grid-item"><Card></Card></div>
    // </div>

    <div className='card-container'>
        {subscribe.map((sub) => (
                <Card 
                    name={sub.name} 
                    descriptionn={sub.descriptionn}  
                   time ={sub.time} 
                    author={sub.author} 
                    sub={sub.sub} 
                    image1={sub.image1} // Передаем первое изображение
                    image2={sub.image2} // Передаем второе изображение
                    image3={sub.image3} // Передаем третье изображение
                  
                    // like={way.like}  
                    // comm={way.comm} 
                    // repost={way.repost} 
                />
            ))}
    </div>
    )


}
