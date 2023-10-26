import photo_grid from '../images/photo-grid.png'

export default function Main() {
    return (
        <main>
            <img className='grid-photo' src={photo_grid} alt="Phot grid" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by
                one-of-a-kind-hosts-all without leaving home.
            </p>
        </main>
    )
}