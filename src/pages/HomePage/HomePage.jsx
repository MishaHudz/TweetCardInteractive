import {
  HomePageDescription,
  HomePageHeader,
  HomePageSection,
  LeftImg,
  LeftSideContainer,
  TweetsLink,
} from './HomePage.styled';
import TopTweetImg from '../../images/top-tweet-card-img.png';
function HomePage() {
  return (
    <HomePageSection>
      <LeftSideContainer>
        <LeftImg
          src={TopTweetImg}
          alt="question mark and check mark"
          width="308"
          height="168"
        />
      </LeftSideContainer>

      <div>
        <HomePageHeader>
          Explore <br /> Tweets
        </HomePageHeader>
        <HomePageDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eius
          minus consectetur dolores cum. Obcaecati, voluptatem voluptates rerum
          ut velit, veniam eos temporibus pariatur aliquam, nobis aliquid ea
          voluptate? Labore?
        </HomePageDescription>
        <TweetsLink to="/tweets">Tweets</TweetsLink>
      </div>
    </HomePageSection>
  );
}

export default HomePage;
