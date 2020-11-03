import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Trips from './components/Trips';
import Header from './components/layout/Header';
import AddTrips from './components/layout/AddTrips';
import axios from 'axios';
import './App.css';
const App = (props) => {
  // constructor(props) {
  //   super(props);
  //   state = {
  //     trips: []
  //   };
  // }

  const [trips, setTrips] = useState([])

  axios.get('http://localhost:5000/all')
    .then(res => {
      setTrips(res.data)
    })
    .catch((err) => {
      console.log(err)
    })




  const markComplete = (id) => {
    setTrips({
      trips: trips.map(trip => {
        if (trip.id === id) {
          trip.completed = !trip.completed
        }
        return trip
      })
    })
  }
  const delTrip = (id) => {
    axios.delete(`http://localhost:4000/delete${id}`)
      .then(res => setTrips({
        trips: [trips.filter(trip =>
          trip.id !== id)]
      }).catch((err) => {
        console.log(err)
      })
      )
  };

  const AddTrips = (title) => {
    console.log(title);
    axios.post("http://localhost:5000/add",
      {
        title,
        completed: false
      }
        .then(res => setTrips([trips, res.data] ))
        .catch((err) => {
          console.log(err)
        })
    )
  }



  return (
    <Router>
      <div>
        <Route path='/' component={Header} />
        <AddTrips AddTrips={AddTrips} />
        <Trips trips={trips} markComplete={markComplete} delTrip={delTrip} />
      </div>

    </Router>
  )



}


export default App