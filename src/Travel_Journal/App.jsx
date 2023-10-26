import Header from "./components/Header"
import Card from "./components/Card"
import activitiesData from "./data"

export default function App() {
    const activityCards = activitiesData.map(activity => {
        return <Card key={activity.id} activity={activity} />
    });
    return (
        <div className="body-container">
            <Header />
            <div className="cards">
                {activityCards}
            </div>
        </div>
    )
}