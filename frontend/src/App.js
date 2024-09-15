import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Header from "./components/header/Header";  
import Library from "./components/library/Library";  
import Podkasts from "./components/podcasts/Podkasts";  
import TabsSection from './components/Tab/TabSection';  
import Authors from './components/Authors/Authors';   
import Home from './components/Home/Home';   
import MySubscriptions from './components/MySubscriptions/MySubscriptions';   
import './/index.css'
export default function App() {  
    const [tab, setTab] = useState('pod');  
    const [searchTerm, setSearchTerm] = useState('');  

    return (  
        <Router> 
            <div className="wrapper">  
                <Header onSearchTermChange={setSearchTerm} />  

                <Switch> {/* Заменено с Routes на Switch */}
                    <Route path="/" exact component={Home} /> 
                    <Route path="/subscriptions" component={MySubscriptions} /> 
                    <Route path="/library" component={Library} /> 
                </Switch> 

                  
            </div> 
        </Router> 
    );  
}