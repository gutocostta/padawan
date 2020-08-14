import * as ActionTypes from "./actionTypes";
import { getForce } from "../services/httpService";

const fetchStarWarsStarted = () => ({
  type: ActionTypes.FETCH_STARWARS_STARTED
});

const fetchStarWarsSucceededLight = sideForcelight => ({
  type: ActionTypes.FETCH_STARWARS_SUCCEEDED,
  sideForce: {sideForcelight: sideForcelight}
});

const fetchStarWarsSucceededDark = sideForceDark => ({
  type: ActionTypes.FETCH_STARWARS_SUCCEEDED,
  sideForce: {sideForceDark: sideForceDark}
});

const fetchStarWarsFailed = error => ({
  type: ActionTypes.FETCH_STARWARS_FAILED,
  error
});

export const fetchStarWarsLight = id => dispatch => {
  dispatch(fetchStarWarsStarted());
  getForce(id)
    .then(response => {
      const light = { data: response.data, time: response.timeResp, };
      dispatch(fetchStarWarsSucceededLight(light));
    })
    .catch(error => {
      dispatch(fetchStarWarsFailed());
    });
};

export const fetchStarWarsDark = id => dispatch => {
  dispatch(fetchStarWarsStarted());
  getForce(id)
    .then(response => {
      const dark = { data: response.data, time: response.timeResp, };
      dispatch(fetchStarWarsSucceededDark(dark));
    })
    .catch(error => {
      dispatch(fetchStarWarsFailed());
    });
};
