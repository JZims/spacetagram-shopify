import React from 'react'

export default function Header({setLoggedInUser}) {

    function handleLogout(){
        setLoggedInUser("")
    }

    return (
        <div>
            <button onClick={handleLogout}> Log Out </button>
        </div>
    )
}
