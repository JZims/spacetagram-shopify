import React, {useEffect, useState} from 'react'
import { FaHandSpock } from "react-icons/fa"
import { ContextExclusionPlugin } from 'webpack'

export default function PicCard({url, description, date, id, title, userId, userName, userLiked}) {

    const[isLiked, setIsLiked] = useState(false) 
    const[deleteId, setDeleteId] = useState()

    //All user's likes are filtered through, checking if this post is already liked
   useEffect(() => {
        userLiked.forEach( obj => {

            if(id === obj.nasa_id){
                setIsLiked(true)
                // setDeleteId(obj.id)
            }
        })

    },[userLiked, id])
    
    // console.log(deleteId)

    function handleLike(){
           fetch(`http://localHost:3001/liked`, {
               method: "POST", 
               headers: {
                   "Content-Type": "application/json"
               }, 
               body: JSON.stringify({nasa_id: id, userId: userId})
           })
           .then( () => setIsLiked(true) )
    }


    function handleUnlike(){


        fetch(`http://localhost:3000/liked/${id}`, {
            method: "DELETE", 
            headers: {
                "Content-Type": "applicaiton/json"
            }
        })
        .then(() => setIsLiked(false))
    }
    

    return (
        <div className="image_div">
            <img src={url} alt={description} width="650" height="400" className="galaxy_image"/>
            <div className="galaxy_info">
                <h3>{title}</h3>
                <h5>Date Taken: {date}</h5>
                {isLiked ? <button id="like_button" onClick={handleUnlike}> <FaHandSpock /> Liked </button> : <button id="like_button" onClick={handleLike}> <FaHandSpock /> Like </button> }
            </div>
        </div>
    )
}
