import * as actions from '../actions';
import * as api from '../api';
import { connect } from 'react-redux';
import UserAdmin from '../components/UserAdmin';


const mapStateToProps = (state) => {
  return {
    loginView: state.user.loginView,
    user: state.user.actual,
    userEditView: state.user.userEditView
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username) => {
      dispatch(actions.)
      dispatch(api.getUser(username));
    },
    showEditUser: (user) => {
      dispatch(actions.toogleEditUser(user));
    }, 
    changeUser: () => {
      dispatch(actions.toogleLoginView());
    },
    edit: (user) => {
      dispatch(api.putUser(user));
    }
  }
};

const UserBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAdmin);

export default UserBar;
