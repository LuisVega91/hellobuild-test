import React from 'react'
import {Link, useHistory} from 'react-router-dom'

const Navigation = ()=>{
  const history = useHistory();

  const handdleClick = ()=>{
    localStorage.removeItem('token');
    history.push('/login');
  }

    return (
      <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 inner">

          <Link to="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">HelloBuild</Link>
          <br />
          <span className="text-xs text-grey-dark">Technical Test Luis Vega</span>

          </div>

        <div className="sm:mb-0 self-center">
          <button onClick={handdleClick}> Logout </button>

        </div>
      </nav>
    )

}

export default Navigation


// <nav>
//             <Link to='/'>Home</Link>
//             <Link to='/login'>Login</Link>
//             <Link to='/register'>Register</Link>
//             <Link to='/profile'>Profile</Link>
//         </nav>
