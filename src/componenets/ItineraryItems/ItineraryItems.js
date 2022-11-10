import React from "react";
import {connect} from "react-redux"
import { Button } from 'react-bootstrap';
import {deleteItineraryItem} from "../../actions/deleteItineraryItem"

// functional component can receive information from props from PackingContainer
const ItineraryItems = (props) => {

    const handleDelete = (item) => {
        props.deleteItineraryItem(item.id, item.trip_id)
    }

    return (
        <div>
                {props.itineraryItems.map(item => 
                    <li className="list_items" key={item.id} >{item.description}
                    <Button style={{ marginLeft: '1rem'}} 
                        size="sm" 
                        onClick={() => handleDelete(item)} 
                        type="submit" 
                        variant="outline-secondary">x
                    </Button></li>
                )}
        </div>
    )
}

export default connect(null, {deleteItineraryItem})(ItineraryItems)