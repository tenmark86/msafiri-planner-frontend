import React from "react";
import {connect} from "react-redux"
import {editTrip} from "../actions/editTrip";
import { Button } from 'react-bootstrap';

// class comp. has local state to hold form values
class TripEdit extends React.Component {

    state = {
        destination: "",
        start_date: "",
        end_date: "",
        ...this.props.trip
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        let trip = {...this.state, id: this.props.trip.id}
        this.props.editTrip(trip)
        this.setState({
            destination: "",
            start_date: "",
            end_date: ""              
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Destination: </label>
                    <input style={{ marginLeft: '.5rem'}} type="text" value={this.state.destination} name="destination" onChange={this.handleChange} />
                    <br/>
                    <br/>
                    <label>Start Date: </label>
                    <input style={{ marginLeft: '.5rem'}} type="date" value={this.state.start_date} name="start_date" onChange={this.handleChange} />
                    <br />
                    <br/>
                    <label>End Date: </label>
                    <input style={{ marginLeft: '.5rem'}} type="date" value={this.state.end_date} name="end_date" onChange={this.handleChange} />
                    <br/>
                    <br/>
                    <Button type="submit" style={{ marginLeft: '.5rem'}} size="md" variant="outline-secondary">Edit Trip</Button>
                </form>
            </div>
        )
    }
}

export default connect(null, {editTrip})(TripEdit)