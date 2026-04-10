import { StyledButton } from 'components/StyledButton/StyledButton';
import css from './BookButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import selectWebsite from '../../../../../../redux/website/website-selector';
import { toggleModalWindow } from '../../../../../../redux/modals/modals-reducer';
import { selectAuth } from '../../../../../../redux/auth/auth-selector';

export default function BookButton() {
  const { color } = useSelector(selectWebsite);
  const { isLoggedIn } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const buttonHandler = () => {
    if (isLoggedIn) dispatch(toggleModalWindow({ modal: 'modalBook', state: true }));
    else dispatch(toggleModalWindow({ modal: 'modalAuth', state: true }));
  };

  return (
    <StyledButton
      onClick={buttonHandler}
      $maxwidth="232px"
      color={color.primary}
      $subcolor={color.secondary}
      className={css['button']}
      type="button"
    >
      Book trial lesson
    </StyledButton>
  );
}
