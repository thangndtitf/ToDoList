import "./App.css";
import { Component } from "react";
import ToDoItem from "./Components/ToDoItem";
import downArrow from "../src/img/downArrow.png";
import Page404 from "./Page404";
import Accordion from "./Components/Accordion/Accordion";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      items: [
        { title: "Di choi", isactive: false },
        { title: "Di hoc", isactive: true },
        { title: "Di lam", isactive: true },
      ],
    };

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onAddNewItemButton = this.onAddNewItemButton.bind(this);
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
    let text = event.target.value;
    if (event.keyCode === 13) {
      console.log(event.target.value);

      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }

      this.setState({
        newItem: "",
        items: [{ title: text, isactive: false }, ...this.state.items],
      });
    }
  }

  onAddNewItemButton(event) {
    let text = event.target.value;
    console.log("EnventTarget ne", text);
    this.setState({
      newItem: "",
      items: [{ title: text, isactive: false }, ...this.state.items],
    });
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value,
    });
  }

  render() {
    console.log(this.state.items);
    console.log("Lengt của ToDo nè : ", ToDoItem.length);
    if (ToDoItem.length) {
      return (
        <div className="App">
          <div className="Header">
            <img src={downArrow} width={32} height={32}></img>
            <input
              type="text"
              placeholder="Nhan vao thu xem "
              value={this.state.newItem}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}
            ></input>
          </div>
          <button className="InsertButton" onClick={this.onAddNewItemButton}>
            Add
          </button>
          {this.state.items.map((item, index) => (
            <ToDoItem
              item={item}
              key={index}
              onClick={this.onItemClick(item)}
            />
          ))}
          <Accordion heading="Heading">
            Dang test cai children cua prop ne
          </Accordion>
        </div>
      );
    } else {
      return <Page404 />;
    }
  }
}

export default App;
