import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Button from './components/Button';
import FoodComponent from './components/FoodComponent';
import FoodListComponent from './components/FoodListComponent';

function App() {

  const [foodData, setFoodData] = useState([{
    "id": uuidv4(),
    "type": "อาหารคาว",
    "name": "ข้าวผัด",
    "img": "http://food.mthai.com/app/uploads/2015/03/1324956564.jpg",
    "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in feugiat nunc. Mauris volutpat orci id posuere commodo. Aliquam ullamcorper lectus ac condimentum congue. Integer mattis risus vel aliquam faucibus. Nunc eu venenatis justo. Phasellus non ultricies sem, sed aliquet dui. Sed arcu tellus, rutrum sit amet convallis eget, auctor."
  }, {
    "id": uuidv4(),
    "type": "อาหารหวาน",
    "name": "บัวลอย",
    "img": "http://f.ptcdn.info/557/035/000/1442537793-IMG34862-o.jpg",
    "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lacinia ipsum nec tristique. Fusce a urna neque. Phasellus pellentesque lacinia justo, quis laoreet diam interdum ut. In congue lacus non neque molestie scelerisque. Vestibulum imperdiet, magna nec ornare tristique, quam mauris lobortis tellus, et ullamcorper nibh enim et lorem."
  },
  {
    "id": uuidv4(),
    "type": "อาหารหวาน",
    "name": "บัวลอย",
    "img": "http://f.ptcdn.info/557/035/000/1442537793-IMG34862-o.jpg",
    "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lacinia ipsum nec tristique. Fusce a urna neque. Phasellus pellentesque lacinia justo, quis laoreet diam interdum ut. In congue lacus non neque molestie scelerisque. Vestibulum imperdiet, magna nec ornare tristique, quam mauris lobortis tellus, et ullamcorper nibh enim et lorem."
  },
  {
    "id": uuidv4(),
    "type": "อาหารหวาน",
    "name": "บัวลอย",
    "img": "http://f.ptcdn.info/557/035/000/1442537793-IMG34862-o.jpg",
    "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lacinia ipsum nec tristique. Fusce a urna neque. Phasellus pellentesque lacinia justo, quis laoreet diam interdum ut. In congue lacus non neque molestie scelerisque. Vestibulum imperdiet, magna nec ornare tristique, quam mauris lobortis tellus, et ullamcorper nibh enim et lorem."
  },
  {
    "id": uuidv4(),
    "type": "อาหารหวาน",
    "name": "บัวลอย",
    "img": "http://f.ptcdn.info/557/035/000/1442537793-IMG34862-o.jpg",
    "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lacinia ipsum nec tristique. Fusce a urna neque. Phasellus pellentesque lacinia justo, quis laoreet diam interdum ut. In congue lacus non neque molestie scelerisque. Vestibulum imperdiet, magna nec ornare tristique, quam mauris lobortis tellus, et ullamcorper nibh enim et lorem."
  }
  ])

  return (
    <div className="App">
      <div className="header">
        <h1>โหวตอาหาร</h1>
      </div>
      <div className='food-container'>
        <FoodListComponent foodList={foodData} />
      </div>
    </div>
  );
}

export default App;
