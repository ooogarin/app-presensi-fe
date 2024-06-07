<template>
    <div class="flex flex-col space-y-4 px-8 pt-4 pb-12 w-full overflow-y-auto">
        <!-- title page -->
        <div class="p-4 w-full">
            <h1 class="mb-2 font-bold text-3xl">Detail KPI Personel</h1>
            <div class="flex space-x-1">
                <UBreadcrumb :links="linkBreadcrumb">
                    <template #default="{ link, isActive, index }">
                        <span :class="isActive ? 'text-medium text-blue-600' : 'text-normal'">
                            {{ link.label }}
                        </span>
                    </template>
                </UBreadcrumb>
            </div>
        </div>

        <!-- body -->
        <div class="flex flex-col gap-8 w-full">
            <!-- informasi -->
            <div class="flex flex-col gap-4 bg-white shadow p-6 rounded-xl w-full">
                <!-- header -->
                <div class="flex justify-between items-center">  
                    <div class="flex items-center gap-2">
                        <UIcon name="i-heroicons-calendar" class="w-6 h-6 text-blue-600" />
                        <span class="font-bold text-xl">Informasi KPI Personel</span>
                    </div>
                </div>
                <!-- body -->
                <div class="gap-2 gap-y-8 grid grid-cols-5 px-8 py-2 text-lg">
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Divisi</span>
                        <span class="text-slate-800">WMS</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Shift Turn</span>
                        <span class="text-slate-800">Shift 1</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Shift Type</span>
                        <span class="text-slate-800">Overtime</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Waktu Shifting</span>
                        <span class="text-slate-800">21.00 - 03.00</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Status Shifting</span>
                        <span class="text-slate-800">Aktif</span>
                    </div>
                </div>
            </div>

            <!-- data kpi -->
            <div class="flex flex-col space-y-6 bg-white shadow p-8 rounded-xl w-full">
                <div class="flex justify-between">
                    <div class="flex items-center gap-2">
                        <UIcon name="i-heroicons-user" class="w-6 h-6 text-blue-600" />      
                        <span class="font-bold text-xl">Data KPI Personel</span>    
                    </div>
                    <ButtonBase label="Export" icon="i-flowbite-printer-outline" />
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
    </div>
</template>

<script setup>
    // link breadcrumb
    const linkBreadcrumb = [
        {
            label: 'KPI Personel',
            to: '/kpi',
            icon: 'i-heroicons-user',
            labelClass: 'text-slate-600 text-base font-semibold',
            iconClass: 'text-slate-600'
        },
        {
            label: 'Detail Shifting',
            labelClass: 'text-blue-600 text-base font-semibold',
            iconClass: 'text-blue-600'
        },
    ];

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