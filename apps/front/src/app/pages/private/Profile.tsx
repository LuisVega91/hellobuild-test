import svgPullRequest from '../../../assets/svg/pull-request.svg';
import svgRepository from '../../../assets/svg/repository.svg';
import svgProject from '../../../assets/svg/project.svg';
import svgFollowers from '../../../assets/svg/followers.svg';

interface IProfile {
  viewer: {
    login: string;
    name: string;
    email: string;
    url: string;
    avatarUrl: string;
    projects: {
      totalCount: number;
    };
    followers: {
      totalCount: number;
    };
    pullRequests: {
      totalCount: number;
    };
    repositories: {
      totalCount: number;
      id: string;
      name: string;
      nameWithOwner: string;
      url: string;
      stargazerCount: string;
      description: string;
      owner: {
        avatarUrl: string;
        login: string;
      };
    };
  };
}

const Profile = ({ viewer }: IProfile) => {
  return (
    <>
      <div className="flex flex-row flex-wrap p-3">
        <div className="mx-auto w-2/3">
          <div className="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased">
            <div className="md:w-1/3 w-full">
              <a href={viewer.url} target="_blank" rel="noreferrer">
                <img
                  className="rounded-lg shadow-lg antialiased bg-card-img"
                  src={viewer.avatarUrl}
                  alt=""
                />
              </a>
            </div>
            <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
              <div className="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
                <div className="text-2xl text-white leading-tight">
                  {viewer.name}
                </div>
                <a href={viewer.url} target="_blank" rel="noreferrer">
                  <div className="text-normal text-gray-300 hover:text-gray-400 cursor-pointer">
                    <span className="border-b border-dashed border-gray-500 pb-1">
                      {viewer.login}
                    </span>
                  </div>
                </a>
                <a href={viewer.url} target="_blank" rel="noreferrer">
                  <div className="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">
                    <strong>email: </strong> {viewer.email}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex-1 m-5 relative rounded bg-gray-200 shadow">
          <div className="bg-green-500 pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow">
            <img
              src={svgPullRequest}
              alt="svgPullRequest"
              className="w-6 h-6"
            />
          </div>

          <div className="float-right top-0 right-0 m-3">
            <div className="text-right text-sm">Pull Request</div>
            <div className="text-right text-3xl">
              {viewer?.pullRequests?.totalCount}
            </div>
          </div>
        </div>

        <div className="flex-1 m-5 relative rounded bg-gray-200 shadow">
          <div className="bg-yellow-500 pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow">
            <img src={svgRepository} alt="svgRepository" className="w-6 h-6" />
          </div>

          <div className="float-right top-0 right-0 m-3">
            <div className="text-right text-sm">Repositories</div>
            <div className="text-right text-3xl">
              {viewer?.repositories?.totalCount}
            </div>
          </div>
        </div>
        <div className="flex-1 m-5 relative rounded bg-gray-200 shadow">
          <div className="bg-blue-500 pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow">
            <img src={svgProject} alt="svgProject" className="w-6 h-6" />
          </div>

          <div className="float-right top-0 right-0 m-3">
            <div className="text-right text-sm">Projects</div>
            <div className="text-right text-3xl">
              {viewer?.projects?.totalCount}
            </div>
          </div>
        </div>

        <div className="flex-1 m-5 relative rounded bg-gray-200 shadow">
          <div className="bg-red-500 pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow">
            <img src={svgFollowers} alt="svgFollowers" className="w-6 h-6" />
          </div>

          <div className="float-right top-0 right-0 m-3">
            <div className="text-right text-sm">Followers</div>
            <div className="text-right text-3xl">
              {viewer?.followers?.totalCount}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
