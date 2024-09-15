import './MySubscriptions.css'
import TabsSection from '../Tab/TabSection'
import Podkasts from '../podcasts/Podkasts'
import Authors from '../Authors/Authors'
import React, { useState } from 'react'; // Импортируйте React и useState

export default function MySubscriptions  () {

    const [tab, setTab] = useState('pod');  
    const [searchTerm, setSearchTerm] = useState('');  
    return (
        <>
        <div className="library_container">
            <div className="zagolovok1">Subsciptions</div> 
            <div className="subtitle1"> — [səbˈskrɪpʃ(ə)ns] (en.) подписки</div> 
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

