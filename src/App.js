import "./App.css";
import { Component } from "react";
import ToDoItem from "./Components/ToDoItem";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { title: "Di choi", isactive: false },
        { title: "Di hoc", isactive: false },
        { title: "Di lam", isactive: true },
      ],
    };
  }

  onItemClick(item) {
    return (event) => {
      console.log(item);
      const { items } = this.state;
      const isactive = item.isactive;
      const index = this.state.items.indexOf(item);
      this.setState({
        items: [
          ...items.slice(0, index),
          {
            ...item,
            isactive: !isactive,
          },
          ...items.slice(index + 1),
        ],
      });
    };
  }

  render() {
    console.log(this.state.items);
    return (
      <div className="App">
        {this.state.items.map((item, index) => (
          <ToDoItem item={item} key={index} onClick={this.onItemClick(item)} />
        ))}
      </div>
    );
  }
}

export default App;
