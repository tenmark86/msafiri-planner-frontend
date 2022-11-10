export default function tripReducer(state = {trips: []}, action) {

    switch (action.type) {
        case "FETCH_TRIPS":
            return {
                trips: action.payload
            }
        case "ADD_TRIP":
            return {
                ...state,
                trips: [...state.trips, action.payload]
            }
        case "DELETE_TRIP":
            return {
                ...state,
                trips: action.payload
            }
        case "EDIT_TRIP":
            let trips = state.trips.map(trip => {
                if (trip.id === action.payload.id){
                    return action.payload
                }
                else {
                    return trip
                }
            })
            return {
                ...state,
                trips: trips
            }
        case "ADD_PACKINGITEM":
            let trips1 = state.trips.map(trip => {
                if (trip.id === action.payload.id){
                    return action.payload
                }
                else {
                    return trip
                }
            })
            return {
                ...state,
                trips: trips1
            }
        case "DELETE_PACKINGITEM":
            let trips2 = state.trips.map(trip => {
                if (trip.id === action.payload.id){
                    return action.payload
                }
                else {
                    return trip
                }
            })
            return {
                ...state,
                trips: trips2
            }
        case "ADD_ITINERARY_ITEM":
            let trips3 = state.trips.map(trip => {
                if(trip.id === action.payload.id){
                    return action.payload
                }
                else {
                    return trip
                }
            })
            return {
                ...state,
                trips: trips3
            }
        case "DELETE_ITINERARY_ITEM":
            let trips4 = state.trips.map(trip => {
                if(trip.id === action.payload.id){
                    return action.payload
                }
                else {
                    return trip
                }
            })
            return {
                ...state,
                trips: trips4
            }
        default:
            return state
    }
}
