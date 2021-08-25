import {
  ADD_NOTE,
  REMOVE_NOTE,
  EDIT_NOTE,
  UPDATE_INPUT_FORM_TITLE,
  UPDATE_INPUT_FORM_CONTENT,
  CONFIRM_EDIT,
  CANCEL_EDIT,
  FILTER_HASHTAG,
} from '../actions/notesActions';

const initialState = {
  titleInput: '',
  contentInput: '',
  editModeIsON: false,
  notesData: [
    {
      id: 0,
      title: 'kek',
      content: '#lol #omg fwefwefewg',
      hashtags: ["#lol", "#omg"],
      isEditing: false,
    },
    {
      id: 0,
      title: 'kek',
      content: '#lol #omg fwefwefewg',
      hashtags: ["#lol", "#omg"],
      isEditing: false,
    },
    {
      id: 0,
      title: 'kek',
      content: '#lol #omg fwefwefewg',
      hashtags: ["#lol", "#omg"],
      isEditing: false,
    },
  ],
  allHashtags: ["#lol", "#omg", "#omg", "#omg", "#omg", "#omg", "#omg", "#omg", "#omg"],
  filter: '',
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
            isEditing: false,
          },
        ],
        allHashtags: [...new Set([...state.allHashtags, ...action.content.split(' ').filter((i) => i[0] === '#')])]
      };
    case REMOVE_NOTE:
      return {
        ...state,
        notesData: state.notesData
          .filter((note, index) => index != action.id)
          .map((item, index) => {
            return {
              ...item,
              id: index,
            };
          }),
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
                isEditing: true,
              }
            : note;
        }),
        editModeIsON: true,
      };

    case CONFIRM_EDIT:
      return {
        ...state,
        notesData: state.notesData.map((note, index) => {
          return index === action.id
            ? {
                ...note,
                isEditing: false,
                title: action.title,
                content: action.content,
                hashtags: action.content.split(' ').filter((i) => i[0] === '#'),
              }
            : note;
        }),
        editModeIsON: false,
        allHashtags: [...new Set([...state.allHashtags, ...action.content.split(' ').filter((i) => i[0] === '#')])],
      };
    case CANCEL_EDIT:
      return {
        ...state,
        notesData: state.notesData.map((note, index) => {
          return index === action.id
            ? {
                ...note,
                isEditing: false,
              }
            : note;
        }),
        editModeIsON: false,
      };
    case FILTER_HASHTAG:
      return {
        ...state,
        filter: action.hashtag,
      };

    default:
      return state;
  }
}
