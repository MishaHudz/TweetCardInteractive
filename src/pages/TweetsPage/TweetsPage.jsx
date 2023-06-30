import 'react-toastify/dist/ReactToastify.css';
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
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import { ToastContainer, toast } from 'react-toastify';

function TweetsPage() {
  const [tweets, setTweets] = useState(null);
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(1);
  const [activeBtn, setActiveBtn] = useState(false);
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

  useEffect(() => {
    localStorage.setItem('followingArr', JSON.stringify(following));
  }, [following]);

  useEffect(() => {
    const setTwettsFromApi = async () => {
      const data = await getAllTweets(page);
      setTweets(prev => (prev ? [...prev, ...data] : data));
      if (data.length < 3) {
        setActiveBtn(false);
        toast.info('You have reached the end of the list!');
      } else {
        setActiveBtn(true);
      }
    };
    setTwettsFromApi();
  }, [page]);

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
      {activeBtn && <LoadMoreBtn setPage={setPage} />}
      <ToastContainer />
    </TweetsSection>
  );
}

export default TweetsPage;
