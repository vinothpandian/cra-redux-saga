import { handleAction } from "redux-actions";
import { CHANGE_NAME } from "../actions";

const defaultState = {
  name: "you"
};

export default handleAction(
  CHANGE_NAME,
  (state, action) => ({
    name: action.payload
  }),
  defaultState
);
