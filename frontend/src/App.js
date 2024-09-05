import React from 'react';
import Header from "./components/header/Header";
import Library from "./components/library/Library";
import Podkasts from "./components/podcasts/Podkasts";
import './/index.css'
import Filter from "./components/filter/Filter";



export default function App() {
  return (
      <div className="wrapper">
          <Header />
          <Library/>
          <Filter/>
          <Podkasts />
      </div>
  );
}
