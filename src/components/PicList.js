import React from 'react'
import PicCard from './PicCard'

export default function PicList({picData, setSelectedGalaxy}) {


    

    function handleGalaxyChange(e){
        e.preventDefault()
        setSelectedGalaxy(e.target.galaxy.value)
    }


    const populateWithCards = picData.map(obj => {
                return (
                    <PicCard
                    key =  {obj.data[0].nasa_id}
                    date = {obj.data[0].date_created}
                    url = {obj.links[0].href} 
                    description = {obj.data[0].description} 
                    />
                )
            })

    

    return (
        <div>
            <form onSubmit={handleGalaxyChange} id="galaxies">
                <label for="galaxy">Which Galaxy would you like to search for?</label>
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
