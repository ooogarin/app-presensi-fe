import { useTokenStore } from '/stores/token';

export default defineNuxtRouteMiddleware(async (to, from) => {
    const tokenStore = useTokenStore();
    const isAuth = tokenStore.dataUser ? tokenStore.dataUser.token : false;

    // no auth
    if (!isAuth) {
        console.log('unauthenticated');
        return navigateTo('/login');
    } else {
        console.log('authenticated');
    }
});