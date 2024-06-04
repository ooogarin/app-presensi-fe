<template>
    <div>
        <label for="" class="mb-2 font-bold text-base">{{ dataSelect.info.label }}</label>
        <div class="flex items-center gap-8 ml-2 h-12">
            <div class="flex gap-2">
                <input v-model="selectedOption" type="checkbox" value="ACT" id="option1" class="w-6 h-6">
                <label for="option1" class="font-medium text-slate-800">{{ dataSelect.options.aktif.label }}</label>
            </div>
            <div class="flex gap-2">
                <input v-model="selectedOption" type="checkbox" value="NACT" id="option2" class="w-6 h-6">
                <label for="option2" class="font-medium text-slate-800">{{ dataSelect.options.nonaktif.label }}</label>
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