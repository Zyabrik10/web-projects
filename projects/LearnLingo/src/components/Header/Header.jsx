import css from './Header.module.css';
import globalCss from 'css/global.module.css';

import { HeaderAuth, HeaderLogo, HeaderNavigation } from './components/index';

import modalBurgerMenu from 'assets/icon/burger-menu.svg';
import { useDispatch } from 'react-redux';
import { toggleModalWindow } from '../../redux/modals/modals-reducer';

export default function Header() {
  const dispatch = useDispatch();

  const openmodalBurgerMenu = () =>
    dispatch(toggleModalWindow({ modal: 'modalBurgerMenu', state: true }));

  return (
    <header className={css['header']}>
      <div className={`${globalCss['container']} ${css['header-container']}`}>
        <HeaderLogo />
        <button className={css['burger-button']} onClick={openmodalBurgerMenu}>
          <img src={modalBurgerMenu} alt="" width="30" height="30" />
        </button>
        <HeaderNavigation />
        <HeaderAuth />
      </div>
    </header>
  );
}
