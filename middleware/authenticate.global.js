// Si déjà logging --> redirect /, /login, /register vers /chat/defaut

export default defineNuxtRouteMiddleware(async (to, from) => {
  if(process.client) {
    const pathUnautorizedForLogged = ['/login', '/register'];

    if (useUserStore().user != null) {
      if (pathUnautorizedForLogged.includes(to.path)) {
        return navigateTo('/chat/defaut');
      } else {
        return;
      }
    }


    await caMe().then((response) => {
      console.log(response);
      // if path is /, /login, /register and already logged in, redirect to /chat/default
      if (pathUnautorizedForLogged.includes(to.path) && response) {
        // set user to store
        useUserStore().setUser(response.data);
        return navigateTo('/chat/defaut');
      } else if (response === false) { // if not logged in, redirect to /login
        return navigateTo('/login');
      } else { // if logged in, continue to the page requested
        //set user data to store  
        useUserStore().setUser(response.data);
        return;
      }
    });
  }
})