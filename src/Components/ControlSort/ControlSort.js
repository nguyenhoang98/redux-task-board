import React, { Component } from "react";
import "./ControlSort.css";
import classNames from "classnames";
import { connect } from 'react-redux' ;
import { sort_task } from '../../Redux/Actions/Actions' ;
class ControlSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSortLink: false,
      sortName: "name",
      sortStatus: 1,
    };
    this.toggleSortContent = this.toggleSortContent.bind(this);
    this.sortTask = this.sortTask.bind(this);
  }
  toggleSortContent() {
    this.setState({
      openSortLink: !this.state.openSortLink,
    });
  }
  sortTask(sortName, sortStatus) {
    const obj = {
      name: sortName,
      status: sortStatus,
    };
    this.props.sortTask(obj);
    this.setState({
      sortName: sortName,
      sortStatus: sortStatus,
    });
    this.toggleSortContent();
  }
  render() {
    const { openSortLink, sortName, sortStatus } = this.state;
    return (
      <div className="control-sort">
        <button className="btn btn-sort" onClick={this.toggleSortContent}>
          <i className="fa fa-sort" aria-hidden="true"></i>
          Sắp Xếp
        </button>
        {openSortLink && (
          <div className="sort-content">
            <button
              className={classNames("btn sort-link", {
                active: sortName === "name" && sortStatus === 1,
              })}
              onClick={() => this.sortTask("name", 1)}
            >
              Sắp Xếp từ a-z
            </button>
            <button
              className={classNames("btn sort-link", {
                active: sortName === "name" && sortStatus === -1,
              })}
              onClick={() => this.sortTask("name", -1)}
            >
              Sắp Xếp từ z-a
            </button>
            <button
              className={classNames("btn sort-link", {
                active: sortName === "status" && sortStatus === 1,
              })}
              onClick={() => this.sortTask("status", 1)}
            >
              Kích Hoạt
            </button>
            <button
              className={classNames("btn sort-link", {
                active: sortName === "status" && sortStatus === -1,
              })}
              onClick={() => this.sortTask("status", -1)}
            >
              Ẩn
            </button>
          </div>
        )}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    sortTask : (obj)=>{
      return dispatch(sort_task(obj))
    }
  }
}
export default connect(null , mapDispatchToProps)(ControlSort);
