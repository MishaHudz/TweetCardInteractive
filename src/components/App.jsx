import HomePage from 'pages/HomePage/HomePage';
import TweetsPage from 'pages/TweetsPage/TweetsPage';
import { Navigate, Route, Routes } from 'react-router-dom/dist';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};
