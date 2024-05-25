<template>
    <div>
        <h1>This is products book.</h1>
        <p>Dashboard page for product books.</p>

        <NuxtLink to="/products">back to product dashboard</NuxtLink>
    </div>
</template>

<script setup>
    // set layout
    definePageMeta({
        layout: 'product'
    });
</script>