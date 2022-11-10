import React from "react";
import {connect} from "react-redux"
import { addTrip} from "../actions/addTrip";
import { Redirect } from 'react-router';
import { Button } from 'react-bootstrap';

// class comp. has local state to hold form values
class TripForm extends React.Component {

    state = {
        destination: "",
        start_date: "",
        end_date: "",
        redirect: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTrip(this.state)
        this.setState({
            destination: "",
            start_date: "",
            end_date: ""  ,
            redirect: true          
        })
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/trips/'/>;
        }

        return (
            <div>
                <br></br>
                <h2 className="trip_form_header" >Where to next?</h2>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <label>Destination: </label>
                    <input  style={{ marginLeft: '.5rem'} } 
                            type="text" value={this.state.destination} 
                            name="destination" 
                            onChange={this.handleChange} 
                    />
                    <br/> <br/>
                    <label>Start Date: </label>
                    <input  style={{ marginLeft: '.5rem'} } 
                            type="date" value={this.state.start_date} 
                            name="start_date" 
                            onChange={this.handleChange} 
                    />
                    <br/> <br/>
                    <label>End Date:</label>
                    <input  style={{ marginLeft: '.5rem'} } 
                            type="date" 
                            value={this.state.end_date} 
                            name="end_date" 
                            onChange={this.handleChange} />
                    <br/>
                    <br/>
                    <Button style={{ marginLeft: '5rem'} }
                            type="submit" 
                            variant="outline-secondary"
                    >Add Trip</Button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addTrip})(TripForm)