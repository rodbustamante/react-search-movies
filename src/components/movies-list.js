import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Movie} from './movie'

class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired
  }
  render() {
    const { movies } = this.props
    return (
      <div 
        className='MoviesList'
      >
        {
          movies.map((movie, index) => (
            <div className='MoviesList-item' key={movie.imdbID}>
              <Movie 
                id={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
              />
            </div>
          ))
        }

      </div>
    )
  }    
}

export {MoviesList}