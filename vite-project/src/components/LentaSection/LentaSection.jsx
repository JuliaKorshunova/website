import {ways} from "./data.js"

import { nameofpodcaster} from '../Podcaster/Podcaster'
import React from 'react';
import './LentaSection.css'

import * as style1 from './LentaSection.css'
import PostSection from './PostSection/PostSection.jsx';
export default function LentaSection() {

    return(

            <div className='ob'>
                 <div>
            {ways.map((way) => (
                <PostSection 
                    key={way.name} 
                    name={way.name}  
                    data={way.data} 
                    title={way.title} 
                    like={way.like}  
                    comm={way.comm} 
                    repost={way.repost} 
                />
            ))}
        </div>
            </div>
         
    )

}
