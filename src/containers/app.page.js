import {connect} from 'react-redux';
import * as actions from 'redux/actions';
import AppPage from 'components/app.page';

function mapStateToProps(state) {
  const {displayedPokemons, isFetched, error} = state.app;

  return {
    displayedPokemons,
    isFetched,
    error,
  };
}

const mapDispatchToProps = {
  getPokemons: actions.getPokemons,
  filterPokemons: actions.filterPokemons,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppPage);
