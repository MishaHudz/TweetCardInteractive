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
import { toast } from 'react-toastify';

function TweetCard({
  Tweet: { id, avatar, followers, tweets, user },
  Following,
  SetFollowing,
}) {
  const [followersAmount, setFollowersAmount] = useState(followers);
  const [userShow, setUserShow] = useState(false);

  const onSubscribeBtnClick = async () => {
    if (Following.includes(id)) {
      try {
        await putTweet(id, {
          id,
          avatar,
          user,
          tweets,
          followers: +followersAmount - 1,
        });
        SetFollowing(prevstate => prevstate.filter(el => el !== id));
        setFollowersAmount(prev => +prev - 1);
      } catch {
        toast.error('Network Error!');
      }
      return;
    }

    try {
      await putTweet(id, {
        id,
        avatar,
        user,
        tweets,
        followers: +followersAmount + 1,
      });
      SetFollowing(prevstate => [...prevstate, id]);
      setFollowersAmount(prev => +prev + 1);
    } catch {
      toast.error('Network Error!');
    }
  };

  const addSignForFollowers = followersdata => {
    const hundreds = followersdata % 1000;
    const thousands = Math.floor(followersdata / 1000);
    return thousands ? `${thousands},${hundreds}` : followersdata;
  };

  const userSowChange = () => {
    setUserShow(prev => !prev);
  };

  return (
    <TweetListItem>
      <TweetLogoImg src={GoItLogo} alt="Go It Logo" />
      <HorizontalLine />
      <Elipse onMouseEnter={userSowChange} onMouseLeave={userSowChange}>
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
        {userShow && (
          <li>
            <p>
              <span>{user}</span> User
            </p>
          </li>
        )}

        {!userShow && (
          <li>
            <p>
              <span>{tweets}</span> tweets
            </p>
          </li>
        )}

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
