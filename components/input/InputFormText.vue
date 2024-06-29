<template>
    <div>
        <div class="flex items-center gap-4 px-4 py-2">
            <div class="flex justify-between w-1/4 h-full font-bold text-base">
                <div>{{ dataInfo.info.label }}</div>
                <div>:</div>
            </div>
            <div class="w-3/4 h-full">
                <div class="relative flex items-center">
                    <input type="text" v-model="name" :placeholder="dataInfo.info.placeholder" class="py-1 rounded-xl w-full h-12 cursor-pointer pe-12 ps-4 ring-1 ring-slate-600 focus:outline-slate-600 focus:outline-offset-1">
                    <div class="right-0 absolute flex justify-end items-center bg-white px-3 rounded-xl w-fit h-full pointer-events-none round">
                        <UIcon :name="dataInfo.info.icon" class="w-6 h-6 text-blue-600"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    // set props (parameter to data input component select-option)
    defineProps(['dataInfo']);

    // set value selected
    const name = defineModel();
</script>