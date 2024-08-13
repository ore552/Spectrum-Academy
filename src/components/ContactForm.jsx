import React from 'react'
import './ContactFormStyle.css'


const ContactForm = () => {

  return (

    <div className='body'>
      <div class="wrapper">
            <form>
                <h2 className='h2'>Contact</h2>

                <div className='input-field'>
                  <input type="text" required/>
                  <label>Enter your full name.</label>
                </div>

                <div className='input-field'>
                  <input type="number" required/>
                  <label>Enter your age</label>
                </div>

                <div class="input-field">
                  <input type="text" required/>
                  <label>Enter Your email.</label>
                </div>

                <div class="input-field">
                  <input type="password" required/>
                  <label>Enter your password.</label>
                </div>

                <div className='input-field'>
                  <input type="number" required/>
                  <label>Enter your phone number.</label>
                </div>

                <div class="remember">
                 <label for="remember">
                    <input type="checkbox"/>
                    <p className='rememberme'>Remember me</p>
                 </label>

                 {/* <a href="#">Forget Password?</a> */}

                  <button type="submit">Submit</button>
                </div>
            </form>
      </div>
    </div>
    
  )
}

export default ContactForm
