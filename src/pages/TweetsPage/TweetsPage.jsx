import TweetCard from 'components/TweetCard/TweetCard';
import { useEffect, useState } from 'react';
import { getAllTweets } from 'services/tweetsAPI';
import {
  TweetsList,
  TweetsPageNavigateContainer,
  TweetsSection,
} from './TweetsPage.styled';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import Dropdown from 'components/Dropdown/Dropdown';

function TweetsPage() {
  const [tweets, setTweets] = useState(null);
  const [filter, setFilter] = useState('All');
  const [following, setFollowing] = useState(
    () => JSON.parse(localStorage.getItem('followingArr')) ?? []
  );

  const filterData = () => {
    if (filter === 'All') {
      return tweets;
    }
    if (filter === 'Follow') {
      return tweets.filter(tweet => !following.includes(tweet.id));
    }
    if (filter === 'Followings') {
      return tweets.filter(tweet => following.includes(tweet.id));
    }
  };

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
    <TweetsSection>
      <TweetsPageNavigateContainer>
        <GoBackBtn />
        <Dropdown setFilter={setFilter} />
      </TweetsPageNavigateContainer>
      <TweetsList>
        {filterData() &&
          filterData().map(tweet => (
            <TweetCard
              Tweet={tweet}
              key={tweet.id}
              Following={following}
              SetFollowing={setFollowing}
            />
          ))}
      </TweetsList>
    </TweetsSection>
  );
}

export default TweetsPage;
