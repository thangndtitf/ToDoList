import { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./ToDoItem.css";
import checkIcon from "../img/check.png";
import checkIconDone from "../img/check-done.png";

class ToDoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var url;
    if (this.props.item.isactive === false) {
      url = checkIcon;
    } else if (this.props.item.isactive === true) {
      url = checkIconDone;
    }

    return (
      <div
        className={classNames("toDoItem", {
          toDoItem_Done: this.props.item.isactive === true,
        })}
        // onClick={this.props.onClick}
      >
        <img src={url} width={32} height={32} onClick={this.props.onClick} />
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

// Sử dụng propTypes để config các giá trị của thuộc tính trong Component
ToDoItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isactive: PropTypes.bool,
  }),
  onClick: PropTypes.func,
};

export default ToDoItem;
