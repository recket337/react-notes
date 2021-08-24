import {
  ADD_NOTE,
  REMOVE_NOTE,
  EDIT_NOTE,
  UPDATE_INPUT_FORM_TITLE,
  UPDATE_INPUT_FORM_CONTENT,
  UPDATE_EDIT_MODE_CONTENT,
  UPDATE_EDIT_MODE_TITLE,
  TOGGLE_EDIT_MODE,
  CONFIRM_EDIT,
} from '../actions/notesActions';

const initialState = {
  titleInput: '',
  contentInput: '',
  editModeTitle: '',
  editModeContent: '',
  editModeIsON: false,
  notesData: [
    { id: 0, title: 'fwefwe', content: 'fewfew', hashtags: [], editMode: false },
    { id: 1, title: 'fwefwe', content: 'fewfew', hashtags: [], editMode: false },
    { id: 2, title: 'fwefwe', content: 'fewfew', hashtags: [], editMode: false },
  ],
  result: [],
};

export function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notesData: [
          ...state.notesData,
          {
            id: state.notesData.length,
            title: action.title,
            content: action.content,
            hashtags: action.content.split(' ').filter((i) => i[0] === '#'),
            editMode: false,
          },
        ],
      };
    case REMOVE_NOTE:
      return {
        ...state,
        notesData: state.notesData.filter((note, index) => index != action.id),
      };

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

    case EDIT_NOTE:
      return {
        ...state,
        notesData: state.notesData.map((note, index) => {
          return index === action.id
            ? {
                ...note,
                editMode: !note.editMode,
              }
            : note;
        }),
      };

    case CONFIRM_EDIT:
      return {
        ...state,
        notesData: state.notesData.map((note, index) => {
          return index === action.id
            ? {
                ...note,
                editMode: false,
                title: action.title,
                content: action.content,
              }
            : note;
        }),
      };

    case UPDATE_EDIT_MODE_TITLE:
      return {
        ...state,
        editModeTitle: action.title,
      };
    case UPDATE_EDIT_MODE_CONTENT:
      return {
        ...state,
        editModeContent: action.content,
      };
    case TOGGLE_EDIT_MODE:
      return {
        ...state,
        editModeIsON: false,
      };

    default:
      return state;
  }
}
