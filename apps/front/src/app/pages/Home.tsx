import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchRepostore, selectAllRepostore } from '../repostore.slice';
import { IRepository, IViewer } from '../services/queries/types';
import Profile from '../components/Profile';
import Navigation from '../components/Navigation';
import List from '../components/List';
import SearchInput from '../components/SearchInput';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [repoToSearch, setRepoToSearch] = useState('');

  const dispatch = useDispatch();
  const queryResult: IViewer | any = useSelector(selectAllRepostore)[0];

  const repositores: IRepository[] | undefined =
    queryResult?.viewer?.repositories?.nodes;
  console.log(repositores);

  useEffect(() => {
    dispatch(fetchRepostore());
  }, [dispatch]);

  const repoFiltered = () => {
    if (repoToSearch)
      return repositores?.filter((element) =>
        element?.name?.includes(repoToSearch)
      );

    return repositores;
  };

  return (
    <>
      <Navigation />
      <Profile viewer={queryResult?.viewer} />

      <SearchInput setRepoToSearch={setRepoToSearch} />

      <List repoFiltered={repoFiltered} />

    </>
  );
};

export default Home;
