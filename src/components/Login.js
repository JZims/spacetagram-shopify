import React from 'react'

export default function Login({setLoggedInUser}) {

  

    function handleLogin(e){
        e.preventDefault()
        const submitMethod = e.nativeEvent.submitter.name 
        const username = e.target.username.value
        const password = e.target.password.value

        if(submitMethod !== "login"){
            fetch(`https://my-json-server.typicode.com/JZims/spacetagram-shopify/users`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({username: username, password: password })
              }
            )
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if(res.username !== ""){
                    setLoggedInUser(res)
                } else {
                    return window.alert( "Incorrectly formatted username or password. Please Try again."
                    )
                
             } 
            })
        } else {
            
            fetch(`https://my-json-server.typicode.com/JZims/spacetagram-shopify/users?username=${username}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                //insecure login - password checking
                if(res.length >= 1 && res[0].password === password){
                    setLoggedInUser(res[0])
                }  else {
                    return window.alert( "Incorrect username or password. Please Try again.")
                } 
            })
        }
    }
        




    return (
        <div id="login_page">
            <h2>Please Log In</h2>
            <form id="login" onSubmit={handleLogin}>
                <input id="username" name="username" placeholder="Username"/>
                <br/>
                <input id="password" type="password" name="password" placeholder="password"/>
                <br/>
                <button type="submit" form="login" value="login" name="login">Log In</button>
                <br/>
                <h4>Or...</h4>
                <button type="submit" form="login" value="new_user" name="new_user">Sign Up</button>
            </form>
        </div>
    )
}
