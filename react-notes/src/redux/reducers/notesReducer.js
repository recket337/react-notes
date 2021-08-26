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
      title: 'test-note1',
      content: '#lol birds #can fly #omg',
      hashtags: ["#lol", "#omg", "#can"],
      isEditing: false,
    },
    {
      id: 1,
      title: 'test-note2',
      content: 'dog #lol woof #job',
      hashtags: ["#lol", "#job"],
      isEditing: false,
    },
    {
      id: 2,
      title: 'test-note3',
      content: 'trying to get #job in #ivashyn',
      hashtags: ["#job", "#ivashyn"],
      isEditing: false,
    },
    {
      id: 3,
      title: 'test-note4',
      content: 'oil #can',
      hashtags: ["#can"],
      isEditing: false,
    },
  ],
  allHashtags: ["#lol", "#omg", "#job", "#ivashyn", "#can", "test-non-existed-hashtag"],
  filter: '',
};

export function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE: {
      const updatedTags = action.content.split(' ').filter((i) => i[0] === '#');
      return {
        ...state,
        notesData: [
          ...state.notesData,
          {
            id: state.notesData.length,
            title: action.title,
            content: action.content,
            hashtags: updatedTags,
            isEditing: false,
          },
        ],
        allHashtags: [...new Set([...state.allHashtags, ...updatedTags])]
      };
    }
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

    case CONFIRM_EDIT: {
      const updatedTags = action.content.split(' ').filter((i) => i[0] === '#');
      return {
        ...state,
        notesData: state.notesData.map((note, index) => {
          return index === action.id
            ? {
                ...note,
                isEditing: false,
                title: action.title,
                content: action.content,
                hashtags: updatedTags,
              }
            : note;
        }),
        editModeIsON: false,
        allHashtags: [...new Set([...state.allHashtags, ...updatedTags])],
      };
    }
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
