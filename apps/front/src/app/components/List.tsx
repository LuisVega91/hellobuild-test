import React from 'react'
import { IRepository } from '../services/queries/types'
import ListItem from './ListItem';

const List = ({repoFiltered}:any) => {
  return (
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
          <ListItem {...repo} />
         ))}
      </tbody>
    </table>
  </div>
  )
}

export default List

