import React, { Component } from "react";
import "./TaskForm.css";
import { connect } from "react-redux";
import {
  is_close_form,
  add_task,
} from "../../Redux/Actions/Actions";
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: true,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCloseForm = this.onCloseForm.bind(this);
  }
  onChange(e) {
    var target = e.target;
    var name = target.name;
    var value =
      target.value === "true"
        ? true
        : target.value === "false"
        ? false
        : target.value;
    this.setState({
      [name]: value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onAddTask(this.state);
    this.onResetForm();
    this.props.onCloseForm();
  }
  onResetForm() {
    this.setState({
      id: "",
      name: "",
      status: true,
    });
  }
  componentDidMount() {
    const { edittingForm } = this.props;
    if (edittingForm) {
      this.setState({
        id: edittingForm.id,
        name: edittingForm.name,
        status: edittingForm.status,
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.edittingForm) {
      this.setState({
        id: nextProps.edittingForm.id,
        name: nextProps.edittingForm.name,
        status: nextProps.edittingForm.status,
      });
    } else {
      this.setState({
        id: "",
        name: "",
        status: true,
      });
    }
  }
  onCloseForm() {
    this.props.onCloseForm();
  }
  render() {
    const { id, name, status } = this.state;
    return (
      <div className="task-form">
        <div className="task-form-title">
          {id ? "Cập nhật Công Việc" : "Thêm Công Việc"}
          <span className="close-form" onClick={this.onCloseForm}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </span>
        </div>
        <div>
          <form onSubmit={this.onSubmit}>
            <div className="group-form">
              <label>Tên :</label>
              <input
                type="text"
                name="name"
                onChange={this.onChange}
                value={name}
              />
            </div>
            <div className="group-form">
              <label>Tên :</label>
              <select name="status" onChange={this.onChange} value={status}>
                <option value={true}>Kích Hoạt</option>
                <option value={false}>Ẩn</option>
              </select>
            </div>
            <div className="group-form">
              <button className="btn btn-save" type="submit">
                <i className="fa fa-plus" aria-hidden="true"></i>
                Lưu Lại
              </button>
              <button className="btn btn-del" type="button">
                <i className="fa fa-trash" aria-hidden="true"></i>
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    edittingForm: state.edittingForm,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCloseForm: () => {
      return dispatch(is_close_form());
    },
    onAddTask: (task) => {
      return dispatch(add_task(task));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
