import axios from 'axios'

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START'
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS'
export const FETCHING_SMURF_FAIL = 'FETCHING_SMURF_FAIL'

export const getSmurfs = () => (dispatch) => {
    dispatch({type: FETCHING_SMURF_START})
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res.data)
        dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data})
        // let smurfs = [
        //     {
        //       name: 'Brainey',
        //       age: 200,
        //       height: '5cm',
        //       id: 0
        //     }
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: FETCHING_SMURF_FAIL,
            payload: err
        })
    })
}