import React from "react";
import {connect} from "react-redux"
import { addItineraryItem } from "../../actions/addItineraryItem";
import { Button } from 'react-bootstrap';

class ItineraryForm extends React.Component {

    state = {
        description: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addItineraryItem(this.state, this.props.tripId)
        this.setState({
            description: ""
        })
    }

    render() {
        return (
            <div>
                Add something else to your itinerary:
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="description" value={this.state.description} placeholder="what to do" onChange={this.handleChange}></input>
                    <Button className="addButton" type="submit" size="sm" variant="outline-secondary">Add</Button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addItineraryItem})(ItineraryForm)