import { useState } from 'react'
import Release from './components/Release/Release'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Library from './components/Library/Library'
import Header from './components/Header/Header'
import PodcasterProfile from './components/Podcaster/PodcasterProfile/PodcasterProfile'
import TabsSection from './components/TabsSection/TabsSectionForUser/TabsSectionForUser'
import LentaSection from './components/LentaSection/LentaSection'
import SubscribesSection from './components/SubscribesSection/SubscribesSection'
import PlayListSection from './components/PlayListSection/PlayListSection'
import { Registration } from './components/Forms/Registration'
import { Auth } from './components/Forms/Aurh'
import Main from './components/Main/Main'
import UserProfile from './components/Podcaster/UserProfile/UserProfile'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'; 
import MySubscriptions from './components/MySubscriptions/MySubscriptions'
import OtherPodcaster from './components/Podcaster/OtherPodcaster/OtherPodcaster'
import ThePageOfPodcast from './components/ThePageOfPodcast/ThePageOfPodcast'

function App() {
  const [count, setCount] = useState(0)


  return (
    < div className='o'>
    <Router> 
            
          

                <Routes>
                <Route path="/auth" element={<Auth />} />
                {/* <Route path="/release" element={<Release />} /> */}
                <Route path="/main" element={<Main />} />
                <Route path="/release" element={<ThePageOfPodcast />} />
                <Route path="/podcaster" element={<PodcasterProfile />} />
                {/* <Route path="/podcaster" element={<OtherPodcaster />} /> */}
                {/* <Route path="/podcaster" element={<UserProfile />} /> */}
                <Route path="/subscr" element={<MySubscriptions />} />
                <Route path="/library" element={<Library />} />
            </Routes>

                  
            
        </Router> 
    
    </div>
  )
}

export default App
