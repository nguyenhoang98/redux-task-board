import React, { Component } from "react";
import Control from "../Control/Control";
import "./TaskList.css";
import ListItem from "../ListItem/ListItem";
import { connect } from "react-redux";
import {
  is_open_form,
  filter_task,
  editting_form,
} from "../../Redux/Actions/Actions";
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: 0,
    };
    this.onChange = this.onChange.bind(this);
    this.onOpenForm = this.onOpenForm.bind(this);
  }
  onChange(e) {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    var obj = {
      name: name === "filterName" ? value : this.state.filterName,
      status: name === "filterStatus" ? value : this.state.filterStatus,
    };
    this.props.onFilterTask(obj);
    this.setState({
      [name]: value,
    });
  }
  onOpenForm() {
    const { editting } = this.props;
    if (editting.id === "") {
      this.props.onOpenForm();
    } else {
      this.props.edittingForm({
        id: "",
        name: "",
        status: true,
      });
      this.props.onOpenForm();
    }
  }
  render() {
    let { task, keySearch, filterTask, sortTask } = this.props;
    const { filterName, filterStatus } = this.state;
    if (keySearch) {
      task = task.filter((task) => {
        return task.name.toUpperCase().indexOf(keySearch.toUpperCase()) > -1;
      });
    }
    if (filterTask.filterName) {
      task = task.filter((task) => {
        return (
          task.name.toUpperCase().indexOf(filterTask.filterName.toUpperCase()) >
          -1
        );
      });
    }
    if (filterTask.filterStatus) {
      task = task.filter((task) => {
        if (filterTask.filterStatus === 0) {
          return task;
        }
        if (filterTask.filterStatus === 1) {
          return task.status === true;
        }
        if (filterTask.filterStatus === -1) {
          return task.status === false;
        }
      });
    }

    if (sortTask.sortName === "name") {
      task = task.sort((a, b) => {
        var x = a.name.toUpperCase();
        var y = b.name.toUpperCase();
        if (x < y) return -sortTask.sortStatus;
        if (x > y) return sortTask.sortStatus;
      });
    }
    if (sortTask.sortName === "status") {
      task = task.sort((a, b) => {
        var x = a.status ? 1 : 0;
        var y = b.status ? 1 : 0;
        if (x < y) return sortTask.sortStatus;
        if (x > y) return -sortTask.sortStatus;
      });
    }
    return (
      <div className="task-list">
        <div className="add-list">
          <button className="btn btn-add-list" onClick={this.onOpenForm}>
            <i className="fa fa-plus" aria-hidden="true"></i>
            Thêm Công Việc
          </button>
        </div>
        <Control />

        <div className="table-list">
          <table className="table">
            <thead>
              <tr>
                <th>Số thứ Tự</th>
                <th>Tên</th>
                <th>Trạng Thái</th>
                <th>Hành Động </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input
                    type="text"
                    name="filterName"
                    value={filterName}
                    onChange={this.onChange}
                  />
                </td>
                <td>
                  <select
                    onChange={this.onChange}
                    name="filterStatus"
                    value={filterStatus}
                  >
                    <option value={0}>Tất Cả</option>
                    <option value={1}>Kích Hoạt</option>
                    <option value={-1}>Ẩn</option>
                  </select>
                </td>
                <td></td>
              </tr>
              {task.map((task, index) => {
                return <ListItem task={task} key={index} index={index} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    task: state.Task,
    keySearch: state.Search,
    filterTask: state.Filter,
    sortTask: state.Sort,
    editting: state.edittingForm,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onOpenForm: () => {
      return dispatch(is_open_form());
    },
    onFilterTask: (obj) => {
      return dispatch(filter_task(obj));
    },
    edittingForm: (task) => {
      return dispatch(editting_form(task));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
