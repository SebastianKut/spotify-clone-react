export const initialState = {
  user: null,
  playlists: [],
  is_playing: false,
  current_song: null,
  repeat: false,
  shuffle: false,
  token: null,
  current_playlist: {},
  playlist_id: '37i9dQZEVXcX651NVljfsf',
  submenu_show: false,
};

const reducer = (state, action) => {
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
    case 'SET_CURRENT_PLAYLIST':
      return {
        ...state,
        current_playlist: action.payload,
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
    case 'SET_SHUFFLE_STATUS':
      return {
        ...state,
        shuffle: action.payload,
      };
    case 'SET_REPEAT_STATUS':
      return {
        ...state,
        repeat: action.payload,
      };
    case 'SET_PLAYLIST_ID':
      return {
        ...state,
        playlist_id: action.payload,
      };
    case 'SET_SHOW_SUBMENU':
      return {
        ...state,
        submenu_show: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
