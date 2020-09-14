import React, { Component } from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm/TaskForm";
import TaskList from "./Components/TaskList/TaskList";
import { connect } from "react-redux";
class App extends Component {
  render() {
    const { isDisplayForm } = this.props;
    return (
      <div className="app">
        <h2>Quản Lí Công Việc</h2>
        <div className="content">
          {isDisplayForm && <TaskForm />}
          <TaskList />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
  };
};
export default connect(mapStateToProps, null)(App);
