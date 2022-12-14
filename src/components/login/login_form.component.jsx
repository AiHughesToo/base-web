import { useState, } from 'react';
import { useDispatch } from 'react-redux'
import '../styles/main_style.scss';
import Button from '../buttons/button.component';

import { loginUser } from '../../actions/user.actions';
import { connect } from "react-redux";
 
const defaultLoginFileds ={
  email: '',
  password:''
}

const LoginForm = (props) => {
  const [formFields, setFromFields] = useState(defaultLoginFileds);
  const { email, password } = formFields;

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromFields({ ...formFields, [name]: value });
  };

  
  const handleSubmit = async () => {
    console.log('logging the click');
    dispatch(loginUser(formFields));
  };

  const handleClick = async () => {
    console.log(formFields.email);
    console.log("I clicked the button");
    dispatch(loginUser(formFields));
  };


    return (
        <div className='login-main'>
          <div className='group' />

          <form onSubmit={handleSubmit}>
          <div className='input-holder'>
            <label className='form-input-label'>Email</label>
            <input className='form-input' type="email" required onChange={handleChange} name="email" value={email} />
          </div>
          <div className='input-holder'>
            <label className='form-input-label' >Password</label>
            <input className='form-input' type="password" required onChange={handleChange} name="password" value={password}/>
          </div>
          </form>

          <Button onClick={handleClick}>Sign In</Button>
         
          <div className='reset-link-container'>
            <p>Reset Password Link</p>
          </div>

          <div className='reset-link-container'>
            
            <p>Token: {props.token}</p>
            <p>Name: {props.fName}</p>
            <p>should be values above</p>
          </div>

      </div>

    )

}

const mapStateToProps = state => {
  return {
    fName: state.user.fName,
    token: state.user.token
  };
};


export default connect(mapStateToProps, { loginUser }) (LoginForm);