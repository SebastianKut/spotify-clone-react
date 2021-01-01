export const initialState = {
  user: null,
  playlists: [],
  is_playing: false,
  current_song: null,
  token: null,
  discover_weekly: {},
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
        playlists: action.payload.items,
      };
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.payload,
      };
    case 'SET_CURRENT_SONG':
      return {
        ...state,
        current_song: action.payload,
      };
    case 'SET_PLAYING_STATUS':
      return {
        ...state,
        is_playing: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
