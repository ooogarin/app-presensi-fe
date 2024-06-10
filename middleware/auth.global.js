import { useTokenStore } from '/stores/token';

export default defineNuxtRouteMiddleware((to, from) => {
    const tokenStore = useTokenStore();
    const isAuth = tokenStore.dataUser ? tokenStore.dataUser.token : false;

    console.log('using middleware...');
    console.log('isAuth :>> ', isAuth);

    // no auth
    if (!isAuth) {
        console.log('1 :>> ', 1);
        navigateTo('/login');
    } else {
        console.log('2 :>> ', 2);
    }
});