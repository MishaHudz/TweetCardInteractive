import styled from 'styled-components';

export const GoBackBtnStyled = styled.button`
  width: 82px;
  height: 40px;
  background-color: #ebd8ff;
  border: 0;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;

  &:hover {
    font-size: 22px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transform: translateY(-2px);
  }
`;
