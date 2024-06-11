export const useTokenStore = defineStore('token', () => {
    // set cookie token
    const cookieToken = useCookie('token');

    const dataUser = ref(cookieToken || null);

    // set user data
    function storeToken(data) {
        dataUser.value = {
            token: data.token,
            name: data.name,
            role: data.role,
            username: data.username,
            password: data.password,
        }

        // store dataUser to cookie
        cookieToken.value = dataUser.value
    }

    // clear token
    function clearToken() {
        // clear dataUser from pinia store
        dataUser.value = null;

        // clear dataUser from cookie
        cookieToken.value = null;
    }
  
    return {
        dataUser,
        storeToken,
        clearToken,
    }
})