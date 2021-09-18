import { useEffect, useState } from 'react'
import Header from './Header'
import PicList from './PicList'
import '../App.css';

function App() {
  const [picData, setPicData] = useState([])

  useEffect(() => {

    fetch(`https://images-api.nasa.gov/album/Michoud_Artemis_III`)
    .then( res => res.json() )
    .then( res => {
            
            setPicData([...res.collection.items])
            
        })

  },[])


  return (
    <div className="App">
      <Header/>
      <PicList picData={picData}/>
    </div>
  );
}

export default App;



// NASA API Key = ?api_key=O9p5qZ42dAhhkSu46eLiHu3I9YhH31s0AerNKbJh