// pinia
import { useTokenStore } from '/stores/token';

export const useLogin = async (dataUser) => {
    // call API login
    const { data: response, status } = await useFetch('http://localhost:3000/web/v1/login', {
        method: 'POST',
        body: {
            username: dataUser.value.username,
            password: dataUser.value.password,
        },
    });

    if (status.value === "success") {
        const tokenStore = useTokenStore();
        
        // set user data & token auth
        tokenStore.storeToken({
            token: response.value.data[0].token,
            name: response.value.data[0].name,
            role: response.value.data[0].role,
        });

        // redirect to dashboard
        console.log('login berhasil');
        navigateTo('/');
    } else {
        console.log('login gagal');
    }
}