
const getIsLoggedIn = async () => {

  const token = localStorage.getItem('token');
  if(token)
      return true

  return false
}



export const requireLogin = async (to:any, from:any, next:any) => {
  if (to.meta.auth) {
      if (await getIsLoggedIn()) {
          next();
      }
      next.redirect('/login');
  } else {
      next();
  }
};
