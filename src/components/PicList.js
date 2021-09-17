import React from 'react'
import { useState, useEffect } from 'react'
import PicCard from './PicCard'

export default function PicList() {
    const [pictureList, setPictureList] = useState([])

    useEffect(() => {
        fetch(`https://images-api.nasa.gov/album/Michoud_Artemis_III`)
        .then( res => res.json() )
        .then( res => {
            setPictureList(res.collection.items)
        })
    },[])

    function populateWithCards(){
        const sendToCard = pictureList.collection.items.map(obj => {
            return (
            <PicCard
              key =  {obj.data.nasa_id}
              url = {obj.links[0].href} 
              description = {obj.data.description} 
            />
            )
        })

        return sendToCard
    }

    return (
        <div>
            {populateWithCards}
        </div>
    )
}
