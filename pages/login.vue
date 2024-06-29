<template>
    <div class="bg-blue-500 w-2/3">

    </div>
    <div class="bg-slate-50 px-8 py-2 w-1/3 min-w-[500px]">
        <div class="flex flex-col h-full">
            <div class="flex justify-center items-center h-1/4">
                <div>
                    <img src="/img/logo.png" alt="Company" class="">
                </div>
            </div>
            <div class="flex-1 h-2/4">
                <div class="flex justify-center items-center">
                    <form @submit.prevent="handleLogin" class="flex flex-col p-4 w-full h-full">
                        <div class="flex flex-col h-[204px]">
                            <div class="flex flex-col gap-4">
                                <div class="flex flex-col">
                                    <label class="mb-2 font-bold text-slate-800">Username</label>
                                    <div class="relative flex items-center">
                                        <input v-model="user.username" type="text"
                                            class="rounded-xl w-full h-12 font-medium cursor-text pe-16 ps-4 focus:outline-slate-600 ring-1 ring-slate-600 focus:outline-offset-1"
                                            placeholder="Username">
                                        <div
                                            class="right-0 absolute flex justify-center items-center rounded-xl w-12 h-full pointer-events-none round">
                                            <IconsUser
                                                class="h-6 text-slate-600 transition duration-500 stroke-2 stroke-slate-800" />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <label class="mb-2 font-bold text-slate-800">Password</label>
                                    <div class="relative flex items-center">
                                        <input v-model="user.password" :type="isHidePassword ? 'password' : 'text'"
                                            class="rounded-xl w-full h-12 font-medium cursor-text pe-16 ps-4 focus:outline-slate-600 ring-1 ring-slate-600 focus:outline-offset-1"
                                            placeholder="Password">
                                        <div @click="isHidePassword = !isHidePassword" class="right-0 absolute flex justify-center items-center hover:bg-slate-100 rounded-r-xl w-12 h-full cursor-pointer round">
                                            <UIcon v-if="isHidePassword" name="i-heroicons-eye-slash"
                                                class="w-6 h-6 text-slate-800" />
                                            <UIcon v-else name="i-heroicons-eye" class="w-6 h-6 text-slate-800" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <span class="flex justify-end mt-1 text-red-600">
                                    Username atau password salah
                                </span>
                            </div>
                        </div>
                        <div class="flex flex-col h-[156px]">
                            <label class="mb-2 font-bold text-slate-800">Captcha</label>
                            <div
                                class="relative flex justify-evenly items-center gap-2 border-slate-600 p-2 border rounded-xl h-24">
                                <div class="flex justify-center items-center px-4 py-2 rounded-xl w-1/3 h-full">
                                    <span>Text 123</span>
                                </div>
                                <!-- <button class="flex justify-center items-center border rounded-xl w-10 h-10">
                                    <UIcon name="i-heroicons-arrow-path-16-solid" ref="icon" class="w-6 h-6 text-slate-600 transition duration-500" />
                                </button> -->
                                <input type="text"
                                    class="border-slate-600 pr-12 pl-4 border rounded-xl w-1/2 h-12 font-medium focus:outline-slate-600 focus:outline-offset-1 cursor-pointer"
                                    placeholder="Captcha">
                            </div>
                            <div class="">
                                <span class="flex justify-end mt-1 text-red-600">
                                    Captcha salah
                                </span>
                            </div>
                        </div>
                        <button type="submit"
                            class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 mt-5 px-4 py-2 rounded-xl w-full h-14 focus:outline-none font-medium text-slate-50 text-xl focus:ring focus:ring-slate-300">Login</button>
                    </form>
                </div>
            </div>
            <div class="flex justify-center items-end p-2">
                <div class="h-fit font-bold text-slate-600">
                    Copyright 2024
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useTokenStore } from '/stores/token';
import { useLogin } from '/composables/useLogin';

// toggle password
const isHidePassword = ref(true);

// store login form
const user = ref({
    username: '',
    password: ''
});

async function handleLogin() {
    // check credentials
    useLogin(user);
}

definePageMeta({
    layout: 'login',
});
</script>