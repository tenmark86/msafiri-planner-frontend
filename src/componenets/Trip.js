import React from "react";
import PackingItemContainer from "../containers/PackingItemContainer";
import TripEdit from "./TripEdit";
import { deleteTrip } from "../actions/deleteTrip";
import { connect } from "react-redux";
import {Link, useHistory} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import ItineraryItemContainer from "../containers/ItineraryItemContainer";


const Trip = (props) => {

    let history = useHistory()
    
    let trip = props.trips.filter(trip => trip.id == props.match.params.id)[0]
    // When i put a === ^ nothing shows up? Why?? 
    const handleDelete = (trip) => {
        props.deleteTrip(trip.id)
        history.push('/trips') //re-routes to trips index page
    }

    const changeDate = (trip) => {
        if (trip){
            let startDate = trip.start_date.split("-")
            let endDate = trip.end_date.split("-")

        return(
            `${startDate[1]}/${startDate[2]}/${startDate[0]}  -->   ${endDate[1]}/${endDate[2]}/${endDate[0]}`)
        }
    }

    return (
        <div >
            <h3 className="title">Where you're going:</h3>
            <div className="destination">{trip ? trip.destination : null}</div>
            <br/><br/>
            <h3 className="title">Travel Dates:</h3>
            <div className="answer"> {trip ? changeDate(trip) : null} </div> 
            <br></br>
            <div className="form_rows">
            <PackingItemContainer trip={trip} />
            <br/><br/>
            <ItineraryItemContainer trip={trip}/>
            </div>
            <br/><br/>
            <Button
                style={{ marginLeft: '1rem'}} 
                size="lg" 
                onClick={trip ? () => handleDelete(trip) : null}
                type="submit" 
                variant="outline-secondary"> Delete

            </Button>
            <br/><br/><br/><br></br>
            <h4 className="title">Edit your trip Information:</h4>
            <TripEdit trip={trip}/>
        </div>
    )
}

export default connect(null, {deleteTrip})(Trip)