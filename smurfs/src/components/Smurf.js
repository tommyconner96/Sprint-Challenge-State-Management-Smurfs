import React, { useState, useEffect }  from 'react'
import axios from 'axios'

const Smurf = (props) => {
    console.log(props)

    const [smurf, setSmurf] = useState({})

    useEffect(() => {
        setSmurf(props.smurf)
    }, [props.smurf])

    const deleteSmurf = () => {
        axios
            .delete(`http://localhost:3333/smurfs/${smurf.id}`)
            .then(() => window.location.reload())
            .catch(err => err('there was a problem with deleting the smurf'))
    }

    return (

        <div>
            <p>{smurf.name}</p>
            <p>Height: {smurf.height}</p>
            <p>Age: {smurf.age}</p>
            <button onClick={() => {deleteSmurf()}}>Delete</button>
        </div>
    )
}

export default Smurf