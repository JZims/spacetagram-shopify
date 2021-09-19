import React, {useEffect, useState} from 'react'
import PicCard from './PicCard'

export default function PicList({picData, setSelectedGalaxy, user}) {

    const [userLiked, setUserLiked] = useState([])


    // fetch for list of liked posts when the page loads
    useEffect(()=>{
        fetch(`http://localHost:3001/users/${user.id}?_embed=liked`)
            .then(res => res.json())
            .then(res => {
                setUserLiked(res.liked)
            })
    },[])
    
   

    function handleGalaxyChange(e){
        e.preventDefault()
        setSelectedGalaxy(e.target.galaxy.value)
    }


    const populateWithCards = picData.map(obj => {
                return (
                    <PicCard
                    key = {obj.data[0].nasa_id}
                    id =  {obj.data[0].nasa_id}
                    title = {obj.data[0].title}
                    date = {obj.data[0].date_created}
                    description = {obj.data[0].description} 
                    url = {obj.links[0].href}
                    userId = {user.id}
                    userName = {user.username}
                    userLiked = {userLiked}
                    />
                )
            })

    

    return (
        <div>
            <form onSubmit={handleGalaxyChange} id="galaxies">
                <label htmlFor="galaxy">Which Galaxy would you like to search for?</label>
                <br/>
                <input type="text" id="galaxy" name="galaxy" placeholder="Enter a galaxy name:"/>
                <br/>
                <button type="submit" form="galaxies">Submit</button>
            </form>
            <br/>
            <br/>
            {populateWithCards}
        </div>
    )
}
