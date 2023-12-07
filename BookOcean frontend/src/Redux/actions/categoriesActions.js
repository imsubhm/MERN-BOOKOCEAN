import axios from "axios";
import Api from "../../baseURL/Api";
import actionTypes from "../constants";

export const fetchCategories = () => {
  return async (dispatch) => {
    const response = await axios.get(`${Api}/categories`);
    // console.log(response);
    dispatch({
      type: actionTypes.FETCH_CATEGORIES,
      payload: response.data?.data?.result,
    });
  };
};

export const fetchCategory = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`${Api}/categories/${id}`);
    // console.log(response.data.data);
    dispatch({
      type: actionTypes.FETCH_CATEGORY,
      payload: response.data?.data,
    });
  };
};

export const createCategory = (data) => {
  return async (dispatch) => {
    const response = await axios.post(`${Api}/categories`, data, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    // console.log(response)
    dispatch({
      type: actionTypes.CREATE_CATEGORY,
      payload: response.data?.data,
    });
  };
};
