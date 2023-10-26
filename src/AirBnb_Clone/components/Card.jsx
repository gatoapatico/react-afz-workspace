import star_icon from '../images/star.png'

export default function Card(props) {
    let badgeText = '';
    if(props.card.openSpots === 0) {
        badgeText = "SOLD OUT";
    }
    else if(props.card.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className='card'>
            {badgeText != '' && <div className='badge'>{badgeText}</div>}
            <img className='photo' src={`AirBnb_Clone/images/${props.card.coverImg}`} alt="photo" />
            <h4><img className='star' src={star_icon} alt="star Icon"/>{props.card.stats.rating} <span className='light'>({props.card.stats.reviewCount}) • {props.card.location}</span></h4>
            <h4>{props.card.title}</h4>
            <h4><span className='bold'>From ${props.card.price}</span> / person</h4>
        </div>
    )
}