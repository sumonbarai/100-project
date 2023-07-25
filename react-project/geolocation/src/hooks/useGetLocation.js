import { useReducer } from "react";

const initialState = {
  isLoading: false,
  latitude: "",
  longitude: "",
  error: null,
};

const getLocationReducer = (state, action) => {
  switch (action.type) {
    case "start":
      return {
        ...state,
        isLoading: true,
      };
    case "success":
      return {
        isLoading: false,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        error: null,
      };
    case "failed":
      return {
        isLoading: false,
        latitude: "",
        longitude: "",
        error: action.payload,
      };

    default:
      return state;
  }
};

const useGetLocation = () => {
  const [data, dispatch] = useReducer(getLocationReducer, initialState);

  function getLocation() {
    dispatch({
      type: "start",
    });

    if (!navigator.geolocation) {
      dispatch({
        type: "failed",
        payload: "Geolocation is not supported by this browser",
      });
      return;
    }
    // if geolocation is available
    navigator.geolocation.getCurrentPosition(showPosition, showError);

    // success case
    function showPosition(position) {
      dispatch({
        type: "success",
        payload: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      });
    }
    // error case
    function showError(err) {
      dispatch({
        type: "failed",
        payload: err.message,
      });
    }
  }

  return { getLocation, data };
};

export default useGetLocation;
