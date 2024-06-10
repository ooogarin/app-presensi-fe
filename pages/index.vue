<template>
    <div class="flex flex-col space-y-4 px-8 py-4 w-full overflow-y-auto">
        <!-- <h1>This is content</h1> -->
        <!-- <ButtonBase label="Button" mode="solid"/> -->

        <div class="flex flex-col gap-8 bg-white shadow p-6 rounded-xl w-full">
            <NuxtLink to="/login" class="w-fit">
                <ButtonBase @click="handleLogout" label="Logout" />
            </NuxtLink>

            <h1 class="p-4 border w-96 overflow-auto">Token: {{ user ? user.token : "no token" }}</h1>
        </div>
    </div>
</template>

<script setup>
// pinia
import { useTokenStore } from '/stores/token';

const tokenStore = useTokenStore();

// data from auth login
let user = null;
if (tokenStore.dataUser != null) {
    user = {
        token: tokenStore.dataUser.token,
        name: tokenStore.dataUser.name,
        role: tokenStore.dataUser.role,
    }
}

function handleLogout() {
    tokenStore.clearToken();
    console.log('+logout :>> ', tokenStore.dataUser);
}
</script>