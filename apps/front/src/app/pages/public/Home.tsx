import React, { useEffect, useState } from 'react';
import svgLink from '../../../assets/svg/link.svg';
import svgStar from '../../../assets/svg/star.svg';
import { Profile } from '../../pages/';
import { IRepository, IViewer } from '../../services/queries/types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepostore, selectAllRepostore } from '../../repostore.slice';
import Page from '../../components/Page';

const  Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [repoToSearch, setRepoToSearch] = useState('');

  const dispatch = useDispatch();
  const queryResult: IViewer | any = useSelector(selectAllRepostore)[0];


  const repositores: IRepository[]|undefined = queryResult?.viewer?.repositories?.nodes;
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
    <Page >
      <Profile viewer={queryResult?.viewer} />

      <div className="box pt-6">
        <div className="box-wrapper">
          <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
            <button className="outline-none focus:outline-none">
              <svg
                className=" w-5 text-gray-600 h-5 cursor-pointer"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <input
              onChange={(e) => setRepoToSearch(e.target.value)}
              type="search"
              name=""
              id=""
              placeholder="search for repos"
              x-model="q"
              className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">name</th>
              <th className="py-3 px-6 text-left">nameWithOwner</th>
              <th className="py-3 px-6 text-center">stargazerCount</th>
              <th className="py-3 px-6 text-center">description</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {repoFiltered()?.map((repo: IRepository) => (
              <tr
                key={repo.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <a href={repo.url} target="_blank" rel="noreferrer">
                        <img
                          src={svgLink}
                          alt={repo.name}
                          className="w-6 h-6 transform hover:scale-125"
                        />
                      </a>
                    </div>
                    <span className="font-medium">
                      <a href={repo.url} target="_blank" rel="noreferrer">
                        {repo.name}
                      </a>
                    </span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <img
                        className="w-6 h-6 rounded-full"
                        src={repo?.owner?.avatarUrl}
                        alt="client-img"
                      />
                    </div>
                    <span>{repo?.owner?.login}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex items-center justify-center">
                    <img src={svgStar} alt={repo.name} className="w-6 h-6" />
                    <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                      {repo.stargazerCount}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  {repo.description || (
                    <span className="text-gray-300 ">No Description</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Page>
  );
}

export default Home;
