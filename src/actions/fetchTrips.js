export function fetchTrips() {
    return (dispatch) => {
        fetch('https://travel-planner-backendd.herokuapp.com/api/v1/trips')
        // fetch('http://localhost:3000/api/v1/trips')
        .then(resp =>resp.json())
        .then(trips => dispatch({
           type: "FETCH_TRIPS",
           payload: trips      
        }))
    }
}

