import ModalWindow from 'components/ModalWindow/ModalWindow';
import modalCss from '../../ModalWindow.module.css';
import css from './RegistrationModal.module.css';
import ModalForm from '../ModalForm/ModalForm';
import { useState } from 'react';
import { selectModals } from '../../../../redux/modals/modals-select';
import { useDispatch, useSelector } from 'react-redux';

import { selectAuth } from '../../../../redux/auth/auth-selector';
import { signup } from '../../../../redux/auth/auth-actions';
import { toggleModalWindow } from '../../../../redux/modals/modals-reducer';
import { userSignupSchema } from 'yupSchemas/signup/signup';
import { toast } from 'react-toastify';
import { StyledNotyfication } from 'components/StyledNotifycation/StyledNotifycation';
import selectWebsite from '../../../../redux/website/website-selector';

export default function RegistrationModal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { modalRegistration } = useSelector(selectModals);
  const dispatch = useDispatch(selectAuth);
  const { color } = useSelector(selectWebsite);


  const formHandler = async e => {
   try {
      e.preventDefault();

      const userInfo = {
        email,
        password,
        name
      };

      const user = await userSignupSchema.validate(userInfo);

      dispatch(signup(user));
      dispatch(toggleModalWindow({ modal: 'modalRegistration', state: false }));
      setEmail("");
      setPassword("");
    } catch (e) {
      toast(e.message);
      toast.clearWaitingQueue();
    }
  };

  return (
    <ModalWindow modal="modalRegistration" modalState={modalRegistration}>
      <StyledNotyfication color={color.primary} limit={1}/>

      <p className={modalCss['title']}>Registration</p>
      <p className={`${modalCss['p']} ${css['p']}`}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>

      <ModalForm
        formHandler={formHandler}
        buttonText="Sign Up"
        name={true}
        email={true}
        password={true}
        nameValue={name}
        emailValue={email}
        passwordValue={password}
        namePlaceholder="name"
        emailPlaceholder="email"
        passwordPlaceholder="password"
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </ModalWindow>
  );
}
