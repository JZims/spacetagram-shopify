import React from 'react'

export default function PicCard({url, description}) {

    console.log(url)

    return (
        <div>
            <img src={url} alt={description} width="500" height="600"></img>
        </div>
    )
}
