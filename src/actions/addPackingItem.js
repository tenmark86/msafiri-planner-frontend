export const addPackingItem = (item, tripId) => {
    return (dispatch) => {
        fetch(`https://travel-planner-backendd.herokuapp.com/api/v1/trips/${tripId}/packing_items`, {
        // fetch(`http://localhost:3000/api/v1/trips/${tripId}/packing_items`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify(item)
        })
        .then(resp => resp.json())
        .then(trip => dispatch({type: "ADD_PACKINGITEM", payload: trip}))
    }
}

