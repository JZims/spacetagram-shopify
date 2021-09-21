import React, {useEffect, useRef} from 'react'
import { FaHandSpock } from "react-icons/fa"


export default function PicCard({url, description, date, id, title, userId, userLiked, handleDeleteLike, isLiked}) {

    

    //All user's likes are filtered through, checking if this post is already liked
   useEffect(() => {
        userLiked.forEach( obj => {
            return id === obj.nasa_id ? isLiked.current = true : null  
            })

        },[userLiked, id])

    function handleLike(){
           fetch(`http://localHost:3001/liked`, {
               method: "POST", 
               headers: {
                   "Content-Type": "application/json"
               }, 
               body: JSON.stringify({nasa_id: id, userId: userId})
           })
           .then( () => isLiked.current = true )
    }


    function handleUnlike(){

        handleDeleteLike(id)

        isLiked.current = false

        // fetch(`http://localhost:3001/liked/${deleteId}`, {
        //     method: "DELETE", 
        //     headers: {
        //         "Content-Type": "applicaiton/json"
        //     }
        // })
        // .then(() => setIsLiked(false))
    }
    

    return (
        <div className="image_div">
            <img src={url} alt={description} width="650" height="400" className="galaxy_image"/>
            <div className="galaxy_info">
                <h3>{title}</h3>
                <h5>Date Taken: {date}</h5>
                {isLiked.current ? <button id="unlike_button" onClick={() => handleUnlike(id)}> <FaHandSpock style={{color: 'blue'}} /> Liked </button> : <button id="like_button" onClick={() => handleLike() }> <FaHandSpock /> Like </button> }
            </div>
        </div>
    )
}
