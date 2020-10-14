import React, {Component} from 'react'
import {Title} from '../components/title'
import {SearchForm} from '../components/search-form'
import {MoviesList} from '../components/movies-list'

class Home extends Component {
  state = {
    results: []
  }

  _handleResults = (results) => {
    this.setState({results})
  }

  render() {
    return (
      <div>
        <Title>
          Search movies
        </Title>
        <div className='SearchForm-wrapper'>
          <SearchForm onResults={this._handleResults}/>
        </div>
          {
            this.state.results.length === 0
              ? <p>Sin resultados</p>
              : <MoviesList movies={this.state.results}/>
          }
      </div>
    )
  }
}

export {Home}