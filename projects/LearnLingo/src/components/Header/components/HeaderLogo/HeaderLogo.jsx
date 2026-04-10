import { Link } from 'react-router-dom';
import globalCss from 'css/global.module.css';

import mainLogo from 'assets/icon/ukraine.svg';

export default function HeaderLogo() {
  return (
    <Link to="/" className={`${globalCss['main-logo']}`}>
      <img src={mainLogo} alt="" />
      <span>LearnLingo</span>
    </Link>
  );
}
