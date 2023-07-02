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
          Welcome to our website, where you will find a convenient tool for
          tracking users' activity on Twitter. Our platform allows you to follow
          users, displaying their username, tweet count, and followers. You can
          also add specific users to your watchlist to stay updated on their
          activity. With these features, you can effectively manage your Twitter
          experience and receive important information about the users that
          interest you. Join us today and enjoy the convenience of tracking
          users' tweets!
        </HomePageDescription>
        <TweetsLink to="/tweets">Tweets</TweetsLink>
      </div>
    </HomePageSection>
  );
}

export default HomePage;
