import React from "react"
import ReactDOM from "react-dom"
import data from "../data"

export default function(props) {
    return (
        <div className="card" id="card">
        <img className="card-image" src = {`${props.imageUrl}`}/>
        <div className="body">
            <div className="text-box">
                <div className="country-box">
                    <img className="location-logo" src = "https://user-images.githubusercontent.com/84178696/186698471-660ded5c-0c5b-46b5-8fa9-da1a049cdec0.png"/>
                    <h3 className="country-name">{props.location}</h3>
                </div>
                <a href={`${props.googleMapsUrl}`} className="maps-link"><h3>View on Google Maps</h3></a>
             </div>
             <h1 className="location-spot">{props.title}</h1>
             <p className="date">{props.startDate} - {props.endDate}</p>
             <p className="description">{props.description}</p>
             <hr></hr>
         </div>    
         </div>
    );
}