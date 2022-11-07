import React from "react";

export default function Posts(props) {
    return (
        <div key={props.key} className="posts">
            <img 
            alt={props.item.title}
            src={props.item.image}
            className='posts--img'  />
            <div className="posts--info">
                <div className="posts--info-location">
                    <img 
                    alt='location icon' 
                    src='images/location-icon.png'
                    className="posts--info-location-icon" />
                    <h6 className="posts--info-location-name">{props.item.location}</h6>
                    <h6 className="posts--info-location-map">
                        <a href={`https://www.google.com/maps/place/${props.item.location}`}>View on Google Maps</a>
                    </h6>
                </div>
                <div className="posts--info-about">
                    <h2>{props.item.title}</h2>
                    <h6 className="posts--info-about-date">
                        {props.item.startdate} - {props.item.enddate}
                    </h6>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}