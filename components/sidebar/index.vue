<template>
    <div class="flex flex-col bg-white w-64 h-full">
        <SidebarHeader />
        <div class="flex flex-col px-4 py-8 overflow-y-auto sidebar">
            <ul class="space-y-4">
                <li>
                    <NuxtLink to="/" class="flex gap-4 hover:bg-slate-100 px-4 py-3 rounded-xl text-slate-600 stroke-slate-600">
                        <IconsHome class="h-6 stroke-2"/>
                        <span class="font-bold text-left grow">Dashboard</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/attendance" class="flex hover:bg-slate-100 px-4 py-3 rounded-xl text-slate-600 stroke-slate-600">
                        <IconsEdit class="h-6 stroke-2"/>
                        <span class="ml-4 font-bold text-left grow">Presensi</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/schedule" class="flex hover:bg-slate-100 px-4 py-3 rounded-xl text-slate-600 stroke-slate-600">
                        <IconsCalendar class="h-6 stroke-2"/>
                        <span class="ml-4 font-bold text-left grow">Jadwal</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/shifting" class="flex hover:bg-slate-100 px-4 py-3 rounded-xl text-slate-600 stroke-slate-600">
                        <IconsClock class="h-6 stroke-2"/>
                        <span class="ml-4 font-bold text-left grow">Shifting</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/kpi" class="flex hover:bg-slate-100 px-4 py-3 rounded-xl text-slate-600 stroke-slate-600">
                        <IconsUser class="h-6 stroke-2"/>
                        <span class="ml-4 font-bold text-left grow">KPI Personel</span>
                    </NuxtLink>
                </li>
                <li class="relative">
                    <button @click="isCutiWrap = !isCutiWrap" class="flex hover:bg-slate-100 px-4 py-3 rounded-xl w-full text-slate-600 stroke-slate-600">
                        <IconsTrello class="h-6 stroke-2"/>
                        <span class="ml-4 font-bold text-left grow">Cuti</span>
                        <IconsChevronDown :class="{'rotate-180': !isCutiWrap}" class="h-6 transition duration-500 stroke-2"/>
                    </button>
                    <ul :class="{'h-0 py-0': isCutiWrap, 'h-[120px] py-2': !isCutiWrap}" class="space-y-2 w-full transition-all duration-500 overflow-hidden">
                        <li>
                            <NuxtLink to="/cuti-request" class="flex hover:bg-slate-100 py-3 pr-4 pl-8 rounded-xl text-slate-600 stroke-slate-600">
                                <IconsCheckCircle class="h-6 stroke-2"/>
                                <span class="ml-4 font-bold text-left grow">Pengajuan Cuti</span>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/cuti-data" class="flex hover:bg-slate-100 py-3 pr-4 pl-8 rounded-xl text-slate-600 stroke-slate-600">
                                <IconsFolder class="h-6 stroke-2"/>
                                <span class="ml-4 font-bold text-left grow">Data Cuti</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
            <span class="ml-4 py-4 font-bold text-left text-slate-600 text-xl">Master</span>
            <ul class="space-y-4">
                <li>
                    <button @click="isKaryawanWrap = !isKaryawanWrap" class="flex hover:bg-slate-100 px-4 py-3 rounded-xl w-full text-slate-600 stroke-slate-600">
                        <IconsUsers class="h-6 stroke-2"/>                           
                        <span class="ml-4 font-bold text-left grow">Karyawan</span>
                        <IconsChevronDown :class="{'rotate-180': !isKaryawanWrap}" class="h-6 transition duration-500 stroke-2"/>
                    </button>
                    <ul :class="{'h-0 py-0': isKaryawanWrap, 'h-[232px] py-2': !isKaryawanWrap}" class="space-y-2 w-full transition-all duration-500 overflow-hidden">
                        <li>
                            <NuxtLink to="/account" class="flex hover:bg-slate-100 py-3 pr-4 pl-8 rounded-xl text-slate-600 stroke-slate-600">
                                <IconsDatabase class="h-6 stroke-2"/>
                                <span class="ml-4 font-bold text-left grow">Personel</span>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/account-level" class="flex hover:bg-slate-100 py-3 pr-4 pl-8 rounded-xl text-slate-600 stroke-slate-600">
                                <IconsDatabase class="h-6 stroke-2"/>
                                <span class="ml-4 font-bold text-left grow">Level</span>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/division" class="flex hover:bg-slate-100 py-3 pr-4 pl-8 rounded-xl text-slate-600 stroke-slate-600">
                                <IconsDatabase class="h-6 stroke-2"/>
                                <span class="ml-4 font-bold text-left grow">Divisi</span>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/role" class="flex hover:bg-slate-100 py-3 pr-4 pl-8 rounded-xl text-slate-600 stroke-slate-600">
                                <IconsDatabase class="h-6 stroke-2"/>
                                <span class="ml-4 font-bold text-left grow">Role</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <button @click="isShiftWrap = !isShiftWrap" class="flex hover:bg-slate-100 px-4 py-3 rounded-xl w-full text-slate-600 stroke-slate-600">
                        <IconsUsers class="h-6 stroke-2"/>                           
                        <span class="ml-4 font-bold text-left grow">Shift</span>
                        <IconsChevronDown :class="{'rotate-180': !isShiftWrap}" class="h-6 transition duration-500 stroke-2"/>
                    </button>
                    <ul :class="{'h-0 py-0': isShiftWrap, 'h-[120px] py-2': !isShiftWrap}" class="space-y-2 w-full transition-all duration-500 overflow-hidden">
                        <li>
                            <NuxtLink to="/shift-turn" class="flex hover:bg-slate-100 py-3 pr-4 pl-8 rounded-xl text-slate-600 stroke-slate-600">
                                <IconsDatabase class="h-6 stroke-2"/>
                                <span class="ml-4 font-bold text-left grow">Shift Turn</span>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/shift-type" class="flex hover:bg-slate-100 py-3 pr-4 pl-8 rounded-xl text-slate-600 stroke-slate-600">
                                <IconsDatabase class="h-6 stroke-2"/>
                                <span class="ml-4 font-bold text-left grow">Shift Type</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NuxtLink to="/location" class="flex gap-4 hover:bg-slate-100 px-4 py-3 rounded-xl text-slate-600 stroke-slate-600">
                        <IconsMapPin class="h-6 stroke-2"/>
                        <span class="font-bold text-left grow">Data Lokasi</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/cuti-type" class="flex gap-4 hover:bg-slate-100 px-4 py-3 rounded-xl text-slate-600 stroke-slate-600">
                        <IconsSave class="h-6 stroke-2"/>
                        <span class="font-bold text-left grow">Data Jenis Cuti</span>
                    </NuxtLink>
                </li>
            </ul>
            <span class="ml-4 py-4 font-bold text-left text-slate-600 text-xl">Laporan</span>
            <ul class="space-y-4">
                <li>
                    <NuxtLink to="/report" class="flex gap-4 hover:bg-slate-100 px-4 py-3 rounded-xl text-slate-600 stroke-slate-600">
                        <IconsDownload class="h-6 stroke-2"/>
                        <span class="font-bold text-left grow">Laporan</span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        setup() {
            // toggle
            const isCutiWrap = ref(true); // toggle sidebar: cuti
            const isKaryawanWrap = ref(true); // toggle sidebar: karyawan
            const isShiftWrap = ref(true); // toggle sidebar: shift

            return {
                isCutiWrap,
                isKaryawanWrap,
                isShiftWrap
            };
        }
    };
</script>

<style scoped>
    .router-link-active {
        background-color: #2563eb;
        color: #fff;
        stroke: #fff;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .sidebar::-webkit-scrollbar {
        display: none;
    }
  
    /* Hide scrollbar for IE, Edge and Firefox */
    .sidebar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
</style>