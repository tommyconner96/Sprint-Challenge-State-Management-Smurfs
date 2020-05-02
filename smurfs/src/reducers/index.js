import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAIL
  } from '../actions/index'

  // const initialState = {
  //   name: null,
  //   age: null,
  //   height: null,
  //   id: null,
  //   isFetching: false,
  //   error: ''
  // }
  const initialState = {
    smurfs: []
  }

  export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_SMURF_START:
        return {
          ...state,
          isFetching: true
        }
      case FETCHING_SMURF_SUCCESS:
        return {
          ...state,
          smurfs:action.payload,
          isFetching: false
        }
      case FETCHING_SMURF_FAIL:
        return {
          ...state,
          isFetching: false,
          error: 'There was an error'
        }
      default:
        return state
    }
  }
  