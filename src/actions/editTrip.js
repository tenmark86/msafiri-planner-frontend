export const editTrip = (trip) => {
    
    return (dispatch) => {
fetch(`https://travel-planner-backendd.herokuapp.com/api/v1/trips/${trip.id}`, { 
        // fetch(`http://localhost:3000/api/v1/trips/${trip.id}`, { 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify(trip)
        })
        .then(response => response.json())
        .then(trip => dispatch({type: "EDIT_TRIP", payload: trip}))
    }
}
