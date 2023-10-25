import reactLogo from '../images/react-icon-small.png'

export default function Navbar() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <img src={reactLogo} alt="React Logo" />
                        <h1>ReactFacts</h1>
                    </li>
                    <li>React Course - Project 1</li>
                </ul>
            </nav>
        </header>
    )
}