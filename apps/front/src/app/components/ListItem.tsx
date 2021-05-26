import React from 'react'
import { IRepository } from '../services/queries/types';
import svgLink from '../../assets/svg/link.svg';
import svgStar from '../../assets/svg/star.svg';

const ListItem = (repo: IRepository) => {
  return (
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

  )
}

export default ListItem

