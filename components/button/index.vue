<template>
    <div>
        <button class="flex justify-center items-center space-x-2 border-2 bg-slate-50 hover:bg-slate-100 border-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-100 px-4 py-2 rounded-xl h-full font-medium text-blue-600">
            <UIcon :name="icon" class="w-6 h-6 text-blue-600" />
            <span>{{ label }}</span>
        </button>
    </div>
</template>

<script setup>
    defineProps(['label', 'icon']);
</script>