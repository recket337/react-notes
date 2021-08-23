import { editNoteAC, removeNoteAC, updateEditModeTitleAC, updateEditModeContentAC, toggleEditMode, confirmEditAC } from '../../../redux/actions/notesActions';
import { NotesList } from './NotesList';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  title: state.notes.editModeTitle,
  content: state.notes.editModeContent,
  notes: state.notes.notesData,
  editModeIsON: state.notes.editModeIsON,
});

const mapDispatchToProps = (dispatch) => {
  return {
    confirmEdit: (id, title, content) => {
      dispatch(confirmEditAC(id, title, content));
    },
    removeNote: (id) => {
      dispatch(removeNoteAC(id));
    },
    editNote: (id) => {
      dispatch(editNoteAC(id));
    },
    updateEditModeTitle: (title) => {
      dispatch(updateEditModeTitleAC(title));
    },
    updateEditModeContent: (content) => {
      dispatch(updateEditModeContentAC(content));
    },
    toggleEditMode: () => {
      dispatch(toggleEditMode());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
