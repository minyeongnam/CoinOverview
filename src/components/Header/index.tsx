import { NavLink } from 'react-router-dom';
import { ROOT } from 'constants/path';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to={ROOT.PRICES}>PRICES</NavLink>
        </li>
        <li>
          <NavLink to={ROOT.EXCHANGES}>EXCHANGES</NavLink>
        </li>
        <li>
          <NavLink to={ROOT.COINS}>COINS</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
