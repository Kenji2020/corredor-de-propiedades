import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Inicio = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedict ] = useState(false)

    const handleClick = (e) => {
        //e.preventDefault()
        console.log(userName, password)
        if(userName === "alo") {
            setRedict(true)
        }
    }
  return (
    <div className="container text-center">
                <form className="contact-form-wrap contact-form-bg">
                  <h4>Login</h4>
                  <div className="rld-single-input">
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Entry Login" />
                  </div>
                  <div className="rld-single-input">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Entry Password" />
                  </div>
                  <div className="btn-wrap">
                    <button className="btn btn-yellow" onClick={(e)=>handleClick(e)}>Sign In</button>
                    {
                        redirect && userName ? <Redirect  to ="/"/> : null
                    }
                  </div>
                </form>
    </div>
  )
}
export default Inicio
