import React from 'react';

import  Card  from '../card/card.component';

import './card-list.styles.css';

 const CardList = props => (
    <div className="card-list">
        {props.movies.map(movie => (
            <Card 
                key={movie.id}
                movie={movie}
            />
        ))}
    </div>
);

export default CardList;