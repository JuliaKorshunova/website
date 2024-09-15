import { useState } from 'react'
import Release from './components/Release/Release'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Podcaster from './components/Podcaster/Podcaster'
import TabsSection from './components/TabsSection/TabsSection'
import LentaSection from './components/LentaSection/LentaSection'
import SubscribesSection from './components/SubscribesSection/SubscribesSection'
import PlayListSection from './components/PlayListSection/PlayListSection'

function App() {
  const [count, setCount] = useState(0)
  const [tab, setTab]=useState('lenta')

  return (
    <>
     {/* <Header/>  */}
    
 <Release ></Release>
     {/* <div className='conteiner'>
     <div className='obedinen'> */}
     
{/* 
 <Podcaster/>
    <div className='obedinen1'>
    <TabsSection Active1={tab} onChange={(current)=>setTab(current)}/>

       {tab ==='lenta' ?  <LentaSection/> : null }
       {tab ==='subscribes' ? (
           <><SubscribesSection />
          </>) : null
         }
     {tab ==='playlist' ?  <PlayListSection/> : null }
     {tab ==='imagebutton' ?  null : null }
</div> */}
     {/* </div>
   
    </div> */}
    
    </>
  )
}

export default App
