import '../../styles/main_style.scss';
import { connect } from "react-redux";
import LeftBar from '../../leftBar/leftBar.component';
import LoginForm from '../../login/login_form.component';
import Register from '../../register/register.component';
import MainContent from '../../mainContent/mainContent.component';


const Home = (props) => {
  const { fName, token, user } = props;

  if(token) {
    return (
      <div className='main-page'>
         <LeftBar background='#333' title='Left Bar' />
         <div className='main-content-holder' >
         <MainContent />
         <MainContent />
         </div>
      </div>
  
    );
  } else {
    return (
      <div className='main-page'>
        <div className='login-content'>
            <div className='heading-container'>
                <h2>If you have an account please Sign In</h2>
                <p>Sign in with your email and password.</p>
            </div>
            <LoginForm /> 
            
        </div>
        <div className='login-content'>
            <div className='heading-container'>
                <h2>Register for an account.</h2>
                <p>Fill in the form below.</p>
            </div>
            <Register />
            
        </div>
       
      </div>
  
    );
  };
}


const mapStateToProps = state => {
  console.log(state);
  return {
    fName: state.user.fName,
    token: state.user.token,
    user: state.user
  };
};

export default connect(mapStateToProps, { }) (Home);