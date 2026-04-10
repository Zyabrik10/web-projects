import { useDispatch, useSelector } from 'react-redux';
import selectWebsite from '../../../../../../../../redux/website/website-selector';
import { useState } from 'react';
import { selectAuth } from '../../../../../../../../redux/auth/auth-selector';
import { toggleModalWindow } from '../../../../../../../../redux/modals/modals-reducer';

import PropTypes from 'prop-types';
import {
  addFavTeacher,
  removeFavTeacher,
} from '../../../../../../../../redux/teachers/teachers-reducer';
import { selectTeachers } from '../../../../../../../../redux/teachers/teachers-select';

export default function HeaderHeart({ id }) {
  const { color } = useSelector(selectWebsite);
  const { isLoggedIn, user } = useSelector(selectAuth);
  const { favTeachers, teachers } = useSelector(selectTeachers);

  console.log(
    favTeachers.findIndex(
      ({ teacher: { id: teacherId } }) => teacherId === id
    ) !== -1
  );

  const [active, setActive] = useState(
    isLoggedIn &&
          favTeachers.findIndex(
      ({ teacher: { id: teacherId } }) => teacherId === id
    ) !== -1
  );

  const dispatch = useDispatch();

  const buttonHandler = () => {
    if (isLoggedIn) {
      if (active) {
        const teacher = teachers.filter(
          ({ id: teacherId }) => teacherId === id
        )[0];

        setActive(false);
        dispatch(
          removeFavTeacher({
            user,
            teacher,
          })
        );
      } else {
        const teacher = teachers.filter(
          ({ id: teacherId }) => teacherId === id
        )[0];

        setActive(true);
        dispatch(
          addFavTeacher({
            user: user,
            teacher,
          })
        );
      }
    } else dispatch(toggleModalWindow({ modal: 'modalAuth', state: true }));
  };

  return (
    <svg
      data-id={id}
      onClick={buttonHandler}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill={active ? color.primary : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5767 4.99419C22.0233 4.44061 21.3664 4.00147 20.6433 3.70187C19.9202 3.40226 19.1452 3.24805 18.3625 3.24805C17.5798 3.24805 16.8048 3.40226 16.0817 3.70187C15.3586 4.00147 14.7017 4.44061 14.1483 4.99419L13 6.14252L11.8517 4.99419C10.734 3.87652 9.21812 3.24863 7.6375 3.24863C6.05688 3.24863 4.541 3.87652 3.42333 4.99419C2.30567 6.11186 1.67777 7.62774 1.67777 9.20836C1.67777 10.789 2.30567 12.3049 3.42333 13.4225L4.57167 14.5709L13 22.9992L21.4283 14.5709L22.5767 13.4225C23.1302 12.8692 23.5694 12.2122 23.869 11.4892C24.1686 10.7661 24.3228 9.99105 24.3228 9.20836C24.3228 8.42566 24.1686 7.65064 23.869 6.92756C23.5694 6.20448 23.1302 5.54751 22.5767 4.99419Z"
        stroke={active ? '' : '#121417'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

HeaderHeart.propTypes = {
  id: PropTypes.string,
};
