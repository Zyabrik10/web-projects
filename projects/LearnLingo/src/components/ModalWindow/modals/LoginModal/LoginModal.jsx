import ModalWindow from 'components/ModalWindow/ModalWindow';
import modalCss from '../../ModalWindow.module.css';
import css from './LoginModal.module.css';
import ModalForm from '../ModalForm/ModalForm';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectModals } from '../../../../redux/modals/modals-select';

import { login } from '../../../../redux/auth/auth-actions';
import { toggleModalWindow } from '../../../../redux/modals/modals-reducer';
import { userLoginSchema } from 'yupSchemas/login/login';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledNotyfication } from 'components/StyledNotifycation/StyledNotifycation';
import selectWebsite from '../../../../redux/website/website-selector';
import { initFavTeachers } from '../../../../redux/teachers/teachers-reducer';

export default function LoginModal() {
  const { modalLogIn } = useSelector(selectModals);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const { color } = useSelector(selectWebsite);

  const formHandler = async e => {
    try {
      e.preventDefault();

      const userInfo = {
        email,
        password,
      };

      const user = await userLoginSchema.validate(userInfo);

      const {payload} = await dispatch(login(user));
      
      const { id } = payload.user;

      dispatch(initFavTeachers(id));
      dispatch(toggleModalWindow({ modal: 'modalLogIn', state: false }));
      setEmail("");
      setPassword("");
    } catch (e) {
      toast(e.message);
      toast.clearWaitingQueue();
    }
  };

  return (
    <ModalWindow modal="modalLogIn" modalState={modalLogIn}>
      <StyledNotyfication color={color.primary} limit={1}/>
      <p className={modalCss['title']}>Log in</p>
      <p className={`${modalCss['p']} ${css['p']}`}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>

      <ModalForm
        formHandler={formHandler}
        buttonText="Log In"
        email={true}
        password={true}
        emailValue={email}
        passwordValue={password}
        emailPlaceholder="email"
        passwordPlaceholder="password"
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </ModalWindow>
  );
}
