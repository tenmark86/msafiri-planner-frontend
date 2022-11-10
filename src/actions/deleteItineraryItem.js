export const deleteItineraryItem = (itemId, tripId) => {

    return (dispatch) => {
 fetch(`https://travel-planner-backendd.herokuapp.com/api/v1/trips/${tripId}/itinerary_items/${itemId}`, {
        // fetch(`http://localhost:3000/api/v1/trips/${tripId}/itinerary_items/${itemId}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(trip => dispatch({type: "DELETE_ITINERARY_ITEM", payload: trip}))
    }
}