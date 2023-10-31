import { useEffect, useState } from 'react';

export default function Main() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]: value
        }));
    }

    const [allMemes, setAllMemes] = useState([]);
    
    function getRandomMeme() {
        const MAX_LENGTH = allMemes.length;
        const index = Math.floor(Math.random() * MAX_LENGTH);
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMemes[index].url
        }));
    }

    /* WITHOUT ASYNC FUNCTIONS WAY */
    /* useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, []); */

    useEffect(() => {
        async function getMemes() {
            const res = await fetch('https://api.imgflip.com/get_memes');
            const data = await res.json();
            setAllMemes(data.data.memes);
        }
        getMemes();
    }, []);

    return (
        <main className="main-container">
            <div className="form">
                <input type="text" name="topText" value={meme.topText} placeholder="Top Text" onChange={handleChange}/>
                <input type="text" name="bottomText" value={meme.bottomText} placeholder="Bottom Text" onChange={handleChange}/>
                <button onClick={getRandomMeme}>Get a new meme image 🎭</button>
            </div>
            <div className='image-meme'>
                <img src={meme.randomImage} alt="Meme Image" />
                <h1 className='txt_1'>{meme.topText}</h1>
                <h1 className='txt_2'>{meme.bottomText}</h1>
            </div>
        </main>
    )
}