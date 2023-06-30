import styled from 'styled-components';

export const TweetsList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  row-gap: 8px;

  @media (min-width: 768px) {
    column-gap: 8px;
  }

  @media (min-width: 1280px) {
    column-gap: 30px;
    row-gap: 15px;
  }
`;

export const TweetsSection = styled.section`
  width: 320px;
  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1280px) {
    width: 1200px;
  }
`;

export const TweetsPageNavigateContainer = styled.div`
  display: flex;
  column-gap: 20px;

  margin-bottom: 15px;
`;
