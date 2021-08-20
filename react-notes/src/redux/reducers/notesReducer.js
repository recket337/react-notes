import {
  ADD_NOTE,
  REMOVE_NOTE,
  EDIT_NOTE,
  UPDATE_INPUT_FORM_TITLE,
  UPDATE_INPUT_FORM_CONTENT,
} from '../actions/notesActions';

const initialState = {
  titleInput: '',
  contentInput: '',

  notesData: [
    { title: 'fwefwe', content: 'fewfew', hashtags: [] },
    { title: 'fwefwe', content: 'fewfew', hashtags: [] },
    { title: 'fwefwe', content: 'fewfew', hashtags: [] },
  ],
};

export function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notesData: [
          ...state.notesData,
          {
            title: action.title,
            content: action.content,
            hashtags: action.content.split(' ').filter((i) => i[0] === '#'),
          },
        ],
      };
    case REMOVE_NOTE:
      return {
        ...state,
        notesData: state.notesData.filter((note, index) => index != action.id),
      };
    case EDIT_NOTE:
      return {};
    case UPDATE_INPUT_FORM_TITLE:
      return {
        ...state,
        titleInput: action.title,
      };
    case UPDATE_INPUT_FORM_CONTENT:
      return {
        ...state,
        contentInput: action.content,
      };
    default:
      return state;
  }
}
