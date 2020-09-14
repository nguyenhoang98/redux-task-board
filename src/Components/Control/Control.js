import React, { Component } from "react";
import ControlSearch from "../ControlSearch/ControlSearch";
import ControlSort from '../ControlSort/ControlSort' ;
import "./Control.css";
class Control extends Component {
  render() {
    return (
      <div className="control">
        <ControlSearch />
        <ControlSort />
      </div>
    );
  }
}
export default Control;
