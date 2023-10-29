import memeImage from '../images/memeimg.png'
import memeData from '../memeData'

export default function Main() {

    function handleClick() {
        console.log(memeData.data.memes.length);
    }

    function getRandomMeme() {
        const MAX_LENGTH = memeData.data.memes.length;
        const index = Math.floor(Math.random() * MAX_LENGTH);
        console.log(memeData.data.memes[index].url);
    }

    return (
        <main className="main-container">
            <div className="form">
                <input type="text" placeholder="Top Text"/>
                <input type="text" placeholder="Bottom Text"/>
                <button onClick={getRandomMeme}>Get a new meme image 🎭</button>
            </div>
            <div className='image-meme'>
                <img src={memeImage} alt="Meme Image" />
                <h1 className='txt_1'>SHUT UP</h1>
                <h1 className='txt_2'>AND TAKE MY MONEY</h1>
            </div>
        </main>
    )
}