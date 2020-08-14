import { FETCH_STARWARS_STARTED, FETCH_STARWARS_SUCCEEDED, FETCH_STARWARS_FAILED } from '../actions/actionTypes';
  
  const starWars = (

    state = { 
      isFetching: false,
      hasFetched: false,
    },

    action

  ) => {
    switch (action.type) {
      case FETCH_STARWARS_STARTED:
        return Object.assign({}, state, {
          isFetching: true,
          hasFetched: false
        });
      case FETCH_STARWARS_SUCCEEDED:
        return Object.assign({}, state, {
          isFetching: false,
          hasFetched: true,
          sideForce: action.sideForce
        });
      case FETCH_STARWARS_FAILED:
        return Object.assign({}, state, {
          isFetching: false,
          hasFetched: true,
          error: action.error
        });
      default:
        return state;
    }
  };
  
  export default starWars;
  