import React, { useEffect, useState } from 'react';
import svgLink from '../../../assets/svg/link.svg';
import svgStar from '../../../assets/svg/star.svg';
import { Profile } from '../../pages/';
import { IRepository } from './types';
import { REPOSITORY_QUERY } from './queries';
import { apolloClient } from './apollo-config';

function Repository() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [ queryResult, setQueryResult ] = useState({})
  const [ repositores, setRepositories ] = useState([])


  useEffect(() => {
    setLoading(true);

    apolloClient
      .query({
        query: REPOSITORY_QUERY,
      })
      .then((result) => {
        setQueryResult(result.data);
        setRepositories(result.data.viewer.repositories.nodes);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return <div>error...</div>;
  if (loading) return <div>loading...</div>;

  return (
    <div className="">
      <Profile data={queryResult} />
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
            {repositores.map((repo: IRepository) => (
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
    </div>
  );
}

export { Repository };