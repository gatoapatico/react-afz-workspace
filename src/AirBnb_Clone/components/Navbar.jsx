import airbnb_logo from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <header>
            <nav>
                <img className='airbnb-logo' src={airbnb_logo} alt="AirBnb Logo" />
            </nav>
        </header>
    )
}