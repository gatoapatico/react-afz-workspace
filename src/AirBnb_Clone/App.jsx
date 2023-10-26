import Navbar from './components/Navbar'
import Main from './components/Main'
import Card from './components/Card'
import cardsData from './data'

export default function App() {
    const cards = cardsData.map(card => {
        return (
            <Card
                key={card.id}
                card={card}
            />
        ) 
    });
    return (
        <div className='main-container-airbnb'>
            <Navbar />
            <Main />
            <section className='cards'>
                {cards}
            </section>
        </div>
    )
}

/**
 * 
 * img={card.coverImg}
    rating={card.stats.rating.toFixed(1)}
    reviewCount={card.stats.reviewCount}
    country={card.location}
    title={card.title}
    price={card.price}
    openSpots={card.openSpots}
 */