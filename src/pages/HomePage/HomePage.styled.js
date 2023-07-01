import styled from 'styled-components';
import { Link } from 'react-router-dom/dist';

export const HomePageSection = styled.section`
  padding-top: 30px;
  min-height: 100vh;
  color: #373737;
  display: flex;
  column-gap: 30px;

  width: 320px;
  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1280px) {
    width: 1200px;
  }
`;

export const LeftImg = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const HomePageHeader = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
`;

export const HomePageDescription = styled.p`
  margin-bottom: 20px;
  line-height: 1.5em;
`;

export const LeftSideContainer = styled.div`
  padding-top: 50px;
`;

export const TweetsLink = styled(Link)`
  display: inline-block;
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
