import TweetCard from 'components/TweetCard/TweetCard';
import { useEffect, useState } from 'react';
import { getAllTweets } from 'services/tweetsAPI';
import { TweetsList } from './TweetsPage.styled';

function TweetsPage() {
  const [tweets, setTweets] = useState(null);
  const [following, setFollowing] = useState(
    () => JSON.parse(localStorage.getItem('followingArr')) ?? []
  );

  const setTwettsFromApi = async () => {
    const data = await getAllTweets();
    setTweets(data);
  };

  useEffect(() => {
    localStorage.setItem('followingArr', JSON.stringify(following));
  }, [following]);

  useEffect(() => {
    setTwettsFromApi();
  }, []);

  return (
    <TweetsList>
      {tweets &&
        tweets.map(tweet => (
          <TweetCard
            Tweet={tweet}
            key={tweet.id}
            Following={following}
            SetFollowing={setFollowing}
          />
        ))}
    </TweetsList>
  );
}

export default TweetsPage;
