import React from 'react';

import './card.styles.css';

 const Card = props => (
    <div className="card">
        <img className="card--image"
            src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}  
            alt={props.movie.title + ' poster'}
          />
        <h3 className="card--title">{props.movie.title}</h3>
        <p><small>RELEASE DATE: {props.movie.release_date}</small></p>
        <p><small>RATING: {props.movie.vote_average}</small></p>
        <p className="card--desc">{props.movie.overview}</p>  
    </div>
);

export default Card;
