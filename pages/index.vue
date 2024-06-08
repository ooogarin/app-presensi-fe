<template>
    <div class="flex flex-col items-center space-y-4 px-8 py-4 border w-full overflow-y-auto">
        <!-- <h1>This is content</h1> -->
        <!-- <ButtonBase label="Button" mode="solid"/> -->

        <NuxtLink to="/login">
            <ButtonBase @click="handleLogout" label="Logout" />
        </NuxtLink>

        <h1>Token: {{ user ? user.token : "no token" }}</h1>
    </div>
</template>

<script setup>
    // data from auth login
    const userToken = useCookie('user');
    let user = null;
    if (userToken.value != null) {
        user = {
            token: userToken.value.token,
            name: userToken.value.name,
            role: userToken.value.role,
        }
    }

    function handleLogout() {
        userToken.value = null;
        console.log('+logout :>> ', userToken.value);
    }
</script>