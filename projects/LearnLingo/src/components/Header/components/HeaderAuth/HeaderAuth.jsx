import { useDispatch, useSelector } from 'react-redux';
import css from './HeaderAuth.module.css';
import { selectAuth } from '../../../../redux/auth/auth-selector';

import { toggleModalWindow } from '../../../../redux/modals/modals-reducer';

import PropTypes from 'prop-types';
import selectWebsite from '../../../../redux/website/website-selector';
import { logout } from '../../../../redux/auth/auth-actions';
import { useLocation, useNavigate } from 'react-router-dom';
import { clearFavTeachers } from '../../../../redux/teachers/teachers-reducer';

export default function HeaderAuth({ authClasses }) {
  const dispatch = useDispatch();

  const { color } = useSelector(selectWebsite);

  const { isLoggedIn } = useSelector(selectAuth);
  const aClasses = authClasses ? authClasses.join(' ') : '';
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const closeThisModalAndOpenNext = modal => {
    dispatch(toggleModalWindow({ modal: 'modalBurgerMenu', state: false }));
    dispatch(toggleModalWindow({ modal, state: true }));
  };

  const regButtonHandler = e => {
    e.preventDefault();
    closeThisModalAndOpenNext('modalRegistration');
  };

  const loginButtonHandler = e => {
    e.preventDefault();
    closeThisModalAndOpenNext('modalLogIn');
  };

  const logoutButtonHandler = e => {
    e.preventDefault();
    closeThisModalAndOpenNext('isLogOutOpened');
    dispatch(logout());
    dispatch(clearFavTeachers());

    if (pathname === "/Favorites") {
      navigate("/");
    }
  };

  return (
    <div className={`${css['auth']} ${aClasses}`}>
      {isLoggedIn ? (
        <button
          className={css['login']}
          onClick={logoutButtonHandler}
          type="button"
        >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://wwwstrokeWidth.w3.org/2000/svg"
            >
              <path
                d="M12.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H12.5"
                stroke={color.primary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33333 5.83325L12.5 9.99992M12.5 9.99992L8.33333 14.1666M12.5 9.99992L2.5 9.99992"
                stroke={color.primary}
                strokeWidth="2"
 
                  strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Log Out</span>
        </button>
      ) : (
        <>
          <button
            className={css['login']}
            onClick={loginButtonHandler}
            type="button"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://wwwstrokeWidth.w3.org/2000/svg"
            >
              <path
                d="M12.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H12.5"
                stroke={color.primary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33333 5.83325L12.5 9.99992M12.5 9.99992L8.33333 14.1666M12.5 9.99992L2.5 9.99992"
                stroke={color.primary}
                strokeWidth="2"
 
                  strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Log in</span>
          </button>
          <button
            className={css['registration']}
            onClick={regButtonHandler}
            type="button"
          >
            Registration
          </button>
        </>
      )}
    </div>
  );
}

HeaderAuth.propTypes = {
  authClasses: PropTypes.array,
};
