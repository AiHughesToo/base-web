import './card.styles.scss'

const Card = ({ category }) => {

    const { imageURL, title } = category;

    return (
        <div className='content-container' style={{
            backgroundImage: `url(${imageURL})`
            }}>
            <div className='content-body-container'>
              <h2>{title}</h2>
              <p>paragraph text</p>
            </div>
          </div> 
    )

}

export default Card