import { editNoteAC, removeNoteAC, confirmEditAC, cancelEditAC} from '../../../redux/actions/notesActions';
import { NotesList } from './NotesList';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
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
    cancelEdit: (id) => {
      dispatch(cancelEditAC(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
