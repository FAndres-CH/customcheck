import React from 'react';

class Car extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            brand: "",
            type: "type",
            age: "age"};
    }

    
    render() {
        return <div>
            <h1>Test Class</h1>
            <label>input </label> 
            <input 
            type="text" 
            class="form-control" 
            name={this.id}
            placeholder="Gleitschleifen">
            value={this.brand} 
            </input>
        </div>
    }

    getName() {
        return this.name;
    }
  }

  export default Car