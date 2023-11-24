// Si déjà logging --> redirect /, /login, /register vers /chat/defaut

export default defineNuxtRouteMiddleware((to, from) => {
  if(process.client) {
    if ((to.path == '/' || to.path == '/login' || to.path == 'register') && isLoggedIn()) {
      return navigateTo('/chat/defaut');
    }
  }
})