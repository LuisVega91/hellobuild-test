export interface IRepository {
  id?: string;
  name?: string;
  nameWithOwner?: string;
  url?: string;
  stargazerCount?: string;
  description?: string;
  owner?: {
    avatarUrl?: string;
    login?: string;
  };
};


export interface IQueryResult {
  data?: IViewer;
};


export interface IViewer {
  viewer?: {
    login?: string;
    name?: string;
    email?: string;
    url?: string;
    avatarUrl?: string;
    projects?: {
      totalCount?: number;
    };
    followers?: {
      totalCount?: number;
    };
    pullRequests?: {
      totalCount?: number;
    };
    repositories?: {
      totalCount?: string;
      nodes: IRepository[]
    };
  };
};

