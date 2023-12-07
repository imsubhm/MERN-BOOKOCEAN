import axios from "axios";
import Api from "../../baseURL/Api";
import actionTypes from "../constants";

export const fetchGenres = () => {
  return async (dispatch) => {
    const response = await axios.get(`${Api}/genres`);
    // console.log(response);
    dispatch({
      type: actionTypes.FETCH_GENRES,
      payload: response.data?.data?.result,
    });
  };
};

export const fetchGenre = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`${Api}/genres/${id}`);
    // console.log(response);
    dispatch({
      type: actionTypes.FETCH_GENRE,
      payload: response.data?.data?.result,
    });
  };
};

export const createGenre = (data) => {
  return async (dispatch) => {
    const response = await axios.post(`${Api}/genres`, data, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    // console.log(response)
    dispatch({
      type: actionTypes.CREATE_GENRE,
      payload: response.data?.data,
    });
  };
};
