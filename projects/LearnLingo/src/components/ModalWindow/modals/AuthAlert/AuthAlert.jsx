import ModalWindow from 'components/ModalWindow/ModalWindow';
import { useDispatch, useSelector } from 'react-redux';
import { selectModals } from '../../../../redux/modals/modals-select';

import css from './AuthAlert.module.css';
import { StyledButton } from 'components/StyledButton/StyledButton';
import selectWebsite from '../../../../redux/website/website-selector';
import { toggleModalWindow } from '../../../../redux/modals/modals-reducer';

export default function AuthAlert() {
  const { modalAuth } = useSelector(selectModals);
  const disptach = useDispatch();

  const { color } = useSelector(selectWebsite);

  function buttonHandler() {
    disptach(toggleModalWindow({ modal: 'modalAuth', state: false }));
    disptach(toggleModalWindow({ modal: 'modalLogIn', state: true }));
  }

  return (
    <ModalWindow modalState={modalAuth} modal="modalAuth">
      <p className={css['title']}>Alert!</p>
      <p className={css['p']}>
        For this function to work you need first to log in
      </p>
      <StyledButton
        color={color.primary}
        $subcolor={color.secondary}
        onClick={buttonHandler}
      >
        Log In
      </StyledButton>
    </ModalWindow>
  );
}
