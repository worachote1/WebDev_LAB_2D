import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
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
    "type": "อาหารยํา",
    "name": "ยํากุ้งสด",
    "img": "https://numsups.com/wp-content/uploads/2020/12/c1d9e57195cf4a7f897f93f2921a8e46-1024x683.jpg",
    "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lacinia ipsum nec tristique. Fusce a urna neque. Phasellus pellentesque lacinia justo, quis laoreet diam interdum ut. In congue lacus non neque molestie scelerisque. Vestibulum imperdiet, magna nec ornare tristique, quam mauris lobortis tellus, et ullamcorper nibh enim et lorem."
  },
  {
    "id": uuidv4(),
    "type": "อาหารทอด",
    "name": "ไข่เจียว",
    "img": "https://www.cpbrandsite.com/contents/tips_tricks/6mywyhx1dlfhzz3yzdq7ysoftizn7t1zotlqjxhn.jpg",
    "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lacinia ipsum nec tristique. Fusce a urna neque. Phasellus pellentesque lacinia justo, quis laoreet diam interdum ut. In congue lacus non neque molestie scelerisque. Vestibulum imperdiet, magna nec ornare tristique, quam mauris lobortis tellus, et ullamcorper nibh enim et lorem."
  },
  {
    "id": uuidv4(),
    "type": "อาหารย่าง",
    "name": "ไก่ย่างมิชลิน",
    "img": "https://static.naewna.com/uploads/news/source/628647.jpg",
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
