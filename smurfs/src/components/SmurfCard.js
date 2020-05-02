import React, {useState, useEffect} from "react"
import { connect } from "react-redux"
import Smurf from './Smurf'
import { getSmurfs } from "../actions/index"

const SmurfCard = (props) => {

  useEffect(() => {
    props.getSmurfs()
}, [])

if (props.isFetching) return (
  <p>
    Loading Smurfs
  </p>)

return (
  <div>
      <h1>Smurf List:</h1>
      <p>
          {props.smurfs.map((smurf) => {
              return (
                <Smurf key={smurf.id} smurf={smurf} />
              )
          })}
      </p>
  </div>
)
}

const mapStateToProps = (state) => {
  return {
      smurfs: state.smurfs
  }
}

export default connect
(mapStateToProps,{getSmurfs})
(SmurfCard)