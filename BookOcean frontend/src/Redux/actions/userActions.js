import axios from "axios";
import Api from "../../baseURL/Api";
import actionTypes from "../constants";

export const getUsers = () => {
  return async (dispatch) => {
    const response = await axios.get(`${Api}/users`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    dispatch({
      type: actionTypes.GET_USERS,
      payload: response.data.data.result,
    });
  };
};

export const searchUsers = (text) => {
  return {
    type: actionTypes.SEARCH_USER,
    payload: {
      searchText: text,
    },
  };
};

export const getMe = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.USER_LOADING });
      const response = await axios.get(`${Api}/users/me`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (response.data.status === "success") {
        dispatch({
          type: actionTypes.GET_ME,
          payload: response.data.data,
        });
        dispatch({ type: actionTypes.USER_LOADING_STOP });
      }
    } catch (error) {
      if (error.response.data.status === "fail") {
        dispatch({ type: actionTypes.USER_LOADING_STOP });
        dispatch({
          type: actionTypes.GET_ME,
          payload: [],
        });
      }
    }
  };
};

export const updateUserAction = (data) => {
  return async (dispatch) => {
    const response = await axios.patch(`${Api}/users/me`, data, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    // console.log(response)
    dispatch({
      type: actionTypes.UPDATE_USER,
      payload: response.data?.data,
    });
  };
};

export const updateUserById = (id, data) => {
  return async (dispatch) => {
    const response = await axios.patch(`${Api}/users/update/${id}`, data, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    // console.log(response)
    dispatch({
      type: actionTypes.UPDATE_USER,
      payload: response.data?.data,
    });
  };
};
