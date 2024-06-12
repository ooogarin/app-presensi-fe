<template>
    <div class="flex flex-col space-y-4 px-8 py-4 w-full overflow-y-auto">
        <!-- title page -->
        <div class="p-4 w-full">
            <h1 class="mb-2 font-bold text-3xl">Presensi</h1>
            <div class="flex space-x-1">
                <UBreadcrumb :links="linkBreadcrumb">
                    <template #default="{ link, isActive, index }">
                        <span :class="isActive ? 'text-medium' : 'text-normal'" class="text-blue-600">
                            {{ link.label }}
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
                    <UIcon name="i-flowbite-filter-outline" class="w-6 h-6 text-blue-600" />
                    <span class="font-bold text-xl">Filter Presensi</span>
                </div>
                <button @click="isFilterWrap = !isFilterWrap"
                    class="flex justify-center items-center border-2 bg-slate-50 hover:bg-slate-100 border-blue-600 w-12 font-medium transition duration-500 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-100 rounded-full h-12 text-blue-600">
                    <IconsChevronDown :class="{ 'rotate-180': !isFilterWrap }"
                        class="h-8 text-slate-600 transition duration-500 stroke-2 stroke-blue-600" />
                </button>
            </div>

            <!-- show/hide filter -->
            <div :class="{ 'h-0': isFilterWrap, 'h-[284px]': !isFilterWrap }"
                class="transition-all duration-500 overflow-hidden">
                <!-- list filter -->
                <div class="gap-6 grid grid-cols-12 p-6 w-full">
                    <InputDatePicker v-model="selectedDate" :dataSelect="dataSelectDate" mode="range"
                        class="flex flex-col col-span-4 w-full" />
                    <InputSelect v-model="selectedDivision" :dataSelect="dataSelectDivision"
                        class="flex flex-col col-span-4 w-full" />
                    <InputSelect v-model="selectedShift" :dataSelect="dataSelectShift"
                        class="flex flex-col col-span-4 w-full" />
                    <InputSelect v-model="selectedAccount" :dataSelect="dataSelectAccount"
                        class="flex flex-col col-span-12 w-full" />
                </div>
            
                <!-- button submit -->
                <div class="flex justify-end space-x-6 mb-1 px-8">
                    <button @click="handleResetFilter"
                        class="border-2 bg-slate-50 hover:bg-slate-100 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-100 px-4 py-2 border-blue-600 rounded-xl w-32 h-12 font-medium text-blue-600">Reset</button>
                    <button @click="handleSubmitFilter"
                        class="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800 px-4 py-2 rounded-xl w-32 h-12 font-medium text-slate-50">Submit</button>
                </div>
            </div>
        </div>

        <!-- data -->
        <div class="flex flex-col space-y-6 bg-white shadow p-6 rounded-xl w-full">
            <div class="flex justify-between">
                <div class="flex items-center gap-2">
                    <svg class="w-6 h-6 stroke-2 stroke-blue-600" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span class="font-bold text-xl">Data Presensi</span>
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
                    <tr v-if="pending.value" class="odd:bg-slate-100 even:bg-white border-b">
                        <td colspan="7" class="px-2 py-4 border-r font-medium text-center text-slate-800">Loading...</td>
                    </tr>
                    <tr v-else v-for="(item, index) in dataTable" class="odd:bg-slate-100 even:bg-white border-b">
                        <td class="px-2 py-4 border-r font-medium text-center text-slate-800">{{ index + 1 }}.</td>
                        <td class="px-2 py-4 border-r font-medium text-slate-800">{{ item.nama }}</td>
                        <td class="px-2 py-4 border-r font-medium text-slate-800">{{ item.tanggal }}</td>
                        <td class="px-2 py-4 border-r font-medium text-slate-800">{{ item.shifting }}</td>
                        <td class="px-2 py-4 border-r font-medium text-slate-800">{{ item.start }}</td>
                        <td class="px-2 py-4 border-r font-medium text-slate-800">{{ item.end }}</td>
                        <td class="px-2 font-medium text-slate-800">
                            <NuxtLink :to="`/attendance/${index + 1}`"
                                class="flex justify-center items-center bg-slate-50 hover:bg-slate-100 m-auto border rounded-full w-10 h-10">
                                <UIcon name="i-heroicons-document-magnifying-glass" class="w-6 h-6 text-green-600" />
                            </NuxtLink>
                        </td>
                    </tr>
                    <tr class="bg-white h-20">
                        <td class="px-2 py-4" colspan="7">
                            <div class="flex flex-row justify-between px-4 w-full">
                                <div>
                                    Menampilkan <span>{{ dataTable.length }}</span> data dari <span>{{ dataTable.length }}</span> data
                                </div>
                                <div class="flex flex-row -space-x-px shadow rounded-md">
                                    <a href=""
                                        class="flex justify-center items-center border-slate-300 bg-white hover:bg-slate-100 border rounded-l-md w-8 h-8">
                                        <svg class="w-6 h-6 stroke-2 stroke-slate-600" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 18L9 12L15 6" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                    <a href=""
                                        class="flex justify-center items-center border-slate-300 bg-white hover:bg-slate-100 border w-8 h-8 text-slate-600">
                                        <span>1</span>
                                    </a>
                                    <a href=""
                                        class="flex justify-center items-center border-slate-300 bg-white hover:bg-slate-100 border w-8 h-8 text-slate-600">
                                        <span>2</span>
                                    </a>
                                    <a href=""
                                        class="flex justify-center items-center border-slate-300 bg-blue-600 border w-8 h-8 text-white">
                                        <span>3</span>
                                    </a>
                                    <a href=""
                                        class="flex justify-center items-center border-slate-300 bg-white hover:bg-slate-100 border w-8 h-8 text-slate-600">
                                        <span>4</span>
                                    </a>
                                    <a href=""
                                        class="flex justify-center items-center border-slate-300 bg-white hover:bg-slate-100 border w-8 h-8 text-slate-600">
                                        <span>5</span>
                                    </a>
                                    <a href=""
                                        class="flex justify-center items-center border-slate-300 bg-white hover:bg-slate-100 border rounded-r-md w-8 h-8">
                                        <svg class="w-6 h-6 stroke-2 stroke-slate-600" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 18L15 12L9 6" stroke-linecap="round" stroke-linejoin="round" />
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
import { useTokenStore } from '/stores/token';
import dayjs from 'dayjs';
import { useApiAttendance } from '/composables/useApiAttendance';
import { useFormatDate } from '/composables/useFormatDate';

// toggle filter
const isFilterWrap = ref(true);

// link breadcrumb
const linkBreadcrumb = [
    {
        label: 'Presensi',
        icon: 'i-heroicons-pencil-square',
        labelClass: 'text-blue-600 text-base font-semibold',
        iconClass: 'text-blue-600'
    },
];

// 1. data select: date (datepicker)
const selectedDate = ref({ start: '', end: '' });
const dataSelectDate = {
    info: {
        label: "Pilih Periode Presensi",
        placeholder: "Pilih Periode Presensi"
    },
    data: computed(() => selectedDate.value.start === "" || selectedDate.value.start === null ? "-" : (`${dayjs(selectedDate.value.start).format('DD-MM-YYYY')} - ${dayjs(selectedDate.value.end).format('DD-MM-YYYY')}`))
}
// 2. data select: division
const selectedDivision = ref('-');
const dataSelectDivision = {
    info: {
        label: "Divisi",
        placeholder: "Pilih Semua Divisi"
    },
    options: [
        {
            value: 1,
            label: "Divisi 1"
        },
        {
            value: 2,
            label: "Divisi 2"
        },
        {
            value: 3,
            label: "Divisi 3"
        },
        {
            value: 4,
            label: "Divisi 4"
        },
        {
            value: 5,
            label: "Divisi 5"
        },
    ]
};
// 3. data select: shift
const selectedShift = ref('-');
const dataSelectShift = {
    info: {
        label: "Shift",
        placeholder: "Pilih Semua Shift"
    },
    options: [
        {
            value: 1,
            label: "Shift 1"
        },
        {
            value: 2,
            label: "Shift 2"
        },
        {
            value: 3,
            label: "Shift 3"
        },
    ]
};
// 4. data select: account (personel)
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



// filter (payload)
const filterPayload = ref({
    start: "-",
    end: "-",
    id_division: "-",
    id_shifting: "-",
    id_account: [],
    id_admin: []
});

// data from API BE (attendance)
const getDataAttendance = (filterPayload) => {
    const tokenStore = useTokenStore();
    const token = tokenStore.dataUser.token;

    // call API login
    const { data: response, status, pending } = useFetch('http://localhost:3000/web/v1/attendance/get-attendance', {
        lazy: true,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: {
            start: filterPayload.start,
            end: filterPayload.end,
            id_division: filterPayload.id_division,
            id_shifting: filterPayload.id_shifting,
            id_account: filterPayload.id_account,
            id_admin: filterPayload.id_admin,
        },
    });

    let data;
    if (status.value === "success") {
        data = response.value.data.map((item) => {
            const newFormat = {
                nama: item.schedule.account.lname_user,
                tanggal: item.date_attend === '-' ? "-" : useFormatDate(dayjs(item.date_attend, 'YYYY-MM-DD').format('DD-MM-YYYY')),
                shifting: `${item.schedule.shifting.division.division_sname} - ${item.schedule.shifting.shifting_shift_turn.turn_sname} (${item.schedule.shifting.shift_start} - ${item.schedule.shifting.shift_end}) - ${item.schedule.shifting.shifting_shift_type.type_sname}`,
                start: item.attendance_start,
                end: item.attendance_end,
                isPassDay: (item.date_attend_end > item.date_attend_start) ? true : false, // jika tanggal presensi selesai lebih besar dari tanggal presensi mulai
                id_schedule: item.schedule.id_schedule // untuk detail action
            }

            return newFormat;
        });
    } else {
        data = [];
    }

    return { data, pending };
}

// store data
const dataTable = ref();
const pending = ref();

const dataAttendance = getDataAttendance(filterPayload.value);
dataTable.value = dataAttendance.data;
pending.value = dataAttendance.pending;



// handle submit filter
const handleSubmitFilter = () => {
    filterPayload.value = {
        start: selectedDate.value.start === '' ? '-' : dayjs(selectedDate.value.start).format('YYYY-MM-DD'),
        end: selectedDate.value.end === '' ? '-' : dayjs(selectedDate.value.end).format('YYYY-MM-DD'),
        id_division: selectedDivision.value,
        id_shifting: selectedShift.value,
        id_account: selectedAccount.value,
    }
    console.log('Submit filter :>> ', toRaw(filterPayload.value));
}

// handle reset filter
const handleResetFilter = () => {
    selectedDate.value = { start: '', end: ''};
    selectedDivision.value = '-';
    selectedShift.value = '-';
    selectedAccount.value = '-';

    filterPayload.value = {
        start: selectedDate.value.start,
        end: selectedDate.value.end,
        id_division: selectedDivision.value,
        id_shifting: selectedShift.value,
        id_account: selectedAccount.value,
    }

    console.log('Reset filter :>> ', filterPayload.value);
}


// data table
// const dataApi = await useApiAttendance();
// const dataTable = dataApi.data;
</script>