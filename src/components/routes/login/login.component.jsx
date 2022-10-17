
import '../../styles/main_style.scss';
import LoginForm from '../../login/login_form.component';
import RegisterUser from '../../register/register.component';

const Login = () => {


  return (
    <div className='main-page'>
        <div className='login-content'>
            <div className='heading-container'>
                <h2>I already have an account</h2>
                <p>Sign in with your email and password.</p>
            </div>
            <LoginForm /> 
        </div>
        <div className='login-content'>
            <div className='heading-container'>
                <h2>I do not have an account</h2>
                <p>Register with your email and password.</p>
            </div>
            <RegisterUser />
        </div>
       
    </div>
  );
}

export default Login;