import { Component } from "react";
import classNames from "classnames";
import "./ToDoItem.css";
class ToDoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={classNames(
          { toDoItem: this.props.item.isactive === false },
          { toDoItem_Done: this.props.item.isactive === true }
        )}
        onClick={this.props.onClick}
      >
        {this.props.item.title}
      </div>
    );
  }
}

export default ToDoItem;
