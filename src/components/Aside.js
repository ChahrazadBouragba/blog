import profile from '../img/profilw8.jpg'


export default function Aside() {
    return (
        <aside>
            <img className="profile--img" src={profile}></img>
            <h2>URAS</h2>
            <p>This blog is a public display of art works</p>
            <p>ko-fi &#x2022; lit &#x2022; words &#x2022; photos &bull; still</p>

            <button>Home</button>
            <button>Ask</button>
            <button>Tags</button>
            <button>link</button>
        </aside>
    )
}