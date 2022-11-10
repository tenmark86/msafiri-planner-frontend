import React from "react"
import PackingItemForm from "../componenets/PackingItems/PackingItemForm"
import PackingItems from "../componenets/PackingItems/PackingItems"

class PackingItemContainer extends React.Component {
// class component bc containers have state and need other functions

    checkTrip() {
        if(this.props.trip) {
        return (
            <div >
                <br/><br/>
                <h2 className="title" >What to pack:</h2>
                <PackingItems packingItems={this.props.trip && this.props.trip.packing_items} />
                <br/><br/>
                <PackingItemForm 
                    packingItems={this.props.trip && this.props.trip.packing_items} 
                    tripId={this.props.trip && this.props.trip.id} 
                />
            </div>
        )       
    }
}
        render() {
            return (
             <div> {this.checkTrip()} </div>   
            ) }

}

export default PackingItemContainer


    // render() {
    //     return (
    //         <div>
    //             <br/><br/>
    //             <h2 className="underlined" >Packing List:</h2>
    //             <PackingItems packingItems={this.props.trip && this.props.trip.packing_items} />
    //             <br/><br/>
    //             <PackingItemForm packingItems={this.props.trip && this.props.trip.packing_items} tripId={this.props.trip && this.props.trip.id} />
    //         </div>
    //     )
    // }