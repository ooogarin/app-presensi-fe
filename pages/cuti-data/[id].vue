<template>
    <div class="flex flex-col space-y-4 px-8 pt-4 pb-12 w-full overflow-y-auto">
        <!-- title page -->
        <div class="p-4 w-full">
            <h1 class="mb-2 font-bold text-3xl">Detail Data Cuti</h1>
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
                        <UIcon name="i-heroicons-folder" class="w-6 h-6 text-blue-600" />
                        <span class="font-bold text-xl">Informasi Data Cuti</span>
                    </div>
                </div>
                <!-- body -->
                <div class="gap-2 gap-y-8 grid grid-cols-4 px-8 py-2 text-lg">
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Nama Personel</span>
                        <span class="text-slate-800">Ilham Garin Nugroho</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Role</span>
                        <span class="text-slate-800">Mobile Developer</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Total Cuti Tahunan</span>
                        <span class="text-slate-800">7 Hari</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Sisa Cuti Tahunan</span>
                        <span class="text-slate-800">13 Hari</span>
                    </div>
                </div>
            </div>

            <!-- data kpi -->
            <div class="flex flex-col space-y-6 bg-white shadow p-8 rounded-xl w-full">
                <div class="flex justify-between">
                    <div class="flex items-center gap-2">
                        <UIcon name="i-heroicons-folder" class="w-6 h-6 text-blue-600" />      
                        <span class="font-bold text-xl">Riwayat Pengajuan Cuti</span>    
                    </div>
                    <ButtonBase label="Export" icon="i-flowbite-printer-outline" />
                </div>
                <div class="flex border-2 rounded-xl w-full overflow-hidden">
                    <table class="border-collapse w-full">
                        <tr class="bg-slate-100 border-b">
                            <th class="px-2 py-4 border-r w-14 text-slate-800">No.</th>
                            <th class="px-2 py-4 border-r text-slate-800">Pengajuan</th>
                            <th class="px-2 py-4 border-r text-slate-800">Jenis Cuti</th>
                            <th class="px-2 py-4 border-r text-slate-800">Periode Cuti</th>
                            <th class="px-2 py-4 border-r text-slate-800">Lama Cuti</th>
                            <th class="px-2 py-4 border-r text-slate-800">Status</th>
                        </tr>
                        <tr v-for="(item, index) in dataTable" class="odd:bg-slate-100 even:bg-white border-b">
                            <td class="px-2 py-4 border-r font-medium text-center text-slate-800">{{index + 1}}.</td>
                            <td class="px-2 py-4 border-r font-medium text-slate-800">{{item.tanggal_pengajuan}}</td>
                            <td class="px-2 py-4 border-r font-medium text-slate-800">{{item.jenis_cuti}}</td>
                            <td class="px-2 py-4 border-r font-medium text-slate-800">{{item.periode_cuti}}</td>
                            <td class="px-2 py-4 border-r font-medium text-slate-800">{{item.lama_cuti}}</td>
                            <td class="px-2 py-4 border-r font-medium text-slate-800">{{item.status}}</td>
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
            label: 'Data Cuti',
            to: '/cuti-data',
            icon: 'i-heroicons-folder',
            labelClass: 'text-slate-600 text-base font-semibold',
            iconClass: 'text-slate-600'
        },
        {
            label: 'Detail Data Cuti',
            labelClass: 'text-blue-600 text-base font-semibold',
            iconClass: 'text-blue-600'
        },
    ];

    // data table
    const dataTable = [
        {
            tanggal_pengajuan: "13 Maret 2024",
            jenis_cuti: "Cuti Liburan",
            periode_cuti: "13, 14, 15 Juni",
            lama_cuti: "3 Hari",
            status: "Disetujui"
        },
        {
            tanggal_pengajuan: "14 Maret 2024",
            jenis_cuti: "Cuti Liburan",
            periode_cuti: "13, 14, 15 Juni",
            lama_cuti: "3 Hari",
            status: "Ditolak"
        },
        {
            tanggal_pengajuan: "15 Maret 2024",
            jenis_cuti: "Cuti Liburan",
            periode_cuti: "13, 14, 15 Juni",
            lama_cuti: "3 Hari",
            status: "Menunggu Persetujuan"
        },
        {
            tanggal_pengajuan: "16 Maret 2024",
            jenis_cuti: "Cuti Liburan",
            periode_cuti: "13, 14, 15 Juni",
            lama_cuti: "3 Hari",
            status: "Disetujui"
        },
        {
            tanggal_pengajuan: "17 Maret 2024",
            jenis_cuti: "Cuti Liburan",
            periode_cuti: "13, 14, 15 Juni",
            lama_cuti: "3 Hari",
            status: "Disetujui"
        },
        {
            tanggal_pengajuan: "18 Maret 2024",
            jenis_cuti: "Cuti Liburan",
            periode_cuti: "13, 14, 15 Juni",
            lama_cuti: "3 Hari",
            status: "Disetujui"
        },
        {
            tanggal_pengajuan: "19 Maret 2024",
            jenis_cuti: "Cuti Liburan",
            periode_cuti: "13, 14, 15 Juni",
            lama_cuti: "3 Hari",
            status: "Disetujui"
        },
        {
            tanggal_pengajuan: "20 Maret 2024",
            jenis_cuti: "Cuti Liburan",
            periode_cuti: "13, 14, 15 Juni",
            lama_cuti: "3 Hari",
            status: "Disetujui"
        },
        {
            tanggal_pengajuan: "21 Maret 2024",
            jenis_cuti: "Cuti Liburan",
            periode_cuti: "13, 14, 15 Juni",
            lama_cuti: "3 Hari",
            status: "Disetujui"
        },
        {
            tanggal_pengajuan: "22 Maret 2024",
            jenis_cuti: "Cuti Liburan",
            periode_cuti: "13, 14, 15 Juni",
            lama_cuti: "3 Hari",
            status: "Disetujui"
        }
    ];
</script>