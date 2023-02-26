import "./App.css";
import { Component } from "react";
import ToDoItem from "./Components/ToDoItem";
import downArrow from "../src/img/downArrow.png";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { title: "Di choi", isactive: false },
        { title: "Di hoc", isactive: true },
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

  onKeyUp(event) {
    console.log(event);
  }
  render() {
    console.log(this.state.items);
    if (ToDoItem.length) {
      return (
        <div className="App">
          <div className="Header">
            <img src={downArrow} width={32} height={32}></img>
            <input
              type="text"
              placeholder="Nhan vao thu xem "
              onKeyUp={this.onKeyUp}
            ></input>
          </div>
          {this.state.items.map((item, index) => (
            <ToDoItem
              item={item}
              key={index}
              onClick={this.onItemClick(item)}
            />
          ))}
        </div>
      );
    }
  }
}

export default App;
