import { useState } from 'react';
import { putTweet } from 'services/tweetsAPI';
import {
  Elipse,
  FollowBtn,
  HorizontalLine,
  InnerElipse,
  ItemTopTweetImg,
  StatisticsList,
  TweetListItem,
  TweetLogoImg,
} from './TweetCard.styked';

import TopTweetImg from '../../images/top-tweet-card-img.png';
import GoItLogo from '../../images/GoIt-Logo.png';
import DefaultUser from '../../images/Default-User-Img.png';

function TweetCard({
  Tweet: { id, avatar, followers, tweets, user },
  Following,
  SetFollowing,
}) {
  const [followersAmount, setFollowersAmount] = useState(followers);

  const onSubscribeBtnClick = () => {
    if (Following.includes(id)) {
      SetFollowing(prevstate => prevstate.filter(el => el !== id));

      putTweet(id, {
        id,
        avatar,
        user,
        tweets,
        followers: +followersAmount - 1,
      });
      setFollowersAmount(prev => +prev - 1);
      return;
    }

    SetFollowing(prevstate => [...prevstate, id]);

    putTweet(id, {
      id,
      avatar,
      user,
      tweets,
      followers: +followersAmount + 1,
    });
    setFollowersAmount(prev => +prev + 1);
  };

  const addSignForFollowers = followersdata => {
    const hundreds = followersdata % 1000;
    const thousands = Math.floor(followersdata / 1000);

    console.log(thousands, hundreds);
    return thousands ? `${thousands},${hundreds}` : followersdata;
  };

  return (
    <TweetListItem>
      <TweetLogoImg src={GoItLogo} alt="Go It Logo" />
      <HorizontalLine />
      <Elipse>
        <InnerElipse>
          <img
            width="62px"
            height="62px"
            src={avatar ? avatar : DefaultUser}
            alt="User"
          />
        </InnerElipse>
      </Elipse>
      <ItemTopTweetImg src={TopTweetImg} alt="question mark and check mark" />

      <StatisticsList>
        <li>
          <p>
            <span>{tweets}</span> tweets
          </p>
        </li>
        <li>
          <p>
            <span>{addSignForFollowers(followersAmount)}</span> followers
          </p>
        </li>
      </StatisticsList>
      <FollowBtn
        onClick={onSubscribeBtnClick}
        style={{
          backgroundColor: `${Following.includes(id) ? '#5CD3A8' : '#ebd8ff'}`,
        }}
      >
        {Following.includes(id) ? 'following' : 'follow'}
      </FollowBtn>
    </TweetListItem>
  );
}

export default TweetCard;
