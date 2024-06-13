<template>
    <div class="flex flex-col space-y-4 px-8 pt-4 pb-12 w-full overflow-y-auto">
        <!-- title page -->
        <div class="p-4 w-full">
            <h1 class="mb-2 font-bold text-3xl">Detail Personel</h1>
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
                        <span class="font-semibold text-xl">Detail Informasi Personel</span>
                    </div>
                    <div class="flex gap-4">
                        <ButtonBase label="Hapus Personel" icon="i-heroicons-trash" />
                        <ButtonBase label="Edit Personel" icon="i-heroicons-pencil-square" mode="solid" />
                    </div>
                </div>
                <!-- body -->
                <div class="gap-8 gap-y-8 border-y grid grid-cols-5 p-8 text-lg">
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Foto</span>
                        <span>123</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Nama</span>
                        <span class="text-slate-800">Ilham Garin Nugroho</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Role</span>
                        <span class="text-slate-800">Web Developer</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Level</span>
                        <span class="text-slate-800">Level 2</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Status</span>
                        <span class="text-slate-800">Aktif</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Terdaftar</span>
                        <span class="text-slate-800">17 Agustus 1945</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Telepon</span>
                        <span class="text-slate-800">081234567890</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Email</span>
                        <span class="text-slate-800">mail@mail.com</span>
                    </div>
                    <div class="flex flex-col gap-2 font-medium">
                        <span class="text-slate-600">Password</span>
                        <span class="text-slate-800">pass12345</span>
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
            label: 'Personel',
            to: '/account',
            icon: 'i-heroicons-users',
            labelClass: 'text-slate-600 text-base font-semibold',
            iconClass: 'text-slate-600'
        },
        {
            label: 'Detail Personel',
            labelClass: 'text-blue-600 text-base font-semibold',
            iconClass: 'text-blue-600'
        },
    ];
</script>