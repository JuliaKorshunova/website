import './MySubscriptions.css'

import TabsSectionForSubscriptions from '../TabsSection/TabsSectionForSubscriptions/TabsSectionForSubscriptions';
import PodcastSection from '../PodcastSection/PodcastSection';
import AuthorsSection from '../Authors/AuthorsSection';
import React, { useState } from 'react'; // Импортируйте React и useState
import Header from '../Header/Header';
import SubscribesSection from '../SubscribesSection/SubscribesSection';
import PodborSection from '../PodborSection/PodborSection';
import FilterForAuthors from '../Filter/FilterForAuthors';
import FilterForPodbor from '../Filter/FilterForPodbor';
import FilterForPodcast from '../Filter/FilterForPodcast';
export default function MySubscriptions  () {

    const [tab, setTab] = useState('pod');  
    const [searchTerm, setSearchTerm] = useState('');  
    return (
        <>
        <Header  />  
        <div className="sub_container">
            <div className="zagolovok1">Subsciptions</div> 
            <div className="subtitle11"> — [səbˈskrɪpʃ(ə)ns] (en.) подписки</div> 
        </div> 
        <div className="tab"></div>
        <div className='obedinen11'>  
                    <TabsSectionForSubscriptions Active1={tab} onChange={(current) => setTab(current)} />  
                        {/* <div className='r'> */}

                       
                        {tab === 'pod' && (
                    <>
                        <SubscribesSection />
                        <FilterForPodcast />
                    </>
                    )}    
                    {tab === 'podbor' && (
                    <>
                        <PodborSection />
                        <FilterForPodbor />
                    </>
                    )}  
                    {tab === 'autor' && (
                    <>
                        <AuthorsSection />
                        <FilterForAuthors />
                    </>
                    )}
              </div>
        {/* </div> */}
        </>
    )
} 

