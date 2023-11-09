import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";


export default function Vans() {

    const [vans, setVans] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");


    useEffect(() => {
        async function loadVans() {
            setLoading(true);
            try {
                const data = await getVans();
                setVans(data);
            } catch(err) {
                console.log("errro aquí")
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        loadVans();
    }, [])

    const vansDisplayed = typeFilter
        ? vans.filter(van => van.type.toLowerCase() == typeFilter)
        : vans;

    const vanElements = vansDisplayed.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={van.id} state={{search: searchParams.toString()}}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                    onClick={() => setSearchParams({type:"simple"})}
                >simple
                </button>
                <button
                    className={`van-type simple ${typeFilter === "luxury" ? "selected" : ""}`}
                    onClick={() => setSearchParams({type:"luxury"})}
                >luxury
                </button>
                <button
                    className={`van-type simple ${typeFilter === "rugged" ? "selected" : ""}`}
                    onClick={() => setSearchParams({type:"rugged"})}
                >rugged
                </button>
                {typeFilter && <button className="van-type clear-filters" onClick={() => setSearchParams({})}>clear</button>}
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}