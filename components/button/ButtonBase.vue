<template>
    <div>
        <button :class="mode == 'solid' ? 'bg-blue-600 text-white' : 'active:bg-blue-100 text-blue-600 bg-slate-50 hover:bg-slate-100'" class="flex justify-center items-center space-x-2 border-2 border-blue-600 focus:outline-none focus:ring focus:ring-blue-300 px-4 py-2 rounded-xl h-full font-medium">
            <UIcon v-if="icon" :name="icon" :class="mode == 'solid' ? 'text-white' : 'text-blue-600'" class="w-6 h-6" />
            <span>{{ label }}</span>
        </button>
    </div>
</template>

<script setup>
    defineProps(['label', 'icon', 'mode']);
</script>