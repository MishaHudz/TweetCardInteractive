import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: flex;
`;

export const DropdownBtn = styled.button`
  width: 82px;
  height: 40px;

  border: 0;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;

  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transform: translateY(-2px);
  }
`;

export const DropdownContent = styled.ul`
  /* height: 40px; */
  display: flex;
  flex-direction: column;
  z-index: 1;
  gap: 10px;
  position: absolute;

  top: 40px;
  left: 0px;

  padding: 10px 10px;
  border-radius: 10px;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
`;

export const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

export const DropdownItemBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  font-size: 15px;

  &:hover,
  &:focus {
    transform: translateY(-2px);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;
