import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
    return (
        <main className="main-container">
            <div className="inner-container">
                <Info />
                <About />
                <Interests />
                <Footer />
            </div>
        </main>
    )
}