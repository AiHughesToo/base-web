
import '../styles/main_style.scss';

const Card = ({ background, title }) => {

    return (
        <div className='content-container' style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat"
            }}>
            <div className='content-body-container'>
              <h2>{title}</h2>
            </div>
          </div> 
    )

};

export default Card;