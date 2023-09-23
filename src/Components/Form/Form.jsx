import './Form.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { useState } from 'react'

function Form() {
    const [uname, setUname] = useState('')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [cpwd, setCpwd] = useState('')
    const [pref, setPref] = useState('react')

    function isValidEmail(email) {
        // Regular expression for a simple email format validation
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    function formSubmission() {
        if (uname.trim().length <= 5) {
            alert("Short Username. Username must be atleast 6 characters long.")
            return
        }
        if (pwd.trim().length <= 5) {
            alert("Short Password. Password must be atleast 6 characters long.")
            return
        }
        if (cpwd != pwd) {
            alert("Password did not match")
            return
        }
        if(!isValidEmail(email)){
            alert("Email is not in the correct format")
            return
        }
        alert("Congrats! Your are successfully signed up.")
    }

    return (
        <div className="box1">
            <div>
                <label htmlFor="uname">Username: </label>
                <input id="uname" type="text" value={uname} onChange={(event) => setUname(event.target.value)} placeholder='Enter your username' />
            </div>
            <br />
            <div>
                <label htmlFor="email">Username: </label>
                <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Enter your email' />
            </div>
            <br />
            <div>
                <label htmlFor="pwd">Password: </label>
                <input id="pwd" type="password" value={pwd} onChange={(event) => setPwd(event.target.value)} placeholder='Enter your password' />
            </div>
            <br />
            <div>
                <label htmlFor="cpwd">Confirm Password: </label>
                <input id="cpwd" type="password" value={cpwd} onChange={(event) => setCpwd(event.target.value)} placeholder='Confirm password' />
            </div>
            <br />
            <div>
                <label htmlFor="pref">Select your Preference: </label>
                <select name="pref" id="pref" value={pref} onChange={(event) => setPref(event.target.value)}>
                    <option value="next">Next</option>
                    <option value="vue">Vue</option>
                    <option value="angular">Angular</option>
                    <option value="react">React</option>
                </select>
            </div>
            <br />
            <div>
                <button className='btn btn-outline-primary' onClick={formSubmission} type="submit">Sign Up</button>
            </div>
        </div>
    )
}

export default Form