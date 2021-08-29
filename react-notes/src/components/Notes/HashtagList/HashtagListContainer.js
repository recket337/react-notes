import { filterHashtagAC } from '../../../redux/actions/notesActions';
import { HashtagList } from './HashtagList';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  activeHashtag: state.notes.filter,
  hashtags: state.notes.allHashtags,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // filterBYHashtag
    filterHashtag: (hashtag) => {
      dispatch(filterHashtagAC(hashtag))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HashtagList);
