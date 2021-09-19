import { useEffect, useState } from 'react'
import Header from './Header'
import PicList from './PicList'
import Login from './Login'
import '../App.css';

function App() {
  const [picData, setPicData] = useState([])
  const [selectedGalaxy, setSelectedGalaxy] = useState("")
  const [loggedInUser, setLoggedInUser] = useState("")

  useEffect(() => {
    fetch(`https://images-api.nasa.gov/search?q=${selectedGalaxy}-galaxy-cluster`)
    .then( res => res.json() )
    .then( res => {        
            setPicData([...res.collection.items])        
        })
  },[selectedGalaxy])

if(loggedInUser === ""){
  return <Login setLoggedInUser={setLoggedInUser}/>
}else 
  return (
    <div className="App">
      <Header setLoggedInUser={setLoggedInUser}/>
      <PicList picData={picData} setSelectedGalaxy={setSelectedGalaxy}/>
    </div>
  );
}

export default App;



// NASA API Key = ?api_key=O9p5qZ42dAhhkSu46eLiHu3I9YhH31s0AerNKbJh