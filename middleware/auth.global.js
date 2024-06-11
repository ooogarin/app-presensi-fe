import { useTokenStore } from '/stores/token';

export default defineNuxtRouteMiddleware(async (to, from) => {
    const tokenStore = useTokenStore();
    const isAuth = tokenStore.dataUser;

    // no auth
    if (!isAuth) {
        console.log('unauthenticated');
        
        if (to.fullPath !== "/login") {
            return navigateTo('/login');
        }
    } else {
        console.log('authenticated');
    }
});