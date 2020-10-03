import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoe: [{ manufacturer: "Nike" }, { manufacturer: "Adidas" }],
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/Shoes/")
      .then((res) => res.json())
      .then((data) => this.setState({ shoe: data }));
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.shoe.map((p) => (
            <div>
              <h1>SHOE</h1>
              <li>Size: {p.size}</li>
              <li>Brand: {p.brand_name}</li>
              <li>Manufacturer: {p.manufacturer}</li>
              <li> Color: {p.color}</li>
              <li>Material: {p.material}</li>
              <li>Type: {p.shoe_type}</li>
              <li>Fasten type: {p.fasten_type}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
