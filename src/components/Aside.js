import profile from '../img/for3.jpg'


export default function Aside() {
    return (
        <aside>
            <div className='aside-wrapper'>
                <img className="profile--img" src={profile}></img>
                <h2>URAS</h2>
                <div className='description'>
                    <p className='profile-tags'>ko-fi &#x2022; lit &#x2022; words &#x2022; photos &bull; still</p>
                    <p>This blog is a public display of art works</p>
                </div>
                <form>
                <button>Home</button>
                <button>Ask</button>
                <button>Tags</button>
                <button>link</button>
                </form>
            </div>
        </aside>
    )
}