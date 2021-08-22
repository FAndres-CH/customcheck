import React from "react"
import MachineInput from "./components/./machine_input"
import './App.css'
import Car from "./components/./Test"

class Form extends React.Component {
  state = {
    machines: [{manufacturer:"", age:"", state:"unknown"}],
    owner: "",
    description: "",
    cars: [new Car(1, "ros", "beta", "1291")]
  }
handleChange = (e) => {
    if (["name", "age"].includes(e.target.className) ) {
      let machines = [...this.state.machines]
      machines[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
      this.setState({ machines }, () => console.log(this.state.machines))
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() })
    }
  }
addCat = (e) => {
    this.setState((prevState) => ({
      machines: [...prevState.machines, {machines:"", age:""}],
    }));
  }
handleSubmit = (e) => { e.preventDefault() }


addCar = (e) => {
  this.setState((prevState) => ({
    machines: [...prevState.cars, new Car(2, "ros", "beta", "1291")],
  }));
}

presentCars = () => {
  let text = []
   this.cars.map((car, index) => (
    text += <div eventKey={index}>car.present</div>
  ));

  return (text)}

render() {
    let {owner, description, machines, cars} = this.state
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
        <label htmlFor="name">Owner</label> 
        <input type="text" name="owner" id="owner" value={owner} />
        <label htmlFor="description">Description</label> 
        <input type="text" name="description" id="description" value={description} />
        <button onClick={this.addCar}>Add new cat</button>
        <Car id="1" brand="ff" type="dd" age="" />
        <input type="submit" value="Submit" /> 
      </form>
    )
  }
}
export default Form
