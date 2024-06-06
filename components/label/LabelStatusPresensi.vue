<template>
    <div>
        <span v-if="status === 'early'" class="bg-blue-200 px-4 py-1 rounded-lg w-fit font-semibold text-blue-800">Lebih Awal</span>
        <span v-else-if="status === 'ontime'" class="bg-green-200 px-4 py-1 rounded-lg w-fit font-semibold text-green-800">Tepat Waktu</span>
        <span v-else-if="status === 'late'" class="bg-red-200 px-4 py-1 rounded-lg w-fit font-semibold text-red-800">Terlambat</span>
        <span v-else class="bg-orange-200 px-4 py-1 rounded-lg w-fit font-semibold text-orange-800">Belum Presensi</span>
    </div>
</template>

<script setup>
    defineProps(['status']);
</script>