import React from 'react'

export default function LoginForm() {
  return (
    <div>
        <h3>Hi There!</h3>
        <p>Sign in to continue</p>

        <form>
            <label htmlFor="">Email</label>
            <input type='email' placeholder='johndoe@email.com' />

            <label htmlFor="">Password</label>
            <input type='password' placeholder='password' />

            <button type='submit'>Log in</button>
        </form>

        <p>Don't have an account? <a href="">Sign up</a></p>
    </div>
  )
}
