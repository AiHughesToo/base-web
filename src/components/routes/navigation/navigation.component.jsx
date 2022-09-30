import { Outlet, Link } from 'react-router-dom';
import './navigation.style.scss';

const Navigation = () => {
    return (
      <div className='page-background'>
        <div className='header-container'>
            <div className='header-left'>
                <h1 className='left-menu'>Left</h1>
            </div>
            <div className='header-center'>
              <Link to='/'>
                 <img className='logo-image' src='https://magnawaveportal.com/wp-content/uploads/2022/04/MW-GenericSeal.png'  alt=''/>
              </Link>
            </div>
            <div className='header-right'>
              <Link to='/login'>
                <h1 className='right-menu'>Login</h1>
              </Link>
            </div>

        </div>

        <Outlet />
      </div>
    )
  };


  export default Navigation;