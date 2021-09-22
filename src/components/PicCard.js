import React, {useEffect, useState} from 'react'
import { FaHandSpock } from "react-icons/fa"


export default function PicCard({url, description, date, id, title, userId, userName, userLiked, deleteId, setDeleteId}) {

    const[isLiked, setIsLiked] = useState(false) 
    

    //All user's likes are filtered through, checking if this post is already liked
   useEffect(() => {
        userLiked.forEach( obj => {

            if(id === obj.nasa_id){
                setIsLiked(true)
            }
        })

    },[userLiked, setDeleteId])

    
    
    console.log(deleteId)

    function handleLike(){
           fetch(`https://my-json-server.typicode.com/JZims/spacetagram-shopify/liked`, {
               method: "POST", 
               headers: {
                   "Content-Type": "application/json"
               }, 
               body: JSON.stringify({nasa_id: id, userId: userId})
           })
           .then( () => setIsLiked(true) )
    }

    

    const handleUnlike = function (){

        fetch(`https://my-json-server.typicode.com/JZims/spacetagram-shopify/liked/${deleteId}`, {
            method: "DELETE", 
            headers: {
                "Content-Type": "applicaiton/json"
            }
        })
        .then( () => setIsLiked(false))
    }

    function handleSetDelete(){
        userLiked.forEach( obj => {
            if(id === obj.nasa_id){

                setDeleteId(val => val = obj.id)
                handleUnlike()
            }
        })
        
    }
    

    return (
        <div className="image_div">
            <img src={url} alt={description} width="650" height="400" className="galaxy_image"/>
            <div className="galaxy_info">
                <h3>{title}</h3>
                <h5>Date Taken: {date}</h5>
                <p>{description}</p>
                {isLiked ? <button id="unlike_button" onClick={ () => handleSetDelete() }> <FaHandSpock style={{color: 'blue'}} /> Liked </button> : <button id="like_button" onClick={handleLike}> <FaHandSpock /> Like </button> }
            </div>
        </div>
    )
}
