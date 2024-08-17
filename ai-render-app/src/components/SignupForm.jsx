import React from 'react'

export default function SignupForm() {
  return (
    <div>
        <h3>Welcome!</h3>
        <p>Log in to continue</p>

        <form>
            <label htmlFor="">Email</label>
            <input type='email' placeholder='johndoe@email.com' />

            <label htmlFor="">Password</label>
            <input type='password' placeholder='password' />

            <button type='submit'>Log in</button>
        </form>

        <p>Already have an account? <a href="">Log in</a></p>
    </div>
  )
}
