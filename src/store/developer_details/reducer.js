const initialState = null;

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "FETCH_DEVELOPER_SUCCESS":
      return { ...action.payload };

    default:
      return state;
  }
}
