import '../../../category.style.scss';
import Card from '../../../components/card/card.component';
const Home = () => {

  const categories = [
    {
      id: 1,
      title: 'Equine',
      imageURL: 'https://i.ibb.co/cvpntL1/hats.png'
    }
  ];

  return (
    <div className='main-page'>
      {categories.map((category) =>(
        <Card key={category.id} category={category}/>
      ))}
      
    </div>

  );
}

export default Home;