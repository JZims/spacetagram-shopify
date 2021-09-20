import React from 'react'

export default function PicCard({url, description, date, id, title, userId, userName, userLiked}) {

    var isLiked = false

    userLiked.map(obj => {
        id === obj.nasa_id
    })

    function handleLike(){
        //On like, all user's likes are fetched and filtered thrrough, checking if
        //the liked post matches an already liked post. 
           fetch(`http://localHost:3001/users/${userId}?_embed=liked`)
            .then(res => res.json())
            .then(res => {

            })
    }
    

    return (
        <div className="image_div">
            <img src={url} alt={description} width="650" height="400" className="galaxy_image"/>
            <div className="galaxy_info">
                <h3>{title}</h3>
                <h5>Date Taken: {date}</h5>
                <button id="like_button" onClick={handleLike}>Like</button>
            </div>
        </div>
    )
}
