<template>
    <div>
        <label for="" class="mb-2 font-bold text-base">{{ dataSelect.info.label }} (Selected: {{ selectedOption }})</label>
        <div class="relative flex items-center">
            <select v-model="selectedOption" name="" id="" class="py-1 rounded-xl w-full h-12 cursor-pointer pe-12 ps-4 ring-1 ring-slate-600 focus:outline-slate-600 focus:outline-offset-1">
                <option value="0" selected disabled>{{ dataSelect.info.placeholder }}</option>
                <option v-for="option in dataSelect.options" :value="option.value">{{ option.label }}</option>
            </select>
            <div class="right-0 absolute flex justify-end items-center bg-white px-3 rounded-xl w-fit h-full pointer-events-none round">
                <svg class="w-6 h-6 stroke-2 stroke-slate-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
    // set props (parameter to data input component select-option)
    defineProps(['dataSelect']);

    // set value selected
    const selectedOption = defineModel();
</script>