import React from 'react'
import PicCard from './PicCard'

export default function PicList({picData}) {


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
            {populateWithCards}
        </div>
    )
}
