import ModalWindow from 'components/ModalWindow/ModalWindow';
import { useSelector } from 'react-redux';
import { selectModals } from '../../../../redux/modals/modals-select';

import modalCss from '../../ModalWindow.module.css';

import css from './BookModal.module.css';

import ModalForm from '../ModalForm/ModalForm';
import { useState } from 'react';
import selectWebsite from '../../../../redux/website/website-selector';

export default function BookModal() {
  const { color } = useSelector(selectWebsite);
  const { modalBook } = useSelector(selectModals);

  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  function formHandler(e) {
    e.preventDefault();
  }

  return (
    <ModalWindow modal="modalBook" modalState={modalBook}>
      <p className={modalCss['title']}>Book trial lesson</p>
      <p className={`${modalCss['p']} ${css['p']}`}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <p className={css['question']}>
        What is your main reason for learning English?
      </p>
      <ul className={css['radio-list']}>
        <li>
          <input style={{borderColor: color.primary}} type="radio" name="fate" id="fate1" />
          <label htmlFor="fate1">Career and business</label>
        </li>
        <li>
          <input style={{borderColor: color.primary}} type="radio" name="fate" id="fate2" />
          <label htmlFor="fate2">Lesson for kids</label>
        </li>
        <li>
          <input style={{borderColor: color.primary}} type="radio" name="fate" id="fate3" />
          <label htmlFor="fate3">Living abroad</label>
        </li>
        <li>
          <input style={{borderColor: color.primary}} type="radio" name="fate" id="fate4" />
          <label htmlFor="fate4">Exams and coursework</label>
        </li>
        <li>
          <input style={{borderColor: color.primary}} type="radio" name="fate" id="fate5" />
          <label htmlFor="fate5">Culture, travel or hobby</label>
        </li>
      </ul>
      <ModalForm
        formHandler={formHandler}
        buttonText="Book"
        email={true}
        emailValue={email}
        setEmail={setEmail}
        emailPlaceholder="email"
        phoneNumber={true}
        phoneNumberValue={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        phoneNumberPlaceholder="phone number"
        fullname={true}
        fullnameValue={fullname}
        fullnamePlaceholder="full name"
        setFullname={setFullname}
      />
    </ModalWindow>
  );
}
