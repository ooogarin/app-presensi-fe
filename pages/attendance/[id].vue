<template>
  <div class="flex flex-col space-y-4 px-8 pt-4 pb-12 w-full overflow-y-auto">
    <!-- title page -->
    <div class="p-4 w-full">
        <h1 class="mb-2 font-bold text-3xl">Presensi</h1>
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
        <!-- header -->
        <div class="flex gap-2 bg-white shadow p-6 rounded-xl w-full text-lg">
            <div class="flex flex-col gap-2 w-3/12 font-medium">
                <span class="text-slate-600">Nama</span>
                <span class="text-slate-800">Ilham Garin Nugroho</span>
            </div>
            <div class="flex flex-col gap-2 w-5/12 font-medium">
                <span class="text-slate-600">Divisi</span>
                <span class="font-semibold text-slate-800">WMS (Warehouse Management System)</span>
            </div>
            <div class="flex flex-col gap-2 w-4/12 font-medium">
                <span class="text-slate-600">Shifting</span>
                <span class="font-semibold text-slate-800">WMS - S1 (08.00 - 15.00) - NRM</span>
            </div>
        </div>
        <!-- body 1 - mulai -->
        <div class="flex flex-col gap-6 bg-white shadow p-6 rounded-xl w-full">
            <!-- header -->
            <div class="flex justify-between items-center">  
                <div class="flex items-center gap-2">
                    <UIcon name="i-flowbite-file-lines-outline" class="w-6 h-6 text-blue-600" />
                    <span class="font-semibold text-xl">Detail Presensi Mulai</span>
                </div>
                <Button label="Lakukan Presensi" icon="i-flowbite-edit-outline" mode="solid" />
            </div>
            <!-- body -->
            <div class="gap-2 gap-y-8 border-y grid grid-cols-4 p-8 text-lg">
                <div class="flex flex-col gap-2 font-medium">
                    <span class="text-slate-600">Kode Jadwal</span>
                    <span class="text-slate-800">ABCDE1234567</span>
                </div>
                <div class="flex flex-col gap-2 font-medium">
                    <span class="text-slate-600">Tanggal Presensi</span>
                    <span class="font-semibold text-slate-800">17 Agustus 1945</span>
                </div>
                <div class="flex flex-col gap-2 font-medium">
                    <span class="text-slate-600">Jam Presensi</span>
                    <span class="font-semibold text-slate-800">08:20:03</span>
                </div>
                <div class="flex flex-col gap-2 font-medium">
                    <span class="text-slate-600">Status</span>
                     <LabelStatusPresensi status="ontime" />
                </div>
                <div class="flex flex-col gap-2 col-span-2 font-medium">
                    <span class="text-slate-600">Keterangan</span>
                    <span class="font-semibold text-slate-800">Macet</span>
                </div>
                <div class="flex flex-col justify-center gap-2 font-medium">
                    <Button label="Lihat Lokasi" icon="i-flowbite-map-pin-alt-outline"/>
                </div>
                <div class="flex flex-col justify-center gap-2 font-medium">
                    <Button label="Lihat Foto" icon="i-heroicons-photo"/>
                </div>
            </div>
        </div>
        <!-- body 2 - selesai -->
        <div class="flex flex-col gap-6 bg-white shadow p-6 rounded-xl w-full">
            <!-- header -->
            <div class="flex justify-between items-center">  
                <div class="flex items-center gap-2">
                    <UIcon name="i-flowbite-file-lines-outline" class="w-6 h-6 text-blue-600" />
                    <span class="font-semibold text-xl">Detail Presensi Selesai</span>
                </div>
                <Button label="Lakukan Presensi" icon="i-flowbite-edit-outline" mode="solid" />
            </div>
            <!-- body -->
            <div class="gap-2 gap-y-8 border-y grid grid-cols-4 p-8 text-lg">
                <div class="flex flex-col gap-2 font-medium">
                    <span class="text-slate-600">Kode Jadwal</span>
                    <span class="text-slate-800">ABCDE1234567</span>
                </div>
                <div class="flex flex-col gap-2 font-medium">
                    <span class="text-slate-600">Tanggal Presensi</span>
                    <span class="font-semibold text-slate-800">17 Agustus 1945</span>
                </div>
                <div class="flex flex-col gap-2 font-medium">
                    <span class="text-slate-600">Jam Presensi</span>
                    <span class="font-semibold text-slate-800">08:20:03</span>
                </div>
                <div class="flex flex-col gap-2 font-medium">
                    <span class="text-slate-600">Status</span>
                    <LabelStatusPresensi status="late" />
                </div>
                <div class="flex flex-col gap-2 col-span-2 font-medium">
                    <span class="text-slate-600">Keterangan</span>
                    <span class="font-semibold text-slate-800">Macet</span>
                </div>
                <div class="flex flex-col justify-center gap-2 font-medium">
                    <Button label="Lihat Lokasi" icon="i-flowbite-map-pin-alt-outline"/>
                </div>
                <div class="flex flex-col justify-center gap-2 font-medium">
                    <Button label="Lihat Foto" icon="i-heroicons-photo"/>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import { ref } from 'vue';
    const route = useRoute();

    export default {
        setup() {
            // toggle filter
            const isFilterWrap = ref(false);

            // link breadcrumb
            const linkBreadcrumb = [
                {
                    label: 'Presensi',
                    to: '/attendance',
                    icon: 'i-heroicons-pencil-square',
                    labelClass: 'text-slate-600 text-base font-semibold',
                    iconClass: 'text-slate-600'
                },
                {
                    label: 'Detail Presensi',
                    labelClass: 'text-blue-600 text-base font-semibold',
                    iconClass: 'text-blue-600'
                },
            ];

            return {
                isFilterWrap,
                linkBreadcrumb,
                route
            };
        }
    };
</script>