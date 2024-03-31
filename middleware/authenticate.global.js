// Si déjà logging --> redirect /, /login, /register vers /chat/defaut

export default defineNuxtRouteMiddleware(async (to, from) => {
  if(process.client) {
    const pathUnautorizedForLogged = ['/login', '/register'];

    console.log(to.path, useUserStore().user);

    if (useUserStore().user != null || useUserStore().user != undefined) {
      if (pathUnautorizedForLogged.includes(to.path)) {
        return navigateTo('/chat/defaut');
      } else {
        return;
      }
    }


    await isLoggedIn().then((response) => {
      // if path is /, /login, /register and already logged in, redirect to /chat/default
      if (pathUnautorizedForLogged.includes(to.path) && response) {
        return navigateTo('/chat/defaut');
      } else if (response === false) { // if not logged in, redirect to /login
        return navigateTo('/login');
      } else { // if logged in, continue to the page requested
        return;
      }
    });
  }
})