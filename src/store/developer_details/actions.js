import api from "../../api";

function fetchDeveloperSuccess(developer) {
  return {
    type: "FETCH_DEVELOPER_SUCCESS",
    payload: developer
  };
}

export function fetchDeveloper(id) {
  return function thunk(dispatch, getState) {
    api(`/developers/details/${id}`).then(data => {
      console.log(data);
      const action = fetchDeveloperSuccess(data);
      dispatch(action);
    });
  };
}
