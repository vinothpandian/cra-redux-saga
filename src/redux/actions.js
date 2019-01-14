import { createAction } from "redux-actions";

export const CHANGE_NAME = "CHANGE_NAME";

export const GET_NAME_ASYNC = "GET_NAME_ASYNC";

export const changeName = createAction(CHANGE_NAME);

export const getNameAsync = createAction(GET_NAME_ASYNC);
