import React, { Component } from "react";
import "./ControlSearch.css";
import { connect } from 'react-redux' ;
import { search_task } from '../../Redux/Actions/Actions' ;
class ControlSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSearchTask = this.onSearchTask.bind(this);
  }
  onChange(e) {
    this.setState({
      searchName: e.target.value,
    });
  }
  onSearchTask() {
    this.props.onSearchTask(this.state.searchName);
  }
  render() {
    return (
      <div className="control-search">
        <div className="control-search-input">
          <input
            type="text"
            name="searchName"
            value={this.state.searchName}
            onChange={this.onChange}
          />
        </div>
        <div className="control-search-button">
          <button className="btn btn-search" onClick={this.onSearchTask}>
            <i className="fa fa-search" aria-hidden="true"></i>
            Tìm
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return {

  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    onSearchTask : (key)=>{
      return dispatch(search_task(key))
    }
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(ControlSearch);
