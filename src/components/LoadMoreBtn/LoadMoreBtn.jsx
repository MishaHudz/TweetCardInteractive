import { LoadMoreBtnStyled } from './LoadMoreBtn.styled';

function LoadMoreBtn({ setPage }) {
  const onLoadMoreBtnClick = () => {
    setPage(prev => prev + 1);
  };

  return (
    <LoadMoreBtnStyled onClick={onLoadMoreBtnClick}>
      Load more
    </LoadMoreBtnStyled>
  );
}

export default LoadMoreBtn;
