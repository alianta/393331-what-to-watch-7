import React from 'react';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../store/api-actions';
import {getAuthorizationStatus, getAvatar} from '../../store/user/selectors';

function UserBlock (props) {
  const history = useHistory();
  const {signOut, authorizationStatus, avatar} = props;

  return (
    <ul className="user-block">
      {(authorizationStatus===AuthorizationStatus.AUTH)?
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={avatar} alt="User avatar" width="63" height="63" onClick={() => history.push(AppRoute.MY_LIST)}/>
          </div>
        </li>:
        ''}
      <li className="user-block__item">
        {(authorizationStatus===AuthorizationStatus.AUTH)?
          <Link
            className="user-block__link"
            onClick={(evt) => {
              evt.preventDefault();
              signOut();
            }}
            to='/'
          >
            Sign out
          </Link>:
          <Link className="user-block__link" to={AppRoute.LOGIN}>Sign in</Link>}
      </li>
    </ul>
  );
}

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  avatar: getAvatar(state).avatar_url??'',
});

const mapDispatchToProps = (dispatch) => ({
  signOut() {
    dispatch(logout());
  },
});

export {UserBlock};
export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
