export const addTrip = (trip) => {

    return (dispatch) => {
fetch('https://travel-planner-backendd.herokuapp.com/api/v1/trips', { 
        // fetch('http://localhost:3000/api/v1/trips', { 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify(trip)
        })
        .then(response => response.json())
        .then(trip => dispatch({type: "ADD_TRIP", payload: trip}))
    }
}

export default addTrip
