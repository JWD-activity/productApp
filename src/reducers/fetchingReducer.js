export function fetchingReducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        post: action.payload,
      };

    case 'FETCH_ERROR':
      return {
        loading: false,
        error: 'Something went wrong!',
        post: {},
      };

    default:
      return state;
  }
}
