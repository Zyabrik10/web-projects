import { useDispatch } from 'react-redux';
import css from './ModalWindow.module.css';
import crossImage from 'assets/icon/x.svg';
import { toggleModalWindow } from '../../redux/modals/modals-reducer';

import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';

export default function ModalWindow({ children, modal, modalState = false }) {
  const dispatch = useDispatch();

  const crossHandler = () =>
    dispatch(toggleModalWindow({ modal, state: false }));

  const closeOnClickOnBackground = ({ target, currentTarget }) =>
    target === currentTarget &&
    dispatch(toggleModalWindow({ modal, state: false }));

  const closeOnEscape = useCallback(
    ({ key }) => {
      if (key === 'Escape')
        dispatch(toggleModalWindow({ modal, state: false }));
    },
    [dispatch, modal]
  );

  useEffect(() => {
    if (modalState) window.addEventListener('keydown', closeOnEscape);
    else window.removeEventListener('keydown', closeOnEscape);
  }, [modalState, closeOnEscape]);

  return (
    <div
      className={`${css['modal']} ${modalState ? css['active'] : ''}`}
      onMouseDown={closeOnClickOnBackground}
    >
      <div className={css['modal-content']}>
        <button className={css['cross']} onClick={crossHandler} type="button">
          <img src={crossImage} alt="" />
        </button>
        {children}
      </div>
    </div>
  );
}

ModalWindow.propTypes = {
  children: PropTypes.node.isRequired,
  modal: PropTypes.string.isRequired,
  modalState: PropTypes.bool,
};
