import css from './ModalForm.module.css';
import closeEyes from 'assets/icon/eye-off.svg';

import PropTypes from 'prop-types';
import FormInput from './components/FormInput/FormInput';
import { useSelector } from 'react-redux';
import selectWebsite from '../../../../redux/website/website-selector';

import { StyledButton } from 'components/StyledButton/StyledButton';

export default function ModalForm({
  formHandler,
  buttonText = '',

  email = false,
  password = false,
  name = false,
  fullname = false,
  phoneNumber = false,

  emailValue = '',
  passwordValue = '',
  nameValue = '',
  fullnameValue = '',
  phoneNumberValue = '',

  namePlaceholder = '',
  emailPlaceholder = '',
  passwordPlaceholder = '',
  fullnamePlaceholder = '',
  phoneNumberPlaceholder = '',

  setName,
  setEmail,
  setPassword,
  setFullname,
  setPhoneNumber,
}) {
  const { color } = useSelector(selectWebsite);

  const onIconClick = ({ currentTarget }) => {
    const input = currentTarget.parentElement.querySelector('input');

    input.type = input.type === 'text' ? 'password' : 'text';
  };

  return (
    <form className={css['form']} action="" onSubmit={formHandler}>
      {fullname ? (
        <FormInput
          label="Full name"
          type="text"
          value={fullnameValue}
          placeholder={fullnamePlaceholder}
          setText={setFullname}
        />
      ) : null}
      {name ? (
        <FormInput
          label="name"
          type="text"
          value={nameValue}
          placeholder={namePlaceholder}
          setText={setName}
        />
      ) : null}
      {email ? (
        <FormInput
          label="email"
          type="email"
          value={emailValue}
          placeholder={emailPlaceholder}
          setText={setEmail}
        />
      ) : null}
      {phoneNumber ? (
        <FormInput
          label="Phone number"
          type="text"
          value={phoneNumberValue}
          placeholder={phoneNumberPlaceholder}
          setText={setPhoneNumber}
        />
      ) : null}
      {password ? (
        <FormInput
          label="password"
          type="password"
          value={passwordValue}
          isIcon={true}
          icon={closeEyes}
          placeholder={passwordPlaceholder}
          setText={setPassword}
          onIconClick={onIconClick}
        />
      ) : null}
      <StyledButton
        color={color.primary}
        $subcolor={color.secondary}
        className={css['button']}
      >
        {buttonText}
      </StyledButton>
    </form>
  );
}

ModalForm.propTypes = {
  formHandler: PropTypes.func.isRequired,
  buttonText: PropTypes.string,

  email: PropTypes.bool,
  password: PropTypes.bool,
  name: PropTypes.bool,
  fullname: PropTypes.bool,
  phoneNumber: PropTypes.bool,

  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
  nameValue: PropTypes.string,
  fullnameValue: PropTypes.string,
  phoneNumberValue: PropTypes.string,

  namePlaceholder: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  passwordPlaceholder: PropTypes.string,
  fullnamePlaceholder: PropTypes.string,
  phoneNumberPlaceholder: PropTypes.string,

  setName: PropTypes.func,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  setFullname: PropTypes.func,
  setPhoneNumber: PropTypes.func,
};
