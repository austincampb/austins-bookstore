import romanceImage from '../../images/romance.jpg'
import fantasyImage from '../../images/fantasy.webp'
import scifiImage from '../../images/scifi.png'
import horrorImage from '../../images/horror.jpg'
import mysteryImage from '../../images/mystery.jpg'
import Directory from '../../components/directory/directory.component'

const Home = () => {

  const categories = [
    {
      id: 1,
      title: 'Romance',
      image: romanceImage
    },
    {
      id: 2,
      title: 'Fantasy',
      image: fantasyImage
    },
    {
      id: 3,
      title: 'Science Fiction',
      image: scifiImage
    },
    {
      id: 4,
      title: 'Horror',
      image: horrorImage
    },
    {
      id: 5,
      title: 'Mystery',
      image: mysteryImage
    }
  ];

  return (
    <Directory categories={categories} />
  );
}

export default Home;
