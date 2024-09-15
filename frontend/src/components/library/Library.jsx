import './library.css'
import Podkasts from "../podcasts/Podkasts";  
import TabsSection from '../Tab/TabSection';  
import Authors from '../Authors/Authors';   
import React, { useState } from 'react'; // Импортируйте React и useState

export default function Library() {
    const [tab, setTab] = useState('pod');  
    const [searchTerm, setSearchTerm] = useState('');  
    return (       
        <>
        <div className="library_container">
            <div className="zagolovok1">Library</div> 
            <div className="subtitle1"> —  [ˈlaɪbrərɪ] (en.) библиотека</div> 
        </div> 
        <div className="tab"></div>
        <div className='obedinen1'>  
                    <TabsSection Active1={tab} onChange={(current) => setTab(current)} />  
                    {tab === 'pod' && <Podkasts searchTerm={searchTerm} />}  
                    {tab === 'kurs' && null}  
                    {tab === 'autor' && <Authors />}  
                </div>
        </>
    )
} 