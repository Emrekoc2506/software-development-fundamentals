import { useRef } from 'react'
import { useState } from 'react'

export default function Login () {

  const [EmailError, setEmailError] = useState(false)
  const [PasswordError, setPasswordError] = useState(false)


  const email = useRef()
  const password = useRef()

  function handleSubmit (e) {
    e.preventDefault()
    setEmailError(false)
    setPasswordError(false)

    
    const emailval =  email.current.value;
    const passwordval = password.current.value;

    const emailIsInvalid = !emailval.includes("@");
    const passwordIsInvalid = passwordval.length < 6;

    if(emailIsInvalid){
      setEmailError(true)
    }
    if(passwordIsInvalid){
      setPasswordError(true)
    }

    if (!emailIsInvalid && !passwordIsInvalid) {
      console.log("form submitted");
      email.current.value = ''
      password.current.value = ''
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className='header'>
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
      </div>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input
          type='email'
          className={`form-control ${EmailError ? 'is-invalid' : ''}`} 
          id='email'
          name='email'
          ref={email}
        />
        {EmailError && <div className="invalid-feedback d-block">Email is invalid</div>}
      </div>
      <div className='mb-4'>
        <label htmlFor='password' className='form-label'>
          Password
        </label>
        <input
          type='password'
          className={`form-control ${PasswordError ? 'is-invalid' : ''}`} 
          id='password'
          name='password'
          ref={password}
        />
        {PasswordError && <div className="invalid-feedback d-block">Password is invalid</div>}
      </div>
      <div className='mb-3'>
        <button type='submit' className='btn btn-outline-warning me-2'>
          Submit
        </button>
        <button type='reset' className='btn btn-outline-light'>
          Reset
        </button>
      </div>
    </form>
  )
}
