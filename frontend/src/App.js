import React, { useState } from 'react'; // Импортируйте React и useState
import Header from "./components/header/Header";
import Library from "./components/library/Library";
import Podkasts from "./components/podcasts/Podkasts";
import './/index.css'
import Filter from "./components/filter/Filter";



export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
      <div className="wrapper">
          <Header onSearchTermChange={setSearchTerm} />
          <Library/>
          <Filter/>
          <Podkasts searchTerm={searchTerm} />
      </div>
  );
}
