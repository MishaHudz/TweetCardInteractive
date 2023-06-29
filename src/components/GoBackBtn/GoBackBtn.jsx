import { useNavigate } from 'react-router-dom/dist';
import { GoBackBtnStyled } from './GoBackBtn.styled';

function GoBackBtn() {
  const navigate = useNavigate();

  return (
    <GoBackBtnStyled
      onClick={() => navigate('/')}
      onMouseOver={evt => {
        evt.target.innerHTML = '&#8592;';
      }}
      onMouseLeave={evt => {
        evt.target.innerHTML = 'Go back';
      }}
    >
      Go back
    </GoBackBtnStyled>
  );
}

export default GoBackBtn;
