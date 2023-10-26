export default function Card(props) {
    return (
        <div className="card">
            <div className="photo">
                <img className="image" src={props.activity.image} alt="Activy Image" />
            </div>
            <div className="info">
                <h3><i className="bi bi-geo-alt-fill"></i>{props.activity.country} <a href="">View on Google Maps</a></h3>
                <h1>{props.activity.name}</h1>
                <h4><span>{props.activity.date_in}</span> - <span>{props.activity.date_out}</span></h4>
                <p>{props.activity.description}</p>
            </div>
        </div>
    )
}