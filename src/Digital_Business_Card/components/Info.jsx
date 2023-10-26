import alvaro_photo from '../images/fotoalvaro.jpg'

export default function Info() {
    return (
        <div className="info">
            <img className='photo' src={alvaro_photo} alt="Alvaro Photo" />
            <h1>Alvaro Fernandez</h1>
            <h3>Full-Stack Developer</h3>
            <a href="https://github.com/gatoapatico">afz.website</a>
            <div className='contact-btns'>
                <button className='btn btn-email'><i className="bi bi-envelope-fill"></i>Email</button>
                <a className='btn btn-linkedin' href="https://linkedin.com/in/aferzu" target='_blank'><i className="bi bi-linkedin"></i>LinkedIn</a>
            </div>
        </div>
    )
}