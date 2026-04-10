import { useCallback, useEffect } from 'react';
import { HeaderAuth, HeaderNavigation } from '../index';
import css from './MobileMenu.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectModals } from '../../../../redux/modals/modals-select';
import { toggleModalWindow } from '../../../../redux/modals/modals-reducer';

export default function MobileMenu() {
  const { modalBurgerMenu } = useSelector(selectModals);
  const dispatch = useDispatch();

  const closeOnClickOnBackground = ({ target, currentTarget }) =>
    target === currentTarget &&
    dispatch(toggleModalWindow({ modal: 'modalBurgerMenu', state: false }));

  const closeOnEscape = useCallback(
    ({ key }) => {
      if (key === 'Escape')
        dispatch(toggleModalWindow({ modal: 'modalBurgerMenu', state: false}));
    },
    [dispatch]
  );

  useEffect(() => {
    if (modalBurgerMenu) window.addEventListener('keydown', closeOnEscape);
    else window.removeEventListener('keydown', closeOnEscape);
  }, [modalBurgerMenu, closeOnEscape]);

  return (
    <div
      className={`${css['mobile-menu']} ${
        modalBurgerMenu ? css['active'] : ''
      }`}
      onMouseDown={closeOnClickOnBackground}
    >
      <HeaderNavigation
        navClasses={[css['nav']]}
        listClasses={[css['list']]}
        itemClasses={[css['item']]}
      />
      <HeaderAuth authClasses={[css['auth']]} />
    </div>
  );
}
