<template>
    <div>
        <h1>This is products bag.</h1>
        <p>Detail product: bag.</p>
        <ul>
            <li><img src="#" alt="bag image"></li>
            <li>Color: blue</li>
            <li>Model: ransel</li>
            <li>Stock: 10</li>
        </ul>

        <NuxtLink to="/products">back to product dashboard</NuxtLink>
    </div>
</template>

<script setup>
    // set layout
    definePageMeta({
        layout: 'product'
    });
</script>