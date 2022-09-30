import './login.style.scss'
import Button from '../buttons/button.component';
import { useState } from 'react';

const defaultLoginFileds ={
  email: '',
  password:''
}

const LoginForm = () => {
  const [formFields, setFromFields] = useState(defaultLoginFileds);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromFields({ ...formFields, [name]: value });
  }

    return (
        <div className='login-main'>
          <div className='login-logo' />

          <form onSubmit={() => {}}>
            <label className='form-input-label'>Email</label>
            <input type="email" required onChange={handleChange} name="email" value={email} />
            <label>Password</label>
            <input type="password" required onChange={handleChange} name="password" value={password}/>
            <Button type='submit'>Sign In</Button>
          </form>
          
         
          <div className='reset-link-container'>
            <p>Reset Password Link</p>
          </div>

      </div>

    )

}

export default LoginForm