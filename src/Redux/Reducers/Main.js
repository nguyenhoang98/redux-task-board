import { combineReducers } from "redux";
import Task from "./Task";
import isDisplayForm from "./isDisplayForm";
import edittingForm from "./EdittingForm";
import Search from "./Search";
import Filter from "./Filter";
import Sort from "./Sort";
var appReducers = combineReducers({
  Task,
  isDisplayForm,
  edittingForm,
  Search,
  Filter,
  Sort,
});
export default appReducers;
