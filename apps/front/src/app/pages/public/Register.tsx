import GithubButton from 'react-github-login-button';
import { useHistory } from 'react-router';
import Page from '../../components/Page';
import gitHubAuth from '../../services/auth/authService';

const Register = () => {
  const history = useHistory();

  const handdleClick = async () => {
    const res = await gitHubAuth();
    console.log(res);
    history.push('/');
  };

  return (
    <Page>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
          <div
            className="w-11/12 w-100 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
              px-6 py-10 sm:px-10 sm:py-6
              bg-white rounded-lg shadow-md lg:shadow-lg text-center"
          >
            <h2 className="font-semibold text-3xl lg:text-4xl text-gray-800">
              SignIn
            </h2>
            <br />
            <GithubButton
              className="m-auto"
              label="SignIn with GitHub"
              type="light"
              onClick={handdleClick}
            />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Register;
