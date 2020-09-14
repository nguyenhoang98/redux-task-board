import React, { Component } from "react";
import "./ListItem.css";
import { connect } from "react-redux";
import {
  del_task,
  update_status,
  is_open_form,
  editting_form,
} from "../../Redux/Actions/Actions";
class ListItem extends Component {
  edittingForm = (task) => {
    this.props.edittingForm(task);
    this.props.onOpenForm();
  };
  render() {
    const { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td> {task.name} </td>
        <td>
          <span
            onClick={() => this.props.onUpdateStatus(task)}
            style={{
              background: task.status ? "red" : "green",
              padding: "2px",
              borderRadius: 2,
              color: "white",
            }}
          >
            {task.status ? "Kích Hoạt" : "Ẩn"}
          </span>
        </td>
        <td>
          <button
            className="btn btn-update"
            onClick={() => this.edittingForm(task)}
          >
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            Sửa
          </button>
          <button
            className="btn btn-del"
            onClick={() => this.props.onDelTask(task)}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDelTask: (task) => {
      return dispatch(del_task(task));
    },
    onUpdateStatus: (task) => {
      return dispatch(update_status(task));
    },
    edittingForm: (task) => {
      return dispatch(editting_form(task));
    },
    onOpenForm: () => {
      return dispatch(is_open_form());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
