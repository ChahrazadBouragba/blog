




import './App.css';
import AestheticPicture from './components/AestheticPicture'
import Aside from './components/Aside'
import Firstpost from './components/Firstpost';
import Images from './components/Images';
import Post from './components/post';
import Aesthetic from './components/Aesthetic';
import Quotations from './components/Quotes';
import favorite from './img/love.png'
import heart from './img/full-heart.png'
import link from './img/link.png'
import { useState } from 'react';

function App() {

  connst [heartIcon, setheartIcon] = useState(false)

  let heartIcon = heartIcon ? heart : favorite

  function toggllefavorite() {

  }

  return (
    <div className="Blog">
      <Aside/>

      <div className='post--wrapper'>
          <Firstpost/>

          <div className="post--container">
            <Quotations numberOfQuotes={1}/>

            <div className='reactions-div'>
              <span className='reaction-container'>
                <img className='reaction' src={link}></img>
              </span>
              
              <span className='reaction-container'>
                <img onClick={toggllefavorite} className='reaction' src={favorite}></img>
              </span>
            </div>
          </div>

          <div className="post--container">
            <Quotations numberOfQuotes={1}/>
            <div className='reactions-div'>
              <img className='reaction' src={link}></img>
              <img className='reaction' src={favorite}></img>
            </div>
          </div>

          <div className="post--container">
          <AestheticPicture  numberOfPictures={3}/>
          <div className='reactions-div'>
              <img className='reaction' src={link}></img>
              <img className='reaction' src={favorite}></img>
            </div>
          </div>
          
          <div className="post--container">
            <Quotations numberOfQuotes={1}/>
            <div className='reactions-div'>
              <img className='reaction' src={link}></img>
              <img className='reaction' src={favorite}></img>
            </div>
          </div>

          <div className="post--container">
            <AestheticPicture  numberOfPictures={6}/>
            <Quotations numberOfQuotes={1}/>
            <div className='reactions-div'>
              <img className='reaction' src={link}></img>
              <img className='reaction' src={favorite}></img>
            </div>
          </div>

          <div className="post--container">
            <AestheticPicture  numberOfPictures={6}/>
            <div className='reactions-div'>
              <img className='reaction' src={link}></img>
              <img className='reaction' src={favorite}></img>
            </div>
          </div>

          <div className="post--container">
            <Quotations numberOfQuotes={1}/>
            <div className='reactions-div'>
              <img className='reaction' src={link}></img>
              <img className='reaction' src={favorite}></img>
            </div>
          </div>

          <div className="post--container">
            <Images numberOfImages={5}/>
            <div className='reactions-div'>
              <img className='reaction' src={link}></img>
              <img className='reaction' src={favorite}></img>
            </div>
          </div>

          {/* <div className="post--container">
            <Aesthetic  numberOfImages={4}/>
          </div> */}

          <div className="post--container">
            <Quotations numberOfQuotes={1}/>
            <div className='reactions-div'>
              <img className='reaction' src={link}></img>
              <img className='reaction' src={favorite}></img>
            </div>
          </div>


          <div className="post--container">
            <AestheticPicture  numberOfPictures={6}/>
            <div className='reactions-div'>
              <img className='reaction' src={link}></img>
              <img className='reaction' src={favorite}></img>
            </div>
          </div>

          <div className="post--container">
            <Quotations numberOfQuotes={1}/>
            <div className='reactions-div'>
              <img className='reaction' src={link}></img>
              <img className='reaction' src={favorite}></img>
            </div>
          </div>

          <div className="post--container">
            {/* <Aesthetic  numberOfImages={2}/> */}
            <Images numberOfImages={3}/>
            <div className='reactions-div'>
              <img className='reaction' src={link}></img>
              <img className='reaction' src={favorite}></img>
            </div>
          </div>

          <div className="post--container">
            <Quotations numberOfQuotes={1}/>
            <div className='reactions-div'>
              <img className='reaction' src={link}></img>
              <img className='reaction' src={favorite}></img>
            </div>
          </div>

          <div className="post--container">
            <Images numberOfImages={1}/>
            <Quotations numberOfQuotes={1}/>
            <div className='reactions-div'>
              <img className='reaction' src={link}></img>
              <img className='reaction' src={favorite}></img>
            </div>
          </div>

          <div className="post--container">
          <AestheticPicture  numberOfPictures={12}/>
          <Quotations numberOfQuotes={1}/>
          <div className='reactions-div'>
              <img className='reaction' src={link}></img>
              <img className='reaction' src={favorite}></img>
            </div>
          </div>
      </div>

    </div>
  );
}

export default App;
