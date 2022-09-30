import '../../../category.style.scss';
import LoginForm from '../../login/login_form.component';

const Login = () => {


  return (
    <div className='main-page'>
        <div className='login-content'>
            <div className='heading-container'>
                <h2>Sign In</h2>
            </div>
            <LoginForm /> 
        </div>
        <div className='register-content'>
            <div className='heading-container'>
                <h2>Register</h2>
            </div>
            <LoginForm /> 
        </div>
       
    </div>
  );
}

export default Login;