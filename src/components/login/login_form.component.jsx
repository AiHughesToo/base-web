import './login.style.scss'

const LoginForm = () => {
    return (
        <div className='login-main'>
        <div className='login-logo' />

        <div className='email-container'>
          <p>Email: </p>
        </div>
        <div className='password-container'>
          <p>Password:</p>
        </div>
        <div className='reset-link-container'>
          <p>Reset Password Link</p>
        </div>

      </div>

    )

}

export default LoginForm