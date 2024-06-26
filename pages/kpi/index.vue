<template>
    <div class="flex flex-col space-y-4 px-8 py-4 w-full overflow-y-auto">
        <!-- title page -->
        <div class="p-4 w-full">
            <h1 class="mb-2 font-bold text-3xl">KPI Personel</h1>
            <div class="flex space-x-1">
                <UBreadcrumb :links="linkBreadcrumb">
                    <template #default="{ link, isActive, index }">
                        <span :class="isActive ? 'text-medium' : 'text-normal'" class="text-blue-600">
                            {{link.label}}
                        </span>
                    </template>
                </UBreadcrumb>
            </div>
        </div>

        <!-- filter -->
        <div class="flex flex-col bg-white shadow p-6 rounded-xl w-full">
            <!-- header -->
            <div class="flex justify-between items-center">  
                <div class="flex items-center gap-2">
                    <UIcon name="i-flowbite-filter-outline" class="w-6 h-6 text-blue-600"/>
                    <span class="font-bold text-xl">Filter KPI Personel</span>
                </div>
                <button @click="isFilterWrap = !isFilterWrap" class="flex justify-center items-center border-2 bg-slate-50 hover:bg-slate-100 border-blue-600 w-12 font-medium transition duration-500 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-100 rounded-full h-12 text-blue-600">
                    <IconsChevronDown :class="{'rotate-180': !isFilterWrap}" class="h-8 text-slate-600 transition duration-500 stroke-2 stroke-blue-600"/>
                </button>
            </div>

            <!-- show/hide filter -->
            <div :class="isFilterWrap ? 'h-0' : 'h-[284px]'" class="transition-all duration-500 overflow-hidden">
                <!-- list filter -->
                <div class="gap-6 grid grid-cols-12 p-6 w-full">
                    <InputDatePicker v-model="selectedDate" :dataSelect="dataSelectDate" :mode="modeDatepicker" class="flex flex-col col-span-6 w-full" />
                    <InputSelect v-model="selectedRole" :dataSelect="dataSelectRole" class="flex flex-col col-span-6 w-full" />
                    <InputSelect v-model="selectedAccount" :dataSelect="dataSelectAccount" class="flex flex-col col-span-12 w-full" />
                </div>

                <!-- button submit -->
                <div class="flex justify-end space-x-6 mb-1 px-8">
                    <button class="border-2 bg-slate-50 hover:bg-slate-100 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-100 px-4 py-2 border-blue-600 rounded-xl w-32 h-12 font-medium text-blue-600">Reset</button>
                    <button class="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800 px-4 py-2 rounded-xl w-32 h-12 font-medium text-slate-50">Submit</button>
                </div>
            </div>
        </div>

        <!-- data -->
        <div class="flex flex-col space-y-6 bg-white shadow p-6 rounded-xl w-full">
            <div class="flex justify-between">
                <div class="flex items-center gap-2">
                    <UIcon name="i-heroicons-pencil-square" class="w-6 h-6 text-blue-600" />
                    <span class="font-bold text-xl">Data KPI Personel</span>    
                </div>
                <div class="flex gap-4">
                    <ButtonBase label="Export" icon="i-flowbite-printer-outline" />
                </div>
            </div>
            <div class="flex border-2 rounded-xl w-full overflow-hidden">
                <table class="border-collapse w-full">
                    <tr class="bg-slate-100 border-b">
                        <th class="px-2 py-4 border-r w-14 text-slate-800">No.</th>
                        <th class="px-2 py-4 border-r text-slate-800">Nama</th>
                        <th class="px-2 py-4 border-r text-slate-800">Tanggal Presensi</th>
                        <th class="px-2 py-4 border-r text-slate-800">Shifting</th>
                        <th class="px-2 py-4 border-r text-slate-800">Jam Mulai</th>
                        <th class="px-2 py-4 border-r text-slate-800">Jam Selesai</th>
                        <th class="px-2 py-4 w-28 text-slate-800">Aksi</th>
                    </tr>
                    <tr v-for="(item, index) in dataTable" class="odd:bg-slate-100 even:bg-white border-b">
                        <td class="px-2 py-4 border-r font-medium text-center text-slate-800">{{index + 1}}.</td>
                        <td class="px-2 py-4 border-r font-medium text-slate-800">{{item.nama}}</td>
                        <td class="px-2 py-4 border-r font-medium text-slate-800">{{item.tanggal}}</td>
                        <td class="px-2 py-4 border-r font-medium text-slate-800">{{item.shift}}</td>
                        <td class="px-2 py-4 border-r font-medium text-slate-800">{{item.start}}</td>
                        <td class="px-2 py-4 border-r font-medium text-slate-800">{{item.end}}</td>
                        <td class="px-2 font-medium text-center text-slate-800">
                            <div class="flex flex-row gap-2">
                                <NuxtLink :to="`/kpi/${index + 1}`" class="flex justify-center items-center bg-slate-50 hover:bg-slate-100 m-auto border rounded-full w-10 h-10">
                                    <UIcon name="i-heroicons-document-magnifying-glass" class="w-6 h-6 text-green-600" />
                                </NuxtLink>
                                <NuxtLink :to="`/kpi/${index + 1}`" class="flex justify-center items-center bg-slate-50 hover:bg-slate-100 m-auto border rounded-full w-10 h-10">
                                    <UIcon name="i-heroicons-pencil-square" class="w-6 h-6 text-yellow-600" />
                                </NuxtLink>
                                <NuxtLink :to="`/kpi/${index + 1}`" class="flex justify-center items-center bg-slate-50 hover:bg-slate-100 m-auto border rounded-full w-10 h-10">
                                    <UIcon name="i-heroicons-trash" class="w-6 h-6 text-red-600" />
                                </NuxtLink>
                            </div>
                        </td>
                    </tr>
                    <tr class="bg-white h-20">
                        <td class="px-2 py-4" colspan="7">
                            <div class="flex flex-row justify-between px-4 w-full">
                                <div>
                                    Menampilkan <span>{{dataTable.length}}</span> data dari <span>{{100}}</span> data
                                </div>
                                <div class="flex flex-row -space-x-px shadow rounded-md">
                                    <a href="" class="flex justify-center items-center border-slate-300 bg-white hover:bg-slate-100 border rounded-l-md w-8 h-8">
                                        <svg class="w-6 h-6 stroke-2 stroke-slate-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 18L9 12L15 6" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg> 
                                    </a>
                                    <a href="" class="flex justify-center items-center border-slate-300 bg-white hover:bg-slate-100 border w-8 h-8 text-slate-600">
                                        <span>1</span>
                                    </a>
                                    <a href="" class="flex justify-center items-center border-slate-300 bg-white hover:bg-slate-100 border w-8 h-8 text-slate-600">
                                        <span>2</span>
                                    </a>
                                    <a href="" class="flex justify-center items-center border-slate-300 bg-blue-600 border w-8 h-8 text-white">
                                        <span>3</span>
                                    </a>
                                    <a href="" class="flex justify-center items-center border-slate-300 bg-white hover:bg-slate-100 border w-8 h-8 text-slate-600">
                                        <span>4</span>
                                    </a>
                                    <a href="" class="flex justify-center items-center border-slate-300 bg-white hover:bg-slate-100 border w-8 h-8 text-slate-600">
                                        <span>5</span>
                                    </a>
                                    <a href="" class="flex justify-center items-center border-slate-300 bg-white hover:bg-slate-100 border rounded-r-md w-8 h-8">
                                        <svg class="w-6 h-6 stroke-2 stroke-slate-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 18L15 12L9 6" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
    import dayjs from 'dayjs';

    // toggle filter
    const isFilterWrap = ref(true);

    // link breadcrumb
    const linkBreadcrumb = [
        {
            label: 'KPI Personel',
            icon: 'i-heroicons-user',
            labelClass: 'text-blue-600 text-base font-semibold',
            iconClass: 'text-blue-600'
        },
    ];

    // 1. data select: date (datepicker)
    const modeDatepicker = 'range'; // single | range
    const selectedDate = ref((modeDatepicker == 'single')
        ? '-'
        : { start: '', end: '' }
    );
    const dataSelectDate = {
        info: {
            label: "Pilih Periode KPI",
            placeholder: "Pilih Periode KPI"
        },
        data: (modeDatepicker == 'single')
            ? computed(() => selectedDate.value === "-" || selectedDate.value === null ? "-" : dayjs(selectedDate.value).format('DD-MM-YYYY'))
            : computed(() => selectedDate.value.start === "" || selectedDate.value.start === null ? "-" : (`${dayjs(selectedDate.value.start).format('DD-MM-YYYY')} - ${dayjs(selectedDate.value.end).format('DD-MM-YYYY')}`))
    }
    // 2. data select: role
    const selectedRole = ref('-');
    const dataSelectRole = {
        info: {
            label: "Role",
            placeholder: "Pilih Semua Role"
        },
        options: [
            {
                value: 1,
                label: "Role 1"
            },
            {
                value: 2,
                label: "Role 2"
            },
            {
                value: 3,
                label: "Role 3"
            },
            {
                value: 4,
                label: "Role 4"
            },
            {
                value: 5,
                label: "Role 5"
            },
        ]
    };
    // 3. data select: account (personel)
    const selectedAccount = ref('-');
    const dataSelectAccount = {
        info: {
            label: "Personel",
            placeholder: "Pilih Semua Personel"
        },
        options: [
            {
                value: 1,
                label: "Personel 1"
            },
            {
                value: 2,
                label: "Personel 2"
            },
            {
                value: 3,
                label: "Personel 3"
            },
            {
                value: 4,
                label: "Personel 4"
            },
            {
                value: 5,
                label: "Personel 5"
            },
            {
                value: 6,
                label: "Personel 6"
            },
            {
                value: 7,
                label: "Personel 7"
            },
        ]
    };

    // data table
    const dataTable = [
        {
            "nama": "Ilham Garin Nugroho",
            "tanggal": "13 Maret 2024",
            "shift": "DMS - S1 (08:00 - 16:00) - NRM",
            "start": "08:15:00",
            "end": "16:00:00"
        },
        {
            "nama": "Alya Nadhira",
            "tanggal": "14 Maret 2024",
            "shift": "DMS - S2 (09:00 - 17:00) - NRM",
            "start": "09:00:00",
            "end": "17:00:00"
        },
        {
            "nama": "Raka Pratama",
            "tanggal": "15 Maret 2024",
            "shift": "DMS - S3 (10:00 - 18:00) - NRM",
            "start": "10:15:00",
            "end": "18:00:00"
        },
        {
            "nama": "Dina Maharani",
            "tanggal": "16 Maret 2024",
            "shift": "DMS - S1 (08:00 - 16:00) - NRM",
            "start": "08:00:00",
            "end": "16:00:00"
        },
        {
            "nama": "Budi Santoso",
            "tanggal": "17 Maret 2024",
            "shift": "DMS - S2 (09:00 - 17:00) - NRM",
            "start": "09:30:00",
            "end": "17:00:00"
        },
        {
            "nama": "Citra Lestari",
            "tanggal": "18 Maret 2024",
            "shift": "DMS - S3 (10:00 - 18:00) - NRM",
            "start": "10:00:00",
            "end": "18:00:00"
        },
        {
            "nama": "Fajar Nugraha",
            "tanggal": "19 Maret 2024",
            "shift": "DMS - S1 (08:00 - 16:00) - NRM",
            "start": "08:10:00",
            "end": "16:00:00"
        },
        {
            "nama": "Gina Safitri",
            "tanggal": "20 Maret 2024",
            "shift": "DMS - S2 (09:00 - 17:00) - NRM",
            "start": "09:45:00",
            "end": "17:00:00"
        },
        {
            "nama": "Hendra Setiawan",
            "tanggal": "21 Maret 2024",
            "shift": "DMS - S3 (10:00 - 18:00) - NRM",
            "start": "10:05:00",
            "end": "18:00:00"
        },
        {
            "nama": "Indah Permatasari",
            "tanggal": "22 Maret 2024",
            "shift": "DMS - S1 (08:00 - 16:00) - NRM",
            "start": "08:20:00",
            "end": "16:00:00"
        }
    ];
</script>