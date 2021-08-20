import { removeNoteAC } from '../../../redux/actions/notesActions';
import { NotesList } from './NotesList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  notes: state.notes.notesData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeNote: (id) => {
      dispatch(removeNoteAC(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
