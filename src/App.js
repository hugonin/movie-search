import React, { Component } from 'react';
import axios from 'axios';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


import './App.css';



class App extends Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            loading: false,
            value: ''
        };
    }    

    
        searchMovie = async val => {
            this.setState({ loading: true });
            const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=4cbee78d3a2d5bf9e4f1139452cd1b7c&language=en-US&query=${val}&page=1&include_adult=false`);
            const movies = await res.data.results;

            this.setState({ movies, loading: false});

        };

        onChangeHandler = async e => {
            this.searchMovie(e.target.value);
            this.setState({ value: e.target.value });
        }


    
    

    render() {
        const { movies, value } = this.state;
        const filteredMovies = movies.filter(movie =>
            movie.title.toLowerCase().includes(value.toLowerCase()));

        return(
            <div className="App">
                <h1 className="title"> Movie Searcher</h1>
                <SearchBox
                    placeholder="Type something..."
                    handleChange={e => this.onChangeHandler(e)}
                    value={this.state.value}
                 />
                 <CardList movies={filteredMovies} />
               
            </div>
        );
    }
}

export default App;