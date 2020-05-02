import React, { useState, useEffect }  from 'react';

const Smurf = (props) => {
    console.log(props)

    const [smurf, setSmurf] = useState({})

    useEffect(() => {
        setSmurf(props.smurf)
    }, [props.smurf])

    return (

        <div>
            <p>{smurf.name}</p>
            <p>Height: {props.smurf.height}</p>
            <p>Age: {props.smurf.age}</p>
        </div>
    )
}

export default Smurf