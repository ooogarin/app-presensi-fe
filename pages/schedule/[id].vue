<template>
    <div class="flex flex-col space-y-4 px-8 pt-4 pb-12 w-full overflow-y-auto">
        <!-- title page -->
        <div class="p-4 w-full">
            <h1 class="mb-2 font-bold text-3xl">Detail Jadwal</h1>
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
            <div class="flex flex-col gap-6 bg-white shadow p-6 rounded-xl w-full">
                <!-- header -->
                <div class="flex justify-between items-center">  
                    <div class="flex items-center gap-2">
                        <UIcon name="i-heroicons-calendar" class="w-6 h-6 text-blue-600" />
                        <span class="font-semibold text-xl">Informasi Jadwal</span>
                    </div>
                    <div class="flex gap-4">
                        <ButtonBase label="Hapus Jadwal" icon="i-heroicons-trash" />
                        <ButtonBase label="Edit Jadwal" icon="i-heroicons-pencil-square" mode="solid" />
                    </div>
                </div>
                <!-- body -->
                <div class="gap-2 gap-y-8 border-y grid grid-cols-4 p-8 text-lg">
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Personel</span>
                        <span class="text-slate-800">Ilham Garin Nugroho</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Tanggal Jadwal</span>
                        <span class="font-semibold text-slate-800">17 Agustus 1945</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Divisi</span>
                        <span class="font-semibold text-slate-800">WMS (Warehouse Management System)</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Shifting</span>
                        <span class="font-semibold text-slate-800">S1 (21.00 - 03.00) - Normal</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Lokasi</span>
                        <span class="font-semibold text-slate-800">Aktif</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Foto Selfie</span>
                        <span class="font-semibold text-slate-800">Aktif</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Scan QR Code</span>
                        <span class="font-semibold text-slate-800">Nonaktif</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Status Jadwal</span>
                        <span class="font-semibold text-slate-800">Aktif</span>
                    </div>
                </div>
            </div>

            <!-- detail waktu dan tanggal -->
            <div class="flex flex-col gap-6 bg-white shadow p-6 rounded-xl w-full">
                <!-- header -->
                <div class="flex justify-between items-center">  
                    <div class="flex items-center gap-2">
                        <UIcon name="i-flowbite-file-lines-outline" class="w-6 h-6 text-blue-600" />
                        <span class="font-semibold text-xl">Detail Tanggal dan Waktu Jadwal</span>
                    </div>
                </div>
                <!-- body -->
                <div class="flex flex-col">
                    <!-- body 1: mulai -->
                    <div class="gap-2 gap-y-8 border-y grid grid-cols-5 px-8 py-4 text-lg">
                        <div class="flex flex-col gap-2 font-medium">
                            <span class="text-slate-600">Jadwal Mulai</span>
                            <div class="flex flex-col font-semibold text-slate-800">
                                <div class="flex justify-start items-center gap-2">
                                    <UIcon name="i-flowbite-clock-outline" class="text-green-600"/>
                                    <span>21.00 WIB</span>
                                </div>
                                <span>17 Agustus 2024</span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2 font-medium">
                            <span class="text-slate-600">Max Before Start</span>
                            <span class="font-semibold text-slate-800">60 Menit</span>
                        </div>
                        <div class="flex flex-col gap-2 font-medium">
                            <span class="text-slate-600">Tolerance Before Start</span>
                            <span class="font-semibold text-slate-800">20 Menit</span>
                        </div>
                        <div class="flex flex-col gap-2 font-medium">
                            <span class="text-slate-600">Max After Start</span>
                            <span class="font-semibold text-slate-800">60 Menit</span>
                        </div>
                        <div class="flex flex-col gap-2 font-medium">
                            <span class="text-slate-600">Tolerance After Start</span>
                            <span class="font-semibold text-slate-800">20 Menit</span>
                        </div>
                    </div>
                    <!-- body 2: Selesai -->
                    <div class="gap-2 gap-y-8 grid grid-cols-5 px-8 py-4 border-b text-lg">
                        <div class="flex flex-col gap-2 font-medium">
                            <span class="text-slate-600">Jadwal Selesai</span>
                            <div class="flex flex-col font-semibold text-slate-800">
                                <div class="flex justify-start items-center gap-2">
                                    <UIcon name="i-flowbite-clock-outline" class="text-green-600"/>
                                    <span>03.00 WIB</span>
                                </div>
                                <span>18 Agustus 2024</span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2 font-medium">
                            <span class="text-slate-600">Max Before End</span>
                            <span class="font-semibold text-slate-800">60 Menit</span>
                        </div>
                        <div class="flex flex-col gap-2 font-medium">
                            <span class="text-slate-600">Tolerance Before End</span>
                            <span class="font-semibold text-slate-800">20 Menit</span>
                        </div>
                        <div class="flex flex-col gap-2 font-medium">
                            <span class="text-slate-600">Max After End</span>
                            <span class="font-semibold text-slate-800">60 Menit</span>
                        </div>
                        <div class="flex flex-col gap-2 font-medium">
                            <span class="text-slate-600">Tolerance After End</span>
                            <span class="font-semibold text-slate-800">20 Menit</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    // link breadcrumb
    const linkBreadcrumb = [
        {
            label: 'Jadwal',
            to: '/schedule',
            icon: 'i-heroicons-calendar',
            labelClass: 'text-slate-600 text-base font-semibold',
            iconClass: 'text-slate-600'
        },
        {
            label: 'Detail Jadwal',
            labelClass: 'text-blue-600 text-base font-semibold',
            iconClass: 'text-blue-600'
        },
    ];
</script>