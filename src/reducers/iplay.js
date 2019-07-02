import Immutable from 'immutable';
import { handleActions } from 'redux-actions';

const InitialState = Immutable.fromJS({
  gyms: [],
  isFetching : false,
  lat: '22.6426664',
  lng: '120.3284185'
});

const iplay = handleActions({
  GET_GYM_LIST: (state, { gyms }) => {
    return state.set('gyms', gyms)
  },
  IS_FETCHING: (state, { x }) => (
    state.set('isFetching', x)
  ),
  GET_POS_LAT: (state, {lat}) => (
    state.set('lat', lat)
  ),
  GET_POS_LNG: (state, {lng}) => (
    state.set('lng', lng)
  )
}, InitialState);

export default iplay;
