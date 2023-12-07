import { toast } from "react-toastify";
import actionTypes from "../constants";
import Api from "../../baseURL/Api";
import axios from "axios";

export const postOrders = (data) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.LOADING });
    await axios
      .post(`${Api}/orders`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((data) => {
        // console.log(data);
        if (data?.data?.status === "success") {
          dispatch({
            type: actionTypes.POST_ORDER,
            payload: data.data,
          });
          dispatch({ type: actionTypes.LOADING_STOP });
          toast.success(data.data.message, {
            theme: "colored",
          });
        }
      })
      .catch((err) => {
        // console.log(err.response.data)
        if (err.response.data.status === "fail") {
          toast.error(err.response.data.error, {
            theme: "colored",
          });
          toast.error(err.response.data.message, {
            theme: "colored",
          });
        }
      });
  };
};

export const getAllOrders = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.LOADING });
    await axios
      .get(`${Api}/orders`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((data) => {
        // console.log(data);
        if (data?.data?.status === "success") {
          dispatch({
            type: actionTypes.GET_ALL_ORDER,
            payload: data.data.data.result,
          });
          dispatch({ type: actionTypes.LOADING_STOP });
        }
      })
      .catch((err) => {
        // console.log(err.response.data)
        if (err.response.data.status === "fail") {
          toast.error(err.response.data.error, {
            theme: "colored",
          });
          toast.error(err.response.data.message, {
            theme: "colored",
          });
        }
      });
  };
};

export const searchOrders = (text) => {
  return {
    type: actionTypes.SEARCH_ORDER,
    payload: {
      searchText: text,
    },
  };
};

export const orderByFilter = (url) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.LOADING });
    await axios
      .get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((data) => {
        // console.log(data);
        if (data?.data?.status === "success") {
          dispatch({
            type: actionTypes.ORDER_BY_FILTER,
            payload: data.data.data.result,
          });
          dispatch({ type: actionTypes.LOADING_STOP });
        }
      })
      .catch((err) => {
        // console.log(err.response.data)
        if (err.response.data.status === "fail") {
          toast.error(err.response.data.error, {
            theme: "colored",
          });
          toast.error(err.response.data.message, {
            theme: "colored",
          });
        }
      });
  };
};

export const getOrdersByEmail = (email) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.LOADING });
    await axios
      .get(`${Api}/orders/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((data) => {
        // console.log(data);
        if (data?.data?.status === "success") {
          dispatch({
            type: actionTypes.GET_ORDER_BY_EMAIl,
            payload: data.data.data,
          });
          dispatch({ type: actionTypes.LOADING_STOP });
        }
      })
      .catch((err) => {
        // console.log(err.response.data)
        if (err.response.data.status === "fail") {
          toast.error(err.response.data.error, {
            theme: "colored",
          });
          toast.error(err.response.data.message, {
            theme: "colored",
          });
        }
      });
  };
};

export const updateorder = (id, data) => {
  return async (dispatch) => {
    await axios
      .patch(`${Api}/orders/${id}`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((data) => {
        // console.log(data);
        if (data?.data?.status === "success") {
          dispatch({
            type: actionTypes.UPDATE_ORDER,
            payload: data?.data,
          });
          toast.success(data.data.message, {
            theme: "colored",
          });
        }
      })
      .catch((err) => {
        // console.log(err.response.data)
        if (err.response.data.status === "fail") {
          toast.error(err.response.data.error, {
            theme: "colored",
          });
          toast.error(err.response.data.message, {
            theme: "colored",
          });
        }
      });
  };
};

export const removeUpdatedProduct = () => {
  return {
    type: actionTypes.REMOVE_UPDATED_PRODUCT,
  };
};

export const deleteOrder = (id) => {
  return async (dispatch) => {
    await axios
      .delete(`${Api}/orders/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((data) => {
        // console.log(data);
        if (data?.data?.status === "success") {
          dispatch({
            type: actionTypes.DELETE_ORDER,
            payload: {
              res: data.data,
              id: id,
            },
          });
          toast.success(data.data.message, {
            theme: "colored",
          });
        }
      })
      .catch((err) => {
        // console.log(err.response.data)
        if (err.response.data.status === "fail") {
          toast.error(err.response.data.error, {
            theme: "colored",
          });
          toast.error(err.response.data.message, {
            theme: "colored",
          });
        }
      });
  };
};
