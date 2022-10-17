import '../styles/main_style.scss';
import Card from '../card/card.component';

const LeftBar = ({ background, title }) => {
// figure out the height for the page bg and the left bar. why  does it not stretch to contain content. 
    return (
        <div className='leftBar-container' style={{
            backgroundColor: background,
            }}>
            <div className='leftBar-title-container'>
              <h2 className='title-text'>{title}</h2>
            </div>
            <Card background='https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/shield-black-icon.png' title='Title' />
            <Card background='https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/shield-black-icon.png' title='Title' />
            <Card background='https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/shield-black-icon.png' title='Title' />
            <Card background='https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/shield-black-icon.png' title='Title' />
            <Card background='https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/shield-black-icon.png' title='Title' />
            <Card background='https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/shield-black-icon.png' title='Title' />
            <Card background='https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/shield-black-icon.png' title='Title' />
            <Card background='https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/shield-black-icon.png' title='Title' />
            <Card background='https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/shield-black-icon.png' title='Title' />
            <Card background='https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/shield-black-icon.png' title='Title' />
            <Card background='https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/shield-black-icon.png' title='Title' />
            <Card background='https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/shield-black-icon.png' title='Title' />
          
          </div> 
    )

};

export default LeftBar;