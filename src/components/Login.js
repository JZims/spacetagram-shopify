import React from 'react'

export default function Login({setLoggedInUser}) {

  

    function handleLogin(e){
        e.preventDefault()
        const submitMethod = e.nativeEvent.submitter.name 
        const username = e.target.username.value
        const password = e.target.password.value

        if(submitMethod !== "login" && (username.length > 2)){
            fetch(`http://localhost:3001/users`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({username: username, password: password })
              }
            )
            .then(res => res.json())
            .then(res => {
                if(res.username){
                    setLoggedInUser(res.username)
                } else {
                    return window.alert( "Incorrectly formatted username or password. Please Try again."
                    )
                
             } 
            })
        } else {
            fetch(`http://localhost:3001/users?username=${username}`)
            .then(res => res.json())
            .then(res => {
                if(res.username && (password.toLowercase() === res.password.toLowercase())){
                    setLoggedInUser(res.username)
                }  else {
                    return window.alert( "Incorrect username or password. Please Try again."
                    )} 
            })
        }
    }
        




    return (
        <div id="login_page">
            <p><h2>Please Log In</h2></p>
            <form id="login" onSubmit={handleLogin}>
                <input id="username" name="username" placeholder="Username"/>
                <br/>
                <input id="password" type="password" name="password" placeholder="password"/>
                <br/>
                <button type="submit" form="login" value="login" name="login">Log In</button>
                <br/>
                <p><h4>Or...</h4></p>
                <button type="submit" form="login" value="new_user" name="new_user">Sign Up</button>
            </form>
        </div>
    )
}
