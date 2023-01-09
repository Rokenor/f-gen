import { memo } from 'react';

import { NavWrapper, NavLogo, NavList, NavItem } from './styled';

function AFinalNav() {
  return (
    <NavWrapper>
      <NavLogo>F_GEN</NavLogo>
      <NavList>
        <NavItem>
          <a href="/admin">Config list</a>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
}

export default memo(AFinalNav);
