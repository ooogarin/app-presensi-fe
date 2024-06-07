<template>
  <div class="flex flex-col space-y-4 px-8 py-4 w-full overflow-y-auto">
    <!-- title page -->
    <div class="p-4 w-full">
        <h1 class="mb-2 font-bold text-3xl">Data Level Personel</h1>
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

    <!-- data -->
    <div class="flex flex-col space-y-6 bg-white shadow p-8 rounded-xl w-full">
        <div class="flex justify-between">
            <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-shield-check" class="w-6 h-6 text-blue-600" />
                <span class="font-bold text-xl">Data Level Personel</span>    
            </div>
            <div class="flex gap-4">
                <ButtonBase label="Test" icon="i-flowbite-circle-plus-outline" />
                <ButtonBase label="Tambah Data" icon="i-flowbite-circle-plus-outline" />
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
                        <button class="bg-slate-50 hover:bg-slate-100 focus:outline-none focus:ring focus:ring-green-300 justify-center active:bg-blue-100 border rounded-full">
                            <div class="flex justify-center items-center w-10 h-10">
                                <svg class="w-6 h-6 stroke-2 stroke-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14 2V8H20" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 13H8" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 17H8" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10 9H9H8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                        
                            </div>
                        </button>
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
    // link breadcrumb
    const linkBreadcrumb = [
        {
            label: 'Data Level Personel',
            icon: 'i-heroicons-shield-check',
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
    ];
</script>