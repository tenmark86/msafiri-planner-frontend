export const deleteItem = (item_id, trip_id) => {

    return (dispatch) => {
fetch(`https://travel-planner-backendd.herokuapp.com/api/v1/trips/${trip_id}/packing_items/${item_id}`, {
        // fetch(`http://localhost:3000/api/v1/trips/${trip_id}/packing_items/${item_id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(trip => dispatch({type: "DELETE_PACKINGITEM", payload: trip}))
    }
}