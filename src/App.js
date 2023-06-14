




import './App.css';
import AestheticPicture from './components/AestheticPicture'
import Aside from './components/Aside'
import Firstpost from './components/Firstpost';
import Images from './components/Images';
import Post from './components/post';
import Aesthetic from './components/Aesthetic';
import Quotations from './components/Quotes';

function App() {
  return (
    <div className="Blog">
      <Aside/>

      <div className='post--wrapper'>
          <Firstpost/>

          <div className="post--container">
            <Quotations numberOfQuotes={1}/>
          </div>

          <div className="post--container">
          <AestheticPicture  numberOfPictures={9}/>
          </div>
          
          <div className="post--container">
            <Quotations numberOfQuotes={1}/>
          </div>

          <div className="post--container">
            <Quotations numberOfQuotes={1}/>
            <AestheticPicture  numberOfPictures={3}/>
          </div>

          <div className="post--container">
          <AestheticPicture  numberOfPictures={6}/>
          </div>

          <div className="post--container">
          <Aesthetic  numberOfPictures={5}/>
          </div>
      </div>

    </div>
  );
}

export default App;
