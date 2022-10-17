import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import '../../styles/main_style.scss';
import { UserContext } from '../../../contexts/user.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log( currentUser);
    return (
      <div className='page-background'>
        <div className='header-container'>
            <div className='header-left'>
              <Link to='/account'><h1 className='left-menu'>Account</h1></Link>
            </div>
            <div className='header-center'>
              <Link to='/'>
                 <img className='logo-image' src='https://magnawaveportal.com/wp-content/uploads/2022/04/MW-GenericSeal.png'  alt=''/>
              </Link>
            </div>
            <div className='header-right'>

              { currentUser ? ( 
                 <Link to='/login'><h1 className='right-menu'>Log Out</h1></Link>
              ) : (
                 <Link to='/login'><h1 className='right-menu'>Login</h1></Link>
              )}
             
            </div>

        </div>

        <Outlet />
      </div>
    )
  };


  export default Navigation;