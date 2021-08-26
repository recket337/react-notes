import { connect } from 'react-redux';
import { ButtonDownload } from './ButtonDownload';

const mapStateToProps = (state) => ({
  data: state.notes,
});

export default connect(mapStateToProps, null)(ButtonDownload);
