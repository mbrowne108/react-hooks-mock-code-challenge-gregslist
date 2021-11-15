import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch] = useState("")

  const formInput = (searchText) => {
    setSearch(searchText)
  }


  return (
    <div className="app">
      <Header formInput={formInput}/>
      <ListingsContainer searchText={search}/>
    </div>
  );
}

export default App;
