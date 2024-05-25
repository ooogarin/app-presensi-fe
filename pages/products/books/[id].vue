<template>
    <div>
        <h1>This is detail book.</h1>
        <p>Detail book: {{ id }}.</p>
        
        <NuxtLink to="/products/books">back to product book</NuxtLink>
        <br>
        <NuxtLink to="/products">back to product dashboard</NuxtLink>
    </div>
</template>


<script setup>
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const { id } = route.params;

    // set layout
    definePageMeta({
        layout: 'product'
    });
</script>