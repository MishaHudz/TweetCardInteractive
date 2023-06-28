import styled from 'styled-components';

export const TweetListItem = styled.li`
  width: 380px;
  height: 460px;
  padding-top: 28px;
  padding-left: 36px;
  padding-right: 36px;
  padding-bottom: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  border-radius: 20px;
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
`;

export const ItemTopTweetImg = styled.img`
  padding-bottom: 88px;
`;

export const TweetLogoImg = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const HorizontalLine = styled.div`
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
  position: absolute;
  top: 214px;
  left: 0px;
`;

export const Elipse = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 8px;
  border: 8px solid #ebd8ff;
  background: transparent;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
  position: absolute;
  top: 178px;
  left: 150px;
  overflow: hidden;
`;

export const FollowBtn = styled.button`
  width: 196px;
  height: 50px;
  padding-top: 14px;
  padding-bottom: 14px;
  border: 0;
  text-transform: uppercase;
  border-radius: 10px;
  background-color: EBD8FF;
  cursor: pointer;
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 26px;
  text-transform: uppercase;
`;
