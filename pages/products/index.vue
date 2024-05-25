<template>
    <div>
        <h1>This is products page.</h1>
        <p>In here you can view about our products.</p>
        <ul>
            <li><NuxtLink to="/products/shoes">Shoes</NuxtLink></li>
            <li><NuxtLink to="/products/bag">Bag</NuxtLink></li>
            <li><NuxtLink to="/products/books">Books</NuxtLink></li>
        </ul>
    </div>
</template>

<script setup>
    // set layout
    definePageMeta({
        layout: 'product'
    });
</script>