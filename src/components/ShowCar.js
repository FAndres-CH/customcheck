import React from "react"



const CarShow = (props) => {

    var list = ""

    return (props.cars.map((car, idx) => {
        
        text = car.present()
        list.push(<div eventKey={idx}>car.present</div>)

        return <div>list</div>))


    }
}
