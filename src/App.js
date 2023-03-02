import "./App.css";
import React, { Component } from "react";
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
      isCollapsed: true,
    };
    this.elementInput = React.createRef();
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onAddNewItemButton = this.onAddNewItemButton.bind(this);
    this.viewMorderToDoItem = this.viewMorderToDoItem.bind(this);
  }

  componentDidMount() {
    this.elementInput.current.focus();
  }

  onItemClick(item) {
    return () => {
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

  onAddNewItemButton() {
    let text = this.state.newItem;
    console.log("EnventTarget ne", this.state.newItem);
    if (!text) {
      return;
    }
    if (!text.trim()) {
      return;
    } else {
      this.setState({
        newItem: "",
        items: [{ title: text, isactive: false }, ...this.state.items],
      });
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value,
    });
  }

  viewMorderToDoItem() {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
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
              ref={this.elementInput}
            ></input>
          </div>
          <button className="InsertButton" onClick={this.onAddNewItemButton}>
            Add
          </button>
          <button className="ViewMoreButton" onClick={this.viewMorderToDoItem}>
            View All List ToDoItem
          </button>
          {!this.state.isCollapsed &&
            this.state.items.map((item, index) => (
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
