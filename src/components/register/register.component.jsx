import { useState, } from 'react';
import { useDispatch } from 'react-redux'
import '../styles/main_style.scss';
import Button from '../buttons/button.component';

import { registerUser } from '../../actions/user.actions';
import { connect } from "react-redux";
 
const defaultLoginFileds ={
  email: '',
  password:'',
  fName: '',
  lName: '',
}

const Register = (props) => {
  const [formFields, setFromFields] = useState(defaultLoginFileds);
  const { email, password, fName, lName } = formFields;

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromFields({ ...formFields, [name]: value });
  };

  const handleClick = async () => {
    console.log("I clicked the button");
    console.log(formFields);
    dispatch(registerUser(formFields));
  };


    return (
        <div className='login-main'>
          <div className='group' />

          <div className='input-holder'>
            <label className='form-input-label'>Email</label>
            <input className='form-input' type="email" required onChange={handleChange} name="email" value={email} />
          </div>
          <div className='input-holder'>
            <label className='form-input-label'>First Name</label>
            <input className='form-input' type="email" required onChange={handleChange} name="fName" value={fName} />
          </div>
          <div className='input-holder'>
            <label className='form-input-label'>Last Name</label>
            <input className='form-input' type="email" required onChange={handleChange} name="lName" value={lName} />
          </div>
          <div className='input-holder'>
            <label className='form-input-label'>Password</label>
            <input className='form-input' type="password" required onChange={handleChange} name="password" value={password}/>
          </div>

          <Button onClick={handleClick}>Sign In</Button>

      </div>

    )

}

const mapStateToProps = state => {
  return {
    fName: state.user.fName,
  };
};


export default connect(mapStateToProps, { registerUser }) (Register);