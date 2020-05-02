import React, { useState } from 'react'
import axios from 'axios'

const SmurfForm = () => {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: '',
    })
    const newSmurf = () => {

        axios
            .post('http://localhost:3333/smurfs', smurf)
            .then(window.location.reload())
            .catch(err => console.log(err))
    }
    const handleChange = (e) => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
          <form onSubmit={newSmurf}>
              <label>Name:</label>
            <input
              type='text'
              name='name'
              value={smurf.name}
              onChange={handleChange}
            /> <br />
            <label>Age:</label>
            <input
              type='number'
              name='age'
              value={smurf.age}
              onChange={handleChange}
            /><br />
            <label>Height:</label>
            <input
              type='text'
              name='height'
              value={smurf.height}
              onChange={handleChange}
            /><br />
            <button>Add Smurf</button>
          </form>
        </div>
      )
}
export default SmurfForm