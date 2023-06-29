import styled from 'styled-components';

export const GoBackBtnStyled = styled.button`
  width: 82px;
  height: 40px;
  background-color: #5cd3a8;
  border: 0;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    font-size: 22px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transform: translateY(-2px);
  }
`;
