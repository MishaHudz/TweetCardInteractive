import styled from 'styled-components';

export const LoadMoreBtnStyled = styled.button`
  cursor: pointer;
  display: block;
  width: 103px;
  height: 40px;

  padding: 5px 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  border: 0;
  border-radius: 10px;
  font-size: 15px;
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
