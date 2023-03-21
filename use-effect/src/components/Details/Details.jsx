import axios from "axios"
import React, {useEffect, useState} from "react"
import "./Details.css";

const URL = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/"


export default function Details(props) {
    const [details, setDetails] = useState({ details: {} });

    useEffect(() => {
        if (props.selected) {
            axios(`${URL + props.selected + '.json'}`)
            .then(res => setDetails(res.data))
        }
    }, [props.selected])

    return (
        props.selected !== 0 && (
            <div className="details">
                <img className="details-img" 
                    src={details.avatar + `${'?img=' + props.selected}`} 
                    alt="user avatar" />
                <div className="details-text">
                    <div className="details-text-item details-text-title">{details.name}</div>
                    <div className="details-text-item"> City: {details.details.city}</div>
                    <div className="details-text-item"> Company: {details.details.company}</div>
                    <div className="details-text-item"> Position: {details.details.position}</div>
                </div>
            </div>
        )
    )
}