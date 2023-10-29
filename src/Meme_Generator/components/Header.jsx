import trollFace from '../images/troll_face.png'

export default function Header() {
    return (
        <header className="header">
            <h2 className="title"><img src={trollFace} alt="Meme Face" />Meme Generator</h2>
            <h3 className="subtitle">React Course - Project 3</h3>
        </header>
    )
}