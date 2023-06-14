import image from '../img/for9.jpg';
import profile from '../img/profilw8.jpg'




export default function Firstpost() {
    return (
        <div className="post--container">
            <div className='intro--imgDiv'>
            <img className='intro--img' src={image}></img>
            </div>

            <div className='intro--input'>
                <img className='small-profile' src={profile}></img>
                <input  type="text" placeholder='What are you looking for?'></input>
            </div>
        </div>
    )
}