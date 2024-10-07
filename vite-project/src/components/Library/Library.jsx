import './Library.css'
import PodcastSection from '../PodcastSection/PodcastSection';
import TabsSectionForLibrary from '../TabsSection/TabsSectionForLibrary/TabsSectionForLibrary';
import Authors from '../Authors/AuthorsSection';   
import React, { useState } from 'react'; // Импортируйте React и useState
import Header from '../Header/Header';
export default function Library() {
    const [tab, setTab] = useState('pod');  
    const [searchTerm, setSearchTerm] = useState('');  
    return (       
        <>
        <Header  />  
        <div className="library_container">
            <div className="zagolovok1">Library</div> 
            <div className="subtitle1"> —  [ˈlaɪbrərɪ] (en.) библиотека</div> 
        </div> 
     

        <div className='obedinen11'>  
                    <TabsSectionForLibrary Active1={tab} onChange={(current) => setTab(current)} />  
                        <div className='r'>
                    {tab === 'pod' && <PodcastSection />}  
                    {tab === 'kurs' && null}  
                    {tab === 'autor' && <Authors />}  </div>
        </div>
        </>
    )
} 