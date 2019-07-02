import Immutable from 'immutable';
import { handleActions } from 'redux-actions';

const InitialState = Immutable.fromJS({
    GymID: '',
    gym:{},
    isFetching: false
});

const gym = handleActions({
  SELECT_GYM_ID: (state, { id }) => {
    return state.set('GymID', id)
  },
  GET_GYM_INFO: (state, { gym }) => {
    return state.set('gym', gym)
  },
  GYM_INFO_IS_FETCHING: (state, { x }) => (
    state.set('isFetching', x)
  )
}, InitialState);

export default gym;
