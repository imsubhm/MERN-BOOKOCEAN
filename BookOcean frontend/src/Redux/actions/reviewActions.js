import axios from "axios";
import actionTypes from "../constants";
import Api from "../../baseURL/Api";

export const fetchReview = () => {
  return async (dispatch) => {
    const response = await axios.get(`${Api}/reviews`);
    // console.log(response);
    dispatch({
      type: actionTypes.FETCH_REVIEW,
      payload: response.data?.data?.result,
    });
  };
};

export const fetchReviewbyProductId = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`${Api}/reviews/product/${id}`);
    // console.log(response);
    dispatch({
      type: actionTypes.FETCH_REVIEW_BY_PRODUCT_ID,
      payload: response.data?.data,
    });
  };
};

export const createReview = (data) => {
  return async (dispatch) => {
    const response = await axios.post(`${Api}/reviews`, data, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    // console.log(response)
    dispatch({
      type: actionTypes.CREATE_REVIEW,
      payload: response.data?.data,
    });
  };
};
