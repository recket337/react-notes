import { addNoteAC, updateInputFormContentAC, updateInputFormTitleAC } from '../../../redux/actions/notesActions';
import { NotesForm } from './NotesForm';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  title: state.notes.titleInput,
  content: state.notes.contentInput,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (title, content) => {
      dispatch(addNoteAC(title, content));
    },
    updateInputFormTitle: (title) => {
      dispatch(updateInputFormTitleAC(title));
    },
    updateInputFormContent: (content) => {
      dispatch(updateInputFormContentAC(content));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesForm);
