import './Library.css'
import PodcastSection from '../PodcastSection/PodcastSection';
import TabsSectionForLibrary from '../TabsSection/TabsSectionForLibrary/TabsSectionForLibrary';
import Authors from '../Authors/AuthorsSection';   
import React, { useState } from 'react'; // Импортируйте React и useState
import Header from '../Header/Header';
import PodborSection from '../PodborSection/PodborSection';
import SubscribesSection from '../SubscribesSection/SubscribesSection';
export default function Library() {
    const [tab, setTab] = useState('pod');  
    const [searchTerm, setSearchTerm] = useState('');  
    return (       
        <>
        <Header  />  
        <div className="library_container">
            <div className="zagolovokForL">Library</div> 
            <div className="subtitle1ForL"> —  [ˈlaɪbrərɪ] (en.) библиотека</div> 
        </div> 
     

        <div className='obedinen11l'>  
                    <TabsSectionForLibrary Active1={tab} onChange={(current) => setTab(current)} />  
                        <div className='r1'>
                    {tab === 'pod' && <SubscribesSection />}  
                    {tab === 'podbor' && <PodborSection />}  
                    {tab === 'autor' && <Authors />}  </div>
        </div>
        </>
    )
} 