import { connect } from 'react-redux';
import HmkList from '../components/HmkList';
import axios from 'axios';
import {toggleEditAddHmk} from '../actions';
import * as api from '../api';


  const mapStateToProps = (state) => {
    return {
      userId: state.user.id,
      hmk: state.hmk.list,
      loading: state.hmk.loading
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      testFunction: () => {
        console.log('test');
        dispatch({type: 'test'});
      },
      editHmk: (hmk) => {
        dispatch(toggleEditAddHmk(hmk));
      },
      deleteHmk: (userId, hmkId) => {
        dispatch(api.deleteHmk(userId, hmkId));
      }
    }
  };

  const VisibleHmkList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(HmkList);

  export default VisibleHmkList;
