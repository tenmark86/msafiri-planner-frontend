import React from "react";
import {connect} from "react-redux"
import {deleteItem} from "../../actions/deleteItem"
import { Button } from 'react-bootstrap';

// functional component can receive information from props from PackingContainer
const PackingItems = (props) => {

    const handleDelete = (item) => {
        props.deleteItem(item.id, item.trip_id)
    }

    return (
        <div>
            {props.packingItems && props.packingItems.map(item => 
                    <li className="list_items" key={item.id}>{item.item}
                    <Button style={{ marginLeft: '1rem'}} 
                    size="sm" 
                    onClick={() => handleDelete(item)} 
                    type="submit" 
                    variant="outline-secondary">x
                    </Button>
                    </li>   )}
        </div>
    )
}

export default connect(null, {deleteItem})(PackingItems)