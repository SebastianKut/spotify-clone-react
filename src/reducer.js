export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlist: action.payload.items,
      };
    default:
      return state;
  }
};

export default reducer;
