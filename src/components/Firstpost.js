import image from '../img/00.jpg';
import profile from '../img/for3.jpg'




export default function Firstpost() {
    return (
        <div className="post--container">
            <div className='contetnt-wrapper'>
            <img className='intro--img' src={image}></img>
            </div>

            <form className='intro--input'>
                <img className='small-profile' src={profile}></img>
                <input  type="text" placeholder='What are you looking for?'></input>
            </form>
        </div>
    )
}