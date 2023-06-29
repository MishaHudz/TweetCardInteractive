import styled from 'styled-components';
import { NavLink } from 'react-router-dom/dist';

export const Header = styled.header`
  height: 70px;

  padding: 10px 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 2;

  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
`;

export const Main = styled.main`
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavigationLink = styled(NavLink)`
  color: #373737;
  padding: 10px;
  background-color: #ebd8ff;
  border-radius: 10px;

  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
  transition: box-shadow 0.3s, transform 0.3s;
  &.active {
    border: 0px;
    background-color: #5cd3a8;
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transform: translateY(-2px);
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 15px;
`;
