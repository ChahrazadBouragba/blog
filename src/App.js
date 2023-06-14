




import './App.css';
import AestheticPicture from './components/AestheticPicture'
import Aside from './components/Aside'
import Firstpost from './components/Firstpost';
import Images from './components/Images';
import Post from './components/post';
import Aesthetic from './components/Aesthetic'

function App() {
  return (
    <div className="Blog">
      <Aside/>

      <div className='post--wrapper'>
          <Firstpost/>
          <div className="post--container">
            <Aesthetic numberOfImages={9}/>
          </div>

        </div>

    </div>
  );
}

export default App;
