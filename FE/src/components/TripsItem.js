import React, { Component } from 'react'

export default class TripsItem extends Component {
   

getStyle=()=>{
    return{
     backgroundColor: this.props.trip.completed? "red":"green"
    }  
} 
 


    render() {
        const{trip,markComplete,delTrip}=this.props
        const{id,place,email,price,numOfPeople}=trip
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={markComplete.bind(this,id)}/>{place}{email}{price}{numOfPeople}
                    <button id="btn" onClick={delTrip.bind(this,id)}>x</button>
                </p>
                
            </div>
        )
    }

}
