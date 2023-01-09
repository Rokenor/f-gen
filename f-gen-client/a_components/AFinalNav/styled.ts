import styled from '@emotion/styled';

export const AdminWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px auto;

  width: 1024px;

  margin: 0 auto;
`;

export const NavWrapper = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
`;

export const NavLogo = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 42px;
  font-weight: bold;

  width: 200px;
  height: 100px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.li`
  a {
    display: flex;
    flex-direction: row;

    align-items: center;

    font-size: 18px;
    font-weight: bold;

    text-decoration: none;

    color: #282828;

    &:before {
      content: '';
      width: 16px;
      height: 8px;
      margin-right: 8px;
      border-radius: 2px;
      background: #000;
      display: block;
    }
  }
`;
