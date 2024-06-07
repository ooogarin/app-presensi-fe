<template>
    <div class="flex flex-col space-y-4 px-8 pt-4 pb-12 w-full overflow-y-auto">
        <!-- title page -->
        <div class="p-4 w-full">
            <h1 class="mb-2 font-bold text-3xl">Detail Shift</h1>
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
                        <span class="font-semibold text-xl">Informasi Shifting</span>
                    </div>
                    <div class="flex gap-4">
                        <ButtonBase label="Hapus Shift" icon="i-heroicons-trash" />
                        <ButtonBase label="Edit Shift" icon="i-heroicons-pencil-square" mode="solid" />
                    </div>
                </div>
                <!-- body -->
                <div class="gap-2 gap-y-8 border-y grid grid-cols-5 p-8 text-lg">
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

            <!-- detail waktu -->
            <div class="flex flex-col gap-4 bg-white shadow p-6 rounded-xl w-full">
                <!-- header -->
                <div class="flex">  
                    <div class="flex items-center gap-2">
                        <UIcon name="i-flowbite-file-lines-outline" class="w-6 h-6 text-blue-600" />
                        <span class="font-semibold text-xl">Detail Waktu Shifting</span>
                    </div>
                </div>
                <!-- body -->
                <div class="flex gap-8 px-4">
                    <!-- body 1: mulai -->
                    <div class="flex flex-col gap-4 p-4 w-1/2 text-lg">
                        <div class="flex justify-between gap-2 w-full">
                            <span class="text-slate-600">Jam Mulai</span>
                            <span>21.00</span>
                        </div>
                        <div class="flex justify-between gap-2 w-full">
                            <span class="text-slate-600">Batas Maksimal Sebelum Jam Mulai</span>
                            <span class="font-semibold text-slate-800">60 Menit</span>
                        </div>
                        <div class="flex justify-between gap-2 w-full">
                            <span class="text-slate-600">Toleransi Sebelum Jam Mulai</span>
                            <span class="font-semibold text-slate-800">20 Menit</span>
                        </div>
                        <div class="flex justify-between gap-2 w-full">
                            <span class="text-slate-600">Batas Maksimal Setelah Jam Mulai</span>
                            <span class="font-semibold text-slate-800">60 Menit</span>
                        </div>
                        <div class="flex justify-between gap-2 w-full">
                            <span class="text-slate-600">Toleransi Setelah Jam Mulai</span>
                            <span class="font-semibold text-slate-800">20 Menit</span>
                        </div>
                    </div>
                    <!-- body 2: mulai -->
                    <div class="flex flex-col gap-4 p-4 w-1/2 text-lg">
                        <div class="flex justify-between gap-2 w-full">
                            <span class="text-slate-600">Jam Selesai</span>
                            <span>03.00</span>
                        </div>
                        <div class="flex justify-between gap-2 w-full">
                            <span class="text-slate-600">Batas Maksimal Sebelum Jam Selesai</span>
                            <span class="font-semibold text-slate-800">60 Menit</span>
                        </div>
                        <div class="flex justify-between gap-2 w-full">
                            <span class="text-slate-600">Toleransi Sebelum Jam Selesai</span>
                            <span class="font-semibold text-slate-800">20 Menit</span>
                        </div>
                        <div class="flex justify-between gap-2 w-full">
                            <span class="text-slate-600">Batas Maksimal Setelah Jam Selesai</span>
                            <span class="font-semibold text-slate-800">60 Menit</span>
                        </div>
                        <div class="flex justify-between gap-2 w-full">
                            <span class="text-slate-600">Toleransi Setelah Jam Selesai</span>
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
            label: 'Shifting',
            to: '/shifting',
            icon: 'i-heroicons-clock',
            labelClass: 'text-slate-600 text-base font-semibold',
            iconClass: 'text-slate-600'
        },
        {
            label: 'Detail Shifting',
            labelClass: 'text-blue-600 text-base font-semibold',
            iconClass: 'text-blue-600'
        },
    ];
</script>