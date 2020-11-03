import React,{useState} from 'react';
import TripsItem from './TripsItem'

const Trips = (props) => {

  return (props.trips.map((trip) => (
    <TripsItem key={trip.id} trip={trip} markComplete={props.markComplete}
      delTrip={props.delTrip}
    />
  ))
  )

}




export default Trips