import React from 'react'

export default function PicCard({url, description, date}) {

    console.log(url, date)

    return (
        <div>
            <img src={url} alt={description} width="450" height="400"></img>
        </div>
    )
}
