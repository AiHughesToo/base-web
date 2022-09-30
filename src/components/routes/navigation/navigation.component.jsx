import { Outlet } from 'react-router-dom';
import './navigation.style.scss';

const Navigation = () => {
    return (
      <div className='page-background'>
        <div className='header-container'>
            <div className='header-left'>
                <h1 className='left-menu'>Left</h1>
            </div>
            <div className='header-center'>
                 <img className='logo-image' src='https://magnawaveportal.com/wp-content/uploads/2022/04/MW-GenericSeal.png'></img>
            </div>
            <div className='header-right'>
                <h1 className='right-menu'>Right</h1>
            </div>

        </div>

        <Outlet />
      </div>
    )
  };


  export default Navigation;