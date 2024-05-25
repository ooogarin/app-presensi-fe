<template>
    <div>
        <h1>This is products shoes.</h1>
        <p>Detail product: shoes.</p>
        <ul>
            <li><img src="#" alt="shoes image"></li>
            <li>Color: red</li>
            <li>Size: 10</li>
            <li>Stock: 20</li>
        </ul>

        <NuxtLink to="/products">back to product dashboard</NuxtLink>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'product'
    });
</script>