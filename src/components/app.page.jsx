import React, {Component} from 'react';

import pokeball from 'assets/svgs/pokeball.svg?inline';
import pokemonLogo from 'assets/images/pokémon-logo.png';

import Pokemon from './pokemon';
import Search from './search';

class AppPage extends Component {
  componentDidMount() {
    this.props.getPokemons();
  }

  handleSearch(event) {
    this.props.filterPokemons(event.currentTarget.value);
  }

  render() {
    let {displayedPokemons, isFetched, error} = this.props;

    let pokemons = displayedPokemons.map(pokemon => {
      return (
          <li className="pokemons__item" key={pokemon.id}>
            <Pokemon pokemon={pokemon}/>
          </li>
      );
    });

    return (
        <div className="page">
          <div className="page__logo">
            <img src={pokemonLogo} alt="pokemon logo" />
          </div>
          <div className="page__logo">
            <div
              style={{
                width: 50,
                height: 50,
                display: 'inline-block'
              }}
              dangerouslySetInnerHTML={{__html: pokeball}}
            />
          </div>
          {error && <div className="page__error">{error}</div>}
          <div className="page__search">
            <Search onChange={this.handleSearch.bind(this)}/>
          </div>
          {isFetched ? (
              <p>Loading...</p>
          ) : (
              <ul className="pokemons">{pokemons}</ul>
          )}
        </div>
    );
  }
}

export default AppPage;
