<template>
    <UPagination v-model="page" :page-count="10" :total="items" />
</template>

<script setup>
    defineProps(['items']);
    const page = defineModel();
</script>