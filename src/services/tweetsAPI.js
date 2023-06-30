import axios from 'axios';

axios.defaults.baseURL = 'https://649b4ef0bf7c145d023a353f.mockapi.io';

const params = {
  limit: 3,
};

export async function getAllTweets(page) {
  params.page = page;
  const { data } = await axios('/tweets', { params });
  return data;
}

export async function putTweet(id, dataObj) {
  const { data } = await axios.put(`/tweets/${id}`, dataObj);

  return data;
}
