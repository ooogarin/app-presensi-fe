<template>
    <div class="flex flex-col space-y-4 px-8 py-4 w-full overflow-y-auto">
        <!-- <h1>This is content</h1> -->
        <!-- <ButtonBase label="Button" mode="solid"/> -->

        <div class="flex flex-col gap-8 bg-white shadow p-6 rounded-xl w-full">
            <NuxtLink class="w-fit">
                <ButtonBase @click="handleLogout" label="Logout" />
            </NuxtLink>

            <h1 class="p-4 border w-96 overflow-auto">Token: {{ user ? user.token : "no token" }}</h1>
        </div>

        <!-- product -->
        <div class="flex flex-col gap-8 bg-white shadow p-6 rounded-xl w-full">
            <div class="flex justify-between">
                <h1 class="font-bold text-lg">Product</h1>
                <div class="flex gap-4">
                    <!-- <input type="text" class="px-4 py-2 border rounded" placeholder="Cari data..."> -->
                    <ButtonBase @click="sortingDataAsc" label="Sort Asc"/>
                    <ButtonBase @click="sortingDataDesc" label="Sort Desc"/>
                </div>
            </div>

            <div v-if="pending.value" class="m-auto font-semibold text-lg">Loading...</div>
            <div v-else class="gap-8 grid grid-cols-4">
                <div v-for="product in products.value" class="flex flex-col gap-2 bg-white shadow p-6 border rounded-md">
                    <div class="h-40">
                        <img :src="product.image" alt="Gambar Produk" class="m-auto h-40">
                    </div>
                    <p class="font-semibold">{{ product.title }}</p>
                    <p class="font-semibold text-xl">${{ product.price }}</p>
                    <p class="h-20 text-base truncate">{{ product.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
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
    navigateTo('/login');
    console.log('+logout :>> ', tokenStore.dataUser);
}

const products = ref();
const pending = ref();
// const { data: dataProducts, pending: dataPending } = useFetch('https://fakestoreapi.com/products', {
//     lazy: true
// });
// products.value = dataProducts;
// pending.value = dataPending;
// console.log('main :>> ');


const sortingDataAsc = () => {
    const { data: dataByFilter, pending: dataByFilterPending } = useFetch('https://fakestoreapi.com/products');
    products.value = dataByFilter;
    pending.value = dataByFilterPending;

    console.log("sorting ascending");
}

const sortingDataDesc = () => {
    const { data: dataByFilter, pending: dataByFilterPending } = useFetch('https://fakestoreapi.com/products?sort=desc');
    products.value = dataByFilter;
    pending.value = dataByFilterPending;

    console.log("sorting descending");
}

// load when open this page
sortingDataAsc();


</script>