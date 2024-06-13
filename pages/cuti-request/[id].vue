<template>
    <div class="flex flex-col space-y-4 px-8 pt-4 pb-12 w-full overflow-y-auto">
        <!-- title page -->
        <div class="p-4 w-full">
            <h1 class="mb-2 font-bold text-3xl">Detail Pengajuan Cuti</h1>
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
                        <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-blue-600" />
                        <span class="font-semibold text-xl">Detail Pengajuan Cuti</span>
                    </div>
                </div>
                <!-- body -->
                <div class="gap-2 gap-y-8 border-y grid grid-cols-4 p-8 text-lg">
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Personel</span>
                        <span class="text-slate-800">Ilham Garin Nugroho</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Role</span>
                        <span class="font-semibold text-slate-800">Mobile Developer</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Pengajuan Cuti</span>
                        <span class="font-semibold text-slate-800">17 Agustus 1945</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Jenis Cuti</span>
                        <span class="font-semibold text-slate-800">Cuti Tahunan</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Periode Cuti</span>
                        <span class="font-semibold text-slate-800">10, 11, 12 Agustus 2024</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Lama Cuti</span>
                        <span class="font-semibold text-slate-800">3 Hari</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Sisa Cuti</span>
                        <span class="font-semibold text-slate-800">7 Hari</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Status</span>
                        <span class="font-semibold text-slate-800">Menunggu Konfirmasi</span>
                    </div>
                    <div class="flex flex-col gap-2 col-span-4 font-medium">
                        <span class="text-slate-600">Keterangan Cuti</span>
                        <span class="font-semibold text-slate-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore illo architecto natus doloremque corporis reprehenderit. Quisquam fugit tenetur iste quae.</span>
                    </div>
                </div>
                <!-- button -->
                <div class="flex justify-end items-center">  
                    <div class="flex items-center gap-2">
                        <ButtonBase label="Tolak Pengajuan Cuti"/>
                        <ButtonBase label="Setujui Pengajuan Cuti" mode="solid"/>
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
            label: 'Pengajuan Cuti',
            to: '/cuti-request',
            icon: 'i-heroicons-check-circle',
            labelClass: 'text-slate-600 text-base font-semibold',
            iconClass: 'text-slate-600'
        },
        {
            label: 'Detail Pengajuan Cuti',
            labelClass: 'text-blue-600 text-base font-semibold',
            iconClass: 'text-blue-600'
        },
    ];
</script>