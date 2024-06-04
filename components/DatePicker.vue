<script setup lang="ts">
    import { DatePicker as VCalendarDatePicker } from 'v-calendar'
    import type { DatePickerDate, DatePickerRangeObject } from 'v-calendar/dist/types/src/use/datePicker'
    import 'v-calendar/dist/style.css'

    const attrs = {
        transparent: true,
        borderless: true,
        color: 'blue',
        'is-dark': { selector: 'html', darkClass: 'dark' },
        'first-day-of-week': 2,
    }

    // set props (parameter to data input component select-option)
    defineProps(['dataSelect', 'mode']);

    // set value selected
    const selectedDate = defineModel();
</script>

<template>
    <div>
        <label for="" class="mb-2 font-bold text-base">{{ dataSelect.info.label }}</label>
        <div class="relative flex items-center">
            <UPopover :popper="{ placement: 'bottom-start' }" class="py-1 rounded-xl w-full h-12 cursor-pointer pe-12 ps-4 ring-1 ring-slate-600 focus:outline-slate-600 focus:outline-offset-1">
                <template #panel="{ close }">
                    <VCalendarDatePicker v-if="mode == 'single'" v-model="selectedDate" v-bind="{ ...attrs, ...$attrs }" @close="close" />
                    <VCalendarDatePicker v-else v-model.range="selectedDate" v-bind="{ ...attrs, ...$attrs }" @close="close" />
                </template>
                <div class="top-0 left-0 absolute flex justify-between items-center bg-white px-3 rounded-xl w-full h-full round">
                    <span v-if="mode == 'single'" >{{ dataSelect.data.value === "-" ? dataSelect.info.placeholder : dataSelect.data.value }}</span>
                    <span v-else>{{ dataSelect.data.value === "-" ? dataSelect.info.placeholder : dataSelect.data.value }}</span>
                    <svg class="w-6 h-6 stroke-2 stroke-slate-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <svg class="w-6 h-6 stroke-2 stroke-slate-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 2V6" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 2V6" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 10H21" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </svg>
                </div>
            </UPopover>
        </div>
    </div>
</template>

<style>
    :root {
        --vc-gray-50: rgb(var(--color-gray-50));
        --vc-gray-100: rgb(var(--color-gray-100));
        --vc-gray-200: rgb(var(--color-gray-200));
        --vc-gray-300: rgb(var(--color-gray-300));
        --vc-gray-400: rgb(var(--color-gray-400));
        --vc-gray-500: rgb(var(--color-gray-500));
        --vc-gray-600: rgb(var(--color-gray-600));
        --vc-gray-700: rgb(var(--color-gray-700));
        --vc-gray-800: rgb(var(--color-gray-800));
        --vc-gray-900: rgb(var(--color-gray-900));
    }

    .vc-primary {
        --vc-accent-50: rgb(var(--color-primary-50));
        --vc-accent-100: rgb(var(--color-primary-100));
        --vc-accent-200: rgb(var(--color-primary-200));
        --vc-accent-300: rgb(var(--color-primary-300));
        --vc-accent-400: rgb(var(--color-primary-400));
        --vc-accent-500: rgb(var(--color-primary-500));
        --vc-accent-600: rgb(var(--color-primary-600));
        --vc-accent-700: rgb(var(--color-primary-700));
        --vc-accent-800: rgb(var(--color-primary-800));
        --vc-accent-900: rgb(var(--color-primary-900));
    }

    .vc-container .vc-weekday-1, .vc-container .vc-weekday-7 {
        color: rgb(220 38 38);
    }
</style>
